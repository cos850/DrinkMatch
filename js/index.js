const $root = $('#root');
const $main = $root.find('#main');
const $test = $root.find('#test');
const $result = $root.find('#result');

const $question = $test.find('#question');
const $choiceGroup = $test.find('#choice-group');

const mbti = {E: 0, I: 0, N: 0, S: 0, T: 0, F: 0, J: 0, P: 0};
let current = -1;

function showMain(){
    $test.hide();
    $result.hide();
    $main.show();
}

function showTest() {
    $main.hide();
    $result.hide();
    $test.show();
    next();
}

function showResult(){
    $test.hide();
    $main.hide();

    const result = findResult(mbti);
    
    $result.find('.h1').text(result.menu);
    $result.find('.px-3').text(result.desc);
    $result.show();
}

function next(){
    if(++current > tests.length-1) {    // end test
        showResult();
    } else {
        const testObj = tests[current];

        $question.text(testObj.question);

        const $btn0 = $choiceGroup.children().eq(0);
        const $btn1 = $choiceGroup.children().eq(1);

        $btn0.text(testObj.answers[0].text)
            .off('click')
            .on('click', ()=>choice(testObj.answers[0].type));
        
        $btn1.text(testObj.answers[1].text)
            .off('click')
            .on('click', ()=>choice(testObj.answers[1].type));
    } 
}

function share(){
    navigator.clipboard.writeText(location.protocol + "//" + location.host).then(()=>{
        alert('복사되었습니다.');
    });
}

function choice(type){
    mbti[type]++;
    next();
}