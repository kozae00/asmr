const questions = [
  {
    id: 'q1',
    title: '쉬는 날 가장 끌리는 분위기는?',
    choices: [
      { text: '친구들과 떠들며 가볍게 리셋', score: { E: 2, P: 1 } },
      { text: '혼자 이어폰 끼고 조용히 충전', score: { I: 2, J: 1 } },
      { text: '새로운 카페나 공간 탐험', score: { E: 1, N: 2 } },
      { text: '익숙한 루틴 안에서 편안하게', score: { I: 1, S: 2 } }
    ]
  },
  {
    id: 'q2',
    title: 'ASMR을 고를 때 먼저 보는 것은?',
    choices: [
      { text: '소리가 선명하게 들리는지', score: { S: 2, T: 1 } },
      { text: '썸네일의 분위기와 감성', score: { N: 1, F: 2 } },
      { text: '템포가 지루하지 않은지', score: { E: 1, P: 2 } },
      { text: '길이와 구성, 반복 패턴', score: { J: 2, T: 1 } }
    ]
  },
  {
    id: 'q3',
    title: '가장 만족스러운 소리 질감은?',
    choices: [
      { text: '말랑한 젤리의 쫀득한 압력', score: { S: 2, F: 1 } },
      { text: '상상력을 건드리는 낯선 소리', score: { N: 2, P: 1 } },
      { text: '딱딱 맞아떨어지는 클릭음', score: { T: 2, J: 1 } },
      { text: '부드럽고 다정한 마찰음', score: { F: 2, I: 1 } }
    ]
  },
  {
    id: 'q4',
    title: '영상 플레이리스트를 만들면?',
    choices: [
      { text: '기분 따라 즉흥적으로 섞는다', score: { P: 2, N: 1 } },
      { text: '잠들기 전용으로 차분하게 정리', score: { J: 2, I: 1 } },
      { text: '핫한 소리를 빠르게 모아본다', score: { E: 2, S: 1 } },
      { text: '내 취향에 맞는 기준으로 큐레이션', score: { T: 2, J: 1 } }
    ]
  },
  {
    id: 'q5',
    title: '스트레스가 올라올 때 필요한 건?',
    choices: [
      { text: '시원하게 터지는 자극', score: { E: 1, S: 2 } },
      { text: '생각이 정리되는 반복감', score: { I: 1, J: 2 } },
      { text: '감정을 부드럽게 눌러주는 소리', score: { F: 2, I: 1 } },
      { text: '집중을 켜주는 정확한 리듬', score: { T: 2, S: 1 } }
    ]
  },
  {
    id: 'q6',
    title: '새로운 ASMR 소재를 보면?',
    choices: [
      { text: '일단 눌러보고 반응을 본다', score: { P: 2, E: 1 } },
      { text: '어떤 소리일지 먼저 상상한다', score: { N: 2, F: 1 } },
      { text: '댓글과 구성을 보고 고른다', score: { J: 1, T: 2 } },
      { text: '익숙한 재료와 비교해본다', score: { S: 2, I: 1 } }
    ]
  },
  {
    id: 'q7',
    title: '가장 편한 영상 속도는?',
    choices: [
      { text: '빠르게 톡톡 이어지는 속도', score: { E: 2, P: 1 } },
      { text: '천천히 깊게 몰입되는 속도', score: { I: 2, F: 1 } },
      { text: '구간별로 확실히 나뉜 속도', score: { J: 2, S: 1 } },
      { text: '예상 밖 변주가 있는 속도', score: { N: 2, P: 1 } }
    ]
  },
  {
    id: 'q8',
    title: '소리를 들은 뒤 남았으면 하는 감각은?',
    choices: [
      { text: '기분 좋은 에너지', score: { E: 2, F: 1 } },
      { text: '머릿속이 정돈된 느낌', score: { T: 1, J: 2 } },
      { text: '부드럽게 풀린 긴장감', score: { I: 1, F: 2 } },
      { text: '새로운 취향을 찾은 재미', score: { N: 2, P: 1 } }
    ]
  },
  {
    id: 'q9',
    title: '가장 보고 싶은 소재 조합은?',
    choices: [
      { text: '왁꾸볼과 젤리의 팝핑 조합', score: { E: 1, S: 2 } },
      { text: '투명 슬라임과 은은한 조명', score: { I: 1, F: 2 } },
      { text: '키보드, 도구, 정리 사운드', score: { T: 2, J: 1 } },
      { text: '처음 보는 디저트 질감 실험', score: { N: 2, P: 1 } }
    ]
  },
  {
    id: 'q10',
    title: '친구에게 추천한다면 어떤 말이 좋나요?',
    choices: [
      { text: '이거 진짜 중독성 있어', score: { E: 2, S: 1 } },
      { text: '자기 전에 틀면 마음이 편해져', score: { I: 2, F: 1 } },
      { text: '소리 밸런스가 깔끔해', score: { T: 2, J: 1 } },
      { text: '생각보다 묘해서 계속 보게 돼', score: { N: 2, P: 1 } }
    ]
  }
];

