const tests = [
    // {type: 'EI', question: '외향형(E) vs 내향형(I) 테스트 질문. 외향형(E) vs 내향형(I) 테스트 질문. 외향형(E) vs 내향형(I) 테스트 질문.', answers: [{type: 'I', text: 'Introversion'}, {type: 'E', text: 'Extroversion'}]},
    // {type: 'SN', question: '감각형(S) vs 직관형(N) 테스트 질문. 감각형(S) vs 직관형(N) 테스트 질문. 감각형(S) vs 직관형(N) 테스트 질문.', answers: [{type: 'S', text: 'Sensing'}, {type: 'N', text: 'iNtuition'}]},
    // {type: 'TF', question: '사고형(T) vs 감정형(F) 테스트 질문. 사고형(T) vs 감정형(F) 테스트 질문. 사고형(T) vs 감정형(F) 테스트 질문.', answers: [{type: 'F', text: 'Feeling'}, {type: 'T', text:'Thinking'}]},
    // {type: 'JP', question: '판단형(J) vs 인식형(P) 테스트 질문. 판단형(J) vs 인식형(P) 테스트 질문. 판단형(J) vs 인식형(P) 테스트 질문.', answers: [{type: 'P', text: 'Perceiving'}, {type: 'J', text: 'Judging'}]},

    {type: 'EI', question: '자주 가던 카페에 간 우리 <br> 사장님이 아는척하며 말을 걸어온다', answers: [{type: 'I', text: '불편하지만 티 내지 않고 받아준다'}, {type: 'E', text: '알아봐 주다니! 대화를 이어간다'}]},
    {type: 'JP', question: '사장님이 메뉴를 추천해 줬다 <br> 이때 나는?', answers: [{type: 'P', text: '한 번 먹어본다'}, {type: 'J', text: '원래 먹으려던걸 시킨다'}]},
    {type: 'SN', question: '같이 간 친구가 뒤 테이블 의자가 혼자 움직였다고 한다', answers: [{type: 'S', text: '잘못봤나보네'}, {type: 'N', text: '어떤 의자가 움직였는데?'}]},
    {type: 'TF', question: '사장님이 솔직하게 음료가 어땠냐고 묻는다 <br> 음료는 맛이 없었다', answers: [{type: 'F', text: '사장님 앞에서 도저히 말할 수 없어서 둘러댄다'}, {type: 'T', text:'사장님을 위해 솔직히 피드백 해준다'}]},
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

function findResult(mbti) {
    const resultType = (mbti.E > mbti.I ? 'E' : 'I') 
        + (mbti.N > mbti.S ? 'N' : 'S')
        + (mbti.F > mbti.T ? 'F' : 'T')
        + (mbti.J > mbti.P ? 'J' : 'P');

    return results.find(ele=>ele.type === resultType);
}