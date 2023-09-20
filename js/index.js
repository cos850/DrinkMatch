const $root = $('#root');
const $main = $root.find('#main');
const $test = $root.find('#test');
const $result = $root.find('#result');

const $question = $test.find('#question');
const $choiceGroup = $test.find('#choice-group');


let answers = [];
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

    // TODO_HR : 결과 가져오기
    const result = {
        menu: '아메리카노',
        desc: '당신은 ~~~~ 성향이시군요? 이렇게 멋진 당신에게는 아메리카노가 어울려요.'
    };
    
    $result.find('.h1').text(result.menu);
    $result.find('.px-3').text(result.desc);
    $result.show();
}

function choice(selectedValue){
    answers[current] = {
        Q: current,
        A: selectedValue
    };

    console.dir(answers);
    
    next();
}

function next(){
    current++;

    if(current === testList.length) { // last question
        showResult();
    } else {
        let testObj = testList[current];

        $question.text(testObj.question);
        $choiceGroup.children().eq(0).text(testObj.choice1);
        $choiceGroup.children().eq(1).text(testObj.choice2);
    } 
}

function share(){
    navigator.clipboard.writeText(location.protocol + "//" + location.host).then(()=>{
        alert('복사되었습니다.');
    });
}