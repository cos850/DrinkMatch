const tests = [
    {type: 'EI', question: `외향형(E) vs 내향형(I) 테스트 질문`, answers: [{type: 'I', text: 'Introversion'}, {type: 'E', text: 'Extroversion'}]},
    {type: 'SN', question: `감각형(S) vs 직관형(N) 테스트 질문`, answers: [{type: 'S', text: 'Sensing'}, {type: 'N', text: 'iNtuition'}]},
    {type: 'TF', question: `사고형(T) vs 감정형(F) 테스트 질문`, answers: [{type: 'F', text: 'Feeling'}, {type: 'T', text:'Thinking'}]},
    {type: 'JP', question: `판단형(J) vs 인식형(P) 테스트 질문`, answers: [{type: 'P', text: 'Perceiving'}, {type: 'J', text: 'Judging'}]}
];

const results = [
    {
        type: 'ISTJ',
        menu: 'ISTJ 메뉴',
        desc: 'ISTJ 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. '
    },
    {
        type: 'ISFJ',
        menu: 'ISFJ Menu',
        desc: 'ISFJ 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. '
    },
    {
        type: 'INFJ',
        menu: 'INFJ Menu',
        desc: 'INFJ 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. '
    },
    {
        type: 'INTJ',
        menu: 'INTJ Menu',
        desc: 'INTJ 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. '
    },
    {
        type: 'ISTP',
        menu: 'ISTP 메뉴',
        desc: 'ISTP 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. '
    },
    {
        type: 'ISFP',
        menu: 'ISFP Menu',
        desc: 'ISFP 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. '
    },
    {
        type: 'INFP',
        menu: 'INFP Menu',
        desc: 'INFP 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. '
    },
    {
        type: 'INTP',
        menu: 'INTP Menu',
        desc: 'INTP 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. '
    },
    {
        type: 'ESTP',
        menu: 'ESTP 메뉴',
        desc: 'ESTP 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. '
    },
    {
        type: 'ESFP',
        menu: 'ESFP Menu',
        desc: 'ESFP 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. '
    },
    {
        type: 'ENFP',
        menu: 'ENFP Menu',
        desc: 'ENFP 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. '
    },
    {
        type: 'ENTP',
        menu: 'ENTP Menu',
        desc: 'ENTP 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. '
    },
    {
        type: 'ESTJ',
        menu: 'ESTJ 메뉴',
        desc: 'ESTJ 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. '
    },
    {
        type: 'ESFJ',
        menu: 'ESFJ Menu',
        desc: 'ESFJ 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. '
    },
    {
        type: 'ENFJ',
        menu: 'ENFJ Menu',
        desc: 'ENFJ 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. '
    },
    {
        type: 'ENTJ',
        menu: 'ENTJ Menu',
        desc: 'ENTJ 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. 메뉴 및 성격 특징의 설명 공간. '
    }
]

function findResult(mbti){
    const resultType = (mbti.E > mbti.I ? 'E' : 'I') 
        + (mbti.N > mbti.S ? 'N' : 'S')
        + (mbti.F > mbti.T ? 'F' : 'T')
        + (mbti.J > mbti.P ? 'J' : 'P');

        console.log('result: ' + resultType);
    
    return results.find(ele=>ele.type === resultType);
}