const profiles = {
  ISTJ: {
    title: '정돈된 캔디 컷팅 ASMR',
    soundName: '사각사각 캔디 컷팅',
    tagline: '규칙적인 절단감으로 머릿속을 차분하게 정리하는 타입',
    description: '선명한 칼질, 일정한 템포, 깔끔한 마감이 잘 맞습니다. 반복감이 있어 집중이나 잠들기 전 루틴으로 쓰기 좋아요.',
    image: '/images/soap-cut.svg',
    audio: ''
  },
  ISFJ: {
    title: '말랑 젤리 마사지 ASMR',
    soundName: '말랑 젤리 마사지',
    tagline: '부드러운 압력과 따뜻한 질감에 안정감을 느끼는 타입',
    description: '자극이 너무 강한 소리보다 둥글고 포근한 소리가 잘 어울립니다. 젤리를 천천히 누르는 소리처럼 긴장을 풀어주는 계열을 추천해요.',
    image: '/images/jelly-candy.svg',
    audio: ''
  },
  INFJ: {
    title: '몽글 슬라임 레이어 ASMR',
    soundName: '몽글 슬라임 레이어',
    tagline: '잔잔한 분위기 속에서 깊게 몰입하는 타입',
    description: '투명 슬라임, 은은한 터치, 낮은 볼륨의 반복음처럼 감정선을 천천히 가라앉히는 소리가 잘 맞습니다.',
    image: '/images/slime.svg',
    audio: ''
  },
  INTJ: {
    title: '정밀 도구 클릭 ASMR',
    soundName: '정밀 도구 클릭',
    tagline: '군더더기 없는 리듬과 선명한 구조를 좋아하는 타입',
    description: '키보드, 도구 정리, 작은 부품 클릭처럼 또렷하고 예측 가능한 소리가 집중감을 만들어줍니다.',
    image: '/images/keyboard.svg',
    audio: ''
  },
  ISTP: {
    title: '쿨톤 팝핑 크런치 ASMR',
    soundName: '팝핑 크런치',
    tagline: '짧고 확실한 자극으로 감각을 깨우는 타입',
    description: '과한 설명 없이 바로 들리는 크런치, 팝핑, 탭핑 계열이 어울립니다. 손맛이 살아있는 영상일수록 만족도가 높아요.',
    image: '/images/wakku-ball.svg',
    audio: ''
  },
  ISFP: {
    title: '말캉 컬러 젤리 ASMR',
    soundName: '컬러 젤리 스퀴시',
    tagline: '시각과 촉각이 같이 편안해야 몰입하는 타입',
    description: '반짝이는 젤리, 투명한 질감, 부드러운 손동작이 있는 소리가 잘 맞습니다. 자극보다는 예쁜 잔향이 핵심이에요.',
    image: '/images/jelly-candy.svg',
    audio: ''
  },
  INFP: {
    title: '새벽 슬라임 속삭임 ASMR',
    soundName: '새벽 슬라임',
    tagline: '작고 섬세한 소리에서 자기만의 세계를 찾는 타입',
    description: '느린 슬라임 터치, 공기감 있는 마찰음, 조용한 플레이팅 소리처럼 상상할 여지를 남기는 ASMR이 잘 어울립니다.',
    image: '/images/slime.svg',
    audio: ''
  },
  INTP: {
    title: '실험실 텍스처 ASMR',
    soundName: '텍스처 실험',
    tagline: '낯선 재료와 소리 패턴을 분석하듯 즐기는 타입',
    description: '젤리, 파우더, 도구 사운드가 섞인 실험형 콘텐츠를 추천합니다. 소리의 차이를 비교하는 재미가 큽니다.',
    image: '/images/texture-lab.svg',
    audio: ''
  },
  ESTP: {
    title: '왁꾸볼 팡팡 ASMR',
    soundName: '왁꾸볼 팡팡',
    tagline: '즉각적인 팝핑감과 생생한 리액션에 끌리는 타입',
    description: '왁꾸볼, 젤리볼, 팝핑 캔디처럼 귀에 바로 꽂히는 소리가 좋습니다. 짧고 강한 구간이 많은 콘텐츠를 추천해요.',
    image: '/images/wakku-ball.svg',
    audio: ''
  },
  ESFP: {
    title: '컬러 젤리 파티 ASMR',
    soundName: '컬러 젤리 파티',
    tagline: '화려한 비주얼과 경쾌한 소리에 에너지를 얻는 타입',
    description: '밝은 색의 젤리, 탱글한 터치, 리듬감 있는 팝핑음이 잘 맞습니다. 친구에게 공유하기 좋은 중독성 있는 계열이에요.',
    image: '/images/jelly-candy.svg',
    audio: ''
  },
  ENFP: {
    title: '왁꾸볼 팝핑 젤리 ASMR',
    soundName: '왁꾸볼 팝핑 젤리',
    tagline: '톡톡 터지는 젤리감으로 기분을 환하게 깨우는 타입',
    description: '예상 밖으로 터지는 팝핑감과 밝은 비주얼이 잘 맞습니다. 신기한 젤리, 왁꾸볼, 컬러풀한 디저트 ASMR을 먼저 붙여보세요.',
    image: '/images/wakku-ball.svg',
    audio: ''
  },
  ENTP: {
    title: '괴짜 텍스처 믹스 ASMR',
    soundName: '텍스처 믹스',
    tagline: '새롭고 묘한 소리에 호기심이 바로 켜지는 타입',
    description: '익숙한 젤리보다 낯선 조합이 더 잘 맞습니다. 바삭함, 말랑함, 팝핑이 교차하는 실험형 영상을 추천해요.',
    image: '/images/texture-lab.svg',
    audio: ''
  },
  ESTJ: {
    title: '깔끔 루틴 컷팅 ASMR',
    soundName: '루틴 컷팅',
    tagline: '시원하게 정리되는 소리에서 만족감을 느끼는 타입',
    description: '비누 컷팅, 캔디 컷팅, 도구 정렬처럼 결과가 또렷한 소리가 좋습니다. 시작과 끝이 명확한 영상이 잘 맞아요.',
    image: '/images/soap-cut.svg',
    audio: ''
  },
  ESFJ: {
    title: '달콤 젤리 플레이팅 ASMR',
    soundName: '젤리 플레이팅',
    tagline: '보기 좋고 듣기 좋은 친근한 소리에 편안해지는 타입',
    description: '컬러 젤리, 디저트 플레이팅, 부드러운 탭핑처럼 누구나 좋아할 만한 소리가 잘 맞습니다.',
    image: '/images/jelly-candy.svg',
    audio: ''
  },
  ENFJ: {
    title: '포근한 브러시 앤 젤리 ASMR',
    soundName: '브러시 앤 젤리',
    tagline: '다정한 흐름과 밝은 질감이 균형 잡힌 타입',
    description: '과하지 않은 팝핑과 부드러운 브러시 사운드를 함께 추천합니다. 안정감과 산뜻함을 같이 챙기는 조합이에요.',
    image: '/images/brush.svg',
    audio: ''
  },
  ENTJ: {
    title: '하이퍼 포커스 키보드 ASMR',
    soundName: '하이퍼 포커스 키보드',
    tagline: '목표에 몰입하게 만드는 선명한 리듬을 좋아하는 타입',
    description: '기계식 키보드, 클릭, 정밀한 도구 사운드처럼 집중을 밀어주는 소리가 좋습니다. 작업용 ASMR로 연결하기 좋아요.',
    image: '/images/keyboard.svg',
    audio: ''
  }
};

