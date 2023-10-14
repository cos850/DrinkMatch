$(function(){   // DOM 로드 완료되면 실행
    const $test = $('#test');
    const $question = $test.find('#question');
    const $choiceGroup = $test.find('#choice-group');
    const $result = $('#result');

    const mbti = {E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0};
    let current = -1;

    function showTest(){
        $result.hide();
        $test.show();
        next();
    }

    function next(){
        if(++current > tests.length-1) {    // end test
            showResult();
        } else {
            const testObj = tests[current];

            $question.html(testObj.question);

            $('.answer-btn').remove();

            const $btn0 = $('<button />').addClass('btn btn-secondary fw-bold answer-btn')
                .text(testObj.answers[0].text)
                .off('click')
                .on('click', ()=>choice(testObj.answers[0].type));

                console.dir($btn0)
            
            const $btn1 = $('<button />').addClass('btn btn-secondary fw-bold answer-btn')
                .text(testObj.answers[1].text)
                .off('click')
                .on('click', ()=>choice(testObj.answers[1].type));

            $choiceGroup.append($btn0).append($('<br />')).append($btn1);
        } 
    }

    function choice(type){
        mbti[type]++;
        next();
    }

    function showResult(){
        // location.href = "/result.html";
        $test.hide();
        $result.show();

        const result = findResult(mbti);
    
        $result.find('.h1').text(result.menu);
        $result.find('.px-3').text(result.desc);
        $result.show();
    }

    showTest();
});

function restart(){
    location.href='/index.html';
}

function share(){
    navigator.clipboard.writeText(location.protocol + "//" + location.host).then(()=>{
        alert('복사되었습니다.');
    });
}