function initQuizPage() {
  const form = document.querySelector('#quizForm');
  if (!form) {
    return;
  }

  form.innerHTML = questions.map((question, questionIndex) => `
    <fieldset class="question-card">
      <legend>
        <span>${String(questionIndex + 1).padStart(2, '0')}</span>
        ${question.title}
      </legend>
      <div class="choice-grid">
        ${question.choices.map((choice, choiceIndex) => `
          <label class="choice">
            <input type="radio" name="${question.id}" value="${choiceIndex}" required>
            <span>${choice.text}</span>
          </label>
        `).join('')}
      </div>
    </fieldset>
  `).join('');

  const answeredCount = document.querySelector('#answeredCount');
  const resultButton = document.querySelector('#resultButton');
  const submitTitle = document.querySelector('#submitTitle');
  const submitHint = document.querySelector('#submitHint');

  function updateProgress() {
    const answered = questions.filter((question) => form.elements[question.id]?.value !== '').length;
    answeredCount.textContent = answered;
    resultButton.disabled = answered !== questions.length;
    submitTitle.textContent = answered === questions.length ? '모든 문항을 선택했어요.' : `아직 ${questions.length - answered}문항이 남았어요.`;
    submitHint.textContent = answered === questions.length ? '이제 나에게 맞는 ASMR 결과를 확인할 수 있습니다.' : '모든 문항을 선택하면 결과 버튼이 활성화됩니다.';
  }

  form.addEventListener('change', updateProgress);
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const result = calculateResult(form);
    localStorage.setItem('asmrType', result.type);
    localStorage.setItem('asmrScores', JSON.stringify(result.scores));
    window.location.href = `/result.html?type=${encodeURIComponent(result.type)}`;
  });

  updateProgress();
}

function calculateResult(form) {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  questions.forEach((question) => {
    const selectedIndex = Number(form.elements[question.id].value);
    const selectedChoice = question.choices[selectedIndex];
    Object.entries(selectedChoice.score).forEach(([key, value]) => {
      scores[key] += value;
    });
  });

  const type = [
    scores.E >= scores.I ? 'E' : 'I',
    scores.S >= scores.N ? 'S' : 'N',
    scores.T >= scores.F ? 'T' : 'F',
    scores.J >= scores.P ? 'J' : 'P'
  ].join('');

  return { type, scores };
}

function initResultPage() {
  const resultTitle = document.querySelector('#resultTitle');
  if (!resultTitle) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const type = params.get('type') || localStorage.getItem('asmrType') || 'ENFP';
  const profile = profiles[type] || profiles.ENFP;
  const audioPlayer = document.querySelector('#audioPlayer');
  const playButton = document.querySelector('#playButton');
  const playerStatus = document.querySelector('#playerStatus');

  document.querySelector('#resultType').textContent = type;
  resultTitle.textContent = profile.title;
  document.querySelector('#resultTagline').textContent = profile.tagline;
  document.querySelector('#resultDescription').textContent = profile.description;
  document.querySelector('#soundName').textContent = profile.soundName;
  document.querySelector('#resultImage').src = profile.image;
  document.querySelector('#resultImage').alt = `${profile.title} 대표 이미지`;

  if (profile.audio) {
    audioPlayer.src = profile.audio;
    playerStatus.textContent = '추천 ASMR을 바로 들어볼 수 있어요.';
  }

  playButton.addEventListener('click', async () => {
    if (!profile.audio) {
      showToast('아직 음원 파일은 연결하지 않았어요. 추후 audio 경로만 넣으면 재생됩니다.');
      playerStatus.textContent = '음원 연결 대기 중입니다.';
      return;
    }

    if (audioPlayer.paused) {
      await audioPlayer.play();
      playButton.classList.add('is-playing');
      playerStatus.textContent = '재생 중';
    } else {
      audioPlayer.pause();
      playButton.classList.remove('is-playing');
      playerStatus.textContent = '일시정지됨';
    }
  });

  audioPlayer.addEventListener('ended', () => {
    playButton.classList.remove('is-playing');
    playerStatus.textContent = '재생 완료';
  });

  document.querySelector('#shareButton').addEventListener('click', () => shareResult(type, profile));
}

async function shareResult(type, profile) {
  const shareUrl = `${window.location.origin}/result.html?type=${encodeURIComponent(type)}`;
  const shareData = {
    title: '내 성격으로 알아보는 ASMR',
    text: `내 ASMR 추천은 ${type} ${profile.title}!`,
    url: shareUrl
  };

  if (navigator.share) {
    await navigator.share(shareData);
    return;
  }

  await navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
  showToast('공유 링크를 클립보드에 복사했어요.');
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add('is-visible');
  window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
}

initQuizPage();
initResultPage();
