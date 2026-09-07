const questions = [
  {
    category: "Тас дәуірі",
    question: "«Тас дәуірі» атауы ең алдымен нені көрсетеді?",
    choices: [
      "Тас құралдардың кең қолданылуын",
      "Қыш ыдыстардың ғана қолданылуын",
      "Өрнекті маталардың таралуын",
      "Ағаш құралдардың толық жоғалуын",
    ],
  },
  {
    category: "Палеолит",
    question: "Палеолит сөзінің қазақша мағынасы қандай?",
    choices: [
      "Ежелгі тас дәуірі",
      "Орта тас дәуірі",
      "Жаңа тас дәуірі",
      "Тас дәуірінің өтпелі кезеңі",
    ],
  },
  {
    category: "Мезолит",
    question: "Мезолит ұғымының мағынасы қайсы?",
    choices: [
      "Орта тас дәуірі",
      "Ежелгі тас дәуірі",
      "Жаңа тас дәуірі",
      "Тас дәуірінің алғашқы кезеңі",
    ],
  },
  {
    category: "Неолит",
    question: "Неолиттің қазақша атауы қайсы?",
    choices: [
      "Жаңа тас дәуірі",
      "Ежелгі тас дәуірі",
      "Орта тас дәуірі",
      "Тас дәуірінің соңына дейінгі уақыт",
    ],
  },
  {
    category: "Палеолит",
    question: "Палеолит Қазақстан тарихында қандай үш кезеңге бөлінеді?",
    choices: [
      "Ерте, орта және кейінгі палеолит",
      "Алғашқы, орта және неолиттік кезең",
      "Ерте, өтпелі және жаңа тас кезеңі",
      "Мезолит, неолит және кейінгі тас кезеңі",
    ],
  },
  {
    category: "Палеолит",
    question: "Ерте палеолиттің Қазақстандағы кең қолданылатын хронологиялық шеңбері қайсы?",
    choices: [
      "Б.з.б. 2,6 млн – 140 мың жыл",
      "Б.з.б. 140–40 мың жыл",
      "Б.з.б. 40–12 мың жыл",
      "Б.з.б. 12–5 мың жыл",
    ],
  },
  {
    category: "Палеолит",
    question: "Орта палеолиттің хронологиялық шеңбері қайсы?",
    choices: [
      "Б.з.б. 140–40 мың жыл",
      "Б.з.б. 2,6 млн – 140 мың жыл",
      "Б.з.б. 40–12 мың жыл",
      "Б.з.б. 5–3 мың жыл",
    ],
  },
  {
    category: "Палеолит",
    question: "Кейінгі палеолиттің хронологиялық шеңберін көрсетіңіз.",
    choices: [
      "Б.з.б. 40–12 мың жыл",
      "Б.з.б. 2,6 млн – 140 мың жыл",
      "Б.з.б. 140–40 мың жыл",
      "Б.з.б. 12–5 мың жыл",
    ],
  },
  {
    category: "Мезолит",
    question: "Қазақстандағы мезолит дәуірінің хронологиялық шеңбері қайсы?",
    choices: [
      "Б.з.б. 12–5 мың жыл",
      "Б.з.б. 40–12 мың жыл",
      "Б.з.б. 5–3 мың жыл",
      "Б.з.б. 2,6 млн – 140 мың жыл",
    ],
  },
  {
    category: "Неолит",
    question: "Қазақстандағы неолит дәуірі негізінен қай уақытты қамтиды?",
    choices: [
      "Б.з.б. 5–3 мың жыл",
      "Б.з.б. 12–5 мың жыл",
      "Б.з.б. 40–12 мың жыл",
      "Б.з.б. 140–40 мың жыл",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Тас дәуірінің алғашқы кезеңдерінде адамдардың негізгі кәсібі қандай болды?",
    choices: [
      "Аңшылық пен терімшілік",
      "Тек қыш ыдыс жасау",
      "Тек тоқыма тоқу",
      "Тек тұрақты егіншілік жүргізу",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Терімшілік дегеніміз не?",
    choices: [
      "Жеуге жарамды өсімдік, жидек пен тамырларды жинау",
      "Жабайы жануарларды қоршауға қамап қою",
      "Тастың қырларын тегістеу",
      "Үңгір қабырғасына құралдың суретін салу",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Аңшылықтың мәні неде?",
    choices: [
      "Жабайы жануарларды аулау",
      "Жабайы өсімдіктерді суару",
      "Үңгір еденін тегістеу",
      "Тас сынықтарын бір жерге үйу",
    ],
  },
  {
    category: "Тас дәуірі",
    question: "Алғашқы тас құралдарын жасаудың негізгі тәсілі қандай болды?",
    choices: [
      "Тасты ұрып жарып, өткір қыр шығару",
      "Тасты жұмсақ жүнмен орау",
      "Тасты тек күнге кептіру",
      "Тасты суға салып жұмсарту",
    ],
  },
  {
    category: "Палеолит",
    question: "Екі жағы өңделген қарапайым шапқыш тас құрал қалай аталады?",
    choices: [
      "Бифас",
      "Микролит",
      "Келі",
      "Қыш ыдыс",
    ],
  },
  {
    category: "Палеолит",
    question: "Тас құралдың жүзін ұсақ кертік ойықтар арқылы өткірлеу әдісі қалай аталады?",
    choices: [
      "Ретушь әдісі",
      "Тегістеу әдісі",
      "Өрнектеу әдісі",
      "Иіру әдісі",
    ],
  },
  {
    category: "Мезолит",
    question: "Микролит дегеніміз не?",
    choices: [
      "Ұсақ өлшемді тас тілікше немесе құрал",
      "Үлкен үңгірдің ішкі бөлмесі",
      "От жағуға арналған ағаш үй",
      "Жануар терісінен жасалған киім",
    ],
  },
  {
    category: "Мезолит",
    question: "Мезолит дәуірінің басты жаңалықтарының бірі қайсы?",
    choices: [
      "Садақ пен жебенің пайда болуы",
      "Қыш ыдыстың жаппай өрнектелуі",
      "Тасты бұрғылау тәсілінің толық жойылуы",
      "Үңгірлердің барлығынан бас тарту",
    ],
  },
  {
    category: "Мезолит",
    question: "Мезолитте тас пышақтар мен жебе ұштарына көбіне қандай саптар орнатылды?",
    choices: [
      "Ағаш пен сүйектен жасалған саптар",
      "Тек ірі тастардан жасалған саптар",
      "Қыштан жасалған саптар",
      "Өсімдік жапырағынан жасалған саптар",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Отты пайдаланудың негізгі пайдасы қайсы?",
    choices: [
      "Жылыну, жарық және тамақ пісіру",
      "Тасты бірден өсіру",
      "Үңгірді өзенге айналдыру",
      "Жануарларды бірден қолға үйрету",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Үңгір алғашқы адамдар үшін көбіне қандай қызмет атқарды?",
    choices: [
      "Табиғи баспана болды",
      "Дәнді дақыл өсіретін алаң болды",
      "Тас құралды сақтайтын арнайы жәшік болды",
      "Балық аулайтын қайық болды",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Үңгір қабырғасындағы ежелгі бейнелерде көбіне не көрсетілген?",
    choices: [
      "Жануарлар мен аңшылық көріністері",
      "Өзендердің қазіргі картасы",
      "Тұрғын үйлердің толық жобасы",
      "Қыш ыдыс жасау нұсқаулығы",
    ],
  },
  {
    category: "Неолит",
    question: "Неолитте тас өңдеудің қай тәсілдері кең тарады?",
    choices: [
      "Тегістеу, бұрғылау және аралау",
      "Тасты тек ұрып сындыру",
      "Тасты жіппен тоқу",
      "Тасты отқа жақындатпау",
    ],
  },
  {
    category: "Неолит",
    question: "Қыш ыдыстардың кең таралуы қай кезеңге тән?",
    choices: [
      "Неолитке",
      "Ерте палеолитке",
      "Орта палеолитке",
      "Мезолиттің алғашқы жылдарына ғана",
    ],
  },
  {
    category: "Неолит",
    question: "Неолит дәуіріндегі маңызды жаңалықтардың бірі қайсы?",
    choices: [
      "Тоқымашылықтың қалыптасуы",
      "Тас құралдардың толық қолданылмауы",
      "Үңгірлердің табиғи баспана болудан қалуы",
      "Аңшылықтың бірден тоқтауы",
    ],
  },
  {
    category: "Неолит",
    question: "Неолиттік төңкеріс дегеніміз не?",
    choices: [
      "Иемденуші шаруашылықтан өндіруші шаруашылыққа көшу",
      "Аңшылықтан толық бас тарту",
      "Барлық адамдардың үңгірден кетуі",
      "Ұсақ тастарды ірі тасқа айналдыру",
    ],
  },
  {
    category: "Неолит",
    question: "Өндіруші шаруашылықтың алғашқы түрлеріне не жатады?",
    choices: [
      "Егіншілік пен мал шаруашылығы",
      "Аңшылық пен терімшілік",
      "Балық аулау мен үңгірге тығылу",
      "Тас жинау мен сурет салу",
    ],
  },
  {
    category: "Неолит",
    question: "Неолиттік тұрақтардың көпшілігі қай жерлерге жақын орналасқан?",
    choices: [
      "Өзен, көл, бұлақ және үңгір маңына",
      "Тек биік таулардың шыңына",
      "Су көздерінен өте алыс шөлге",
      "Тек орманның ең қалың бөлігіне",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Тас дәуірінде ру ішіндегі маңызды мәселелерді шешкен орган ретінде не аталады?",
    choices: [
      "Жалпы жиналыс",
      "Жеке шеберлер тобы",
      "Үңгір күзеті",
      "Аңшылардың жеке бөлмесі",
    ],
  },
  {
    category: "Қазақстан тұрақтары",
    question: "Ерте тас ғасырының ең көне ескерткіштері Қазақстанның қай жерлерінен табылған?",
    choices: [
      "Шақпақата мен Арыстандыдан",
      "Атбасар мен Қараүңгірден",
      "Дүзбай мен Тельманнан",
      "Усть-Нарым мен Сексеуілден",
    ],
  },
  {
    category: "Қазақстан тұрақтары",
    question: "Бөріқазған мен Тәңірқазған тұрақтары қай өңірмен байланысты?",
    choices: [
      "Қаратау жотасы маңындағы Оңтүстік Қазақстанмен",
      "Торғай үстіртінің солтүстік бөлігімен",
      "Арал теңізінің жағалауындағы неолитпен",
      "Шығыс Қазақстандағы Усть-Нарым өңірімен",
    ],
  },
  {
    category: "Палеолит",
    question: "Бөріқазған мен Тәңірқазғаннан табылған құралдар қай кезеңге жатады?",
    choices: [
      "Ашельдік кезеңге",
      "Мезолиттің соңғы бөлігіне",
      "Неолиттің орта кезеңіне",
      "Тек кейінгі неолитке",
    ],
  },
  {
    category: "Қазақстан тұрақтары",
    question: "Құдайкөл, Жаманайбат және Обалысай тұрақтары қай аймақта орналасқан?",
    choices: [
      "Орталық Қазақстанда",
      "Батыс Қазақстанда",
      "Солтүстік Қазақстанда",
      "Маңғыстау түбегінде",
    ],
  },
  {
    category: "Қазақстан тұрақтары",
    question: "Шақпақата тұрағы қай өңірде орналасқан?",
    choices: [
      "Маңғыстау түбегінде",
      "Есіл өзені аңғарында",
      "Торғай үстіртінде",
      "Шығыс Қазақстанның Ертіс бойында",
    ],
  },
  {
    category: "Мезолит",
    question: "Дачная, Евгеньевка және Тельман тұрақтары қай кезеңге жатады?",
    choices: [
      "Мезолитке",
      "Ерте палеолитке",
      "Орта палеолитке",
      "Неолиттен кейінгі кезеңге",
    ],
  },
  {
    category: "Мезолит",
    question: "Дүзбай-6 мезолиттік тұрағы қай өңірмен байланысты?",
    choices: [
      "Торғай өңірімен",
      "Қаратау бөктерімен",
      "Маңғыстау жағалауымен",
      "Шығыс Қазақстан тауларымен",
    ],
  },
  {
    category: "Неолит",
    question: "Атбасар мәдениеті қай аймақта тараған?",
    choices: [
      "Есіл өзені аңғарында",
      "Маңғыстау түбегінде",
      "Қаратау жотасының оңтүстігінде",
      "Арал теңізінің батыс жағалауында",
    ],
  },
  {
    category: "Неолит",
    question: "Мақанжар неолиттік мәдениеті қай өңірге тән?",
    choices: [
      "Торғай үстіртіне",
      "Шу өзенінің төменгі ағысына",
      "Маңғыстау түбегіне",
      "Шығыс Қазақстанның таулы бөлігіне",
    ],
  },
  {
    category: "Қазақстан тұрақтары",
    question: "Қараүңгір тұрағы қай кезеңнің жақсы зерттелген ескерткіші?",
    choices: [
      "Неолиттің",
      "Ерте палеолиттің",
      "Орта палеолиттің",
      "Мезолиттің ең алғашқы бөлігінің",
    ],
  },
  {
    category: "Қазақстан тұрақтары",
    question: "Усть-Нарым тұрағы Қазақстанның қай бөлігіндегі неолит ескерткіші?",
    choices: [
      "Шығыс Қазақстандағы",
      "Оңтүстік Қазақстандағы",
      "Батыс Қазақстандағы",
      "Торғай өңіріндегі",
    ],
  },
  {
    category: "Қазақстан тұрақтары",
    question: "Сексеуіл неолиттік тұрағы қай өңірмен байланысты?",
    choices: [
      "Арал өңірімен",
      "Қаратау бөктерімен",
      "Маңғыстау түбегінің батысымен",
      "Есіл өзенінің жоғарғы ағысымен",
    ],
  },
  {
    category: "Неолит",
    question: "Қазақстандағы шөлді-далалық неолит ескерткіштерінің ерекшелігі қандай?",
    choices: [
      "Олардың басым бөлігі ашық жердегі тұрақтар",
      "Олардың барлығы тек үңгірлердің ішінде орналасқан",
      "Олардың барлығы биік таудың басында орналасқан",
      "Олардың барлығы өзен суының астында қалған",
    ],
  },
];

const TOTAL = questions.length;
const START_LIVES = 5;
const TIME_LIMIT = 10;
const LETTERS = ["А", "Ә", "Б", "В"];
const $ = (selector) => document.querySelector(selector);

const ui = {
  lives: $("#lives"),
  score: $("#score"),
  progressCount: $("#progress-count"),
  progressFill: $("#progress-fill"),
  questionNumber: $("#question-number"),
  questionProgressFill: $("#question-progress-fill"),
  questionCategory: $("#question-category"),
  questionText: $("#question-text"),
  answers: $("#answers"),
  feedback: $("#feedback"),
  feedbackIcon: $("#feedback-icon"),
  feedbackTitle: $("#feedback-title"),
  feedbackText: $("#feedback-text"),
  primaryAction: $("#primary-action"),
  timerBox: $("#timer-box"),
  timer: $("#timer"),
  timerFill: $("#timer-fill"),
  puzzleGrid: $("#puzzle-grid"),
  puzzleBoard: $("#puzzle-board"),
  puzzleStatus: $("#puzzle-status"),
  revealOverlay: $("#reveal-overlay"),
  revealCountdown: $("#reveal-countdown"),
  modal: $("#end-modal"),
  endKicker: $("#end-kicker"),
  endTitle: $("#end-title"),
  endDescription: $("#end-description"),
  endScore: $("#end-score"),
  endPuzzle: $("#end-puzzle"),
  endEmblem: $("#end-emblem"),
  restartButton: $("#restart-button"),
  confirmModal: $("#restart-confirm-modal"),
  confirmTitle: $("#confirm-title"),
  confirmDescription: $("#confirm-description"),
  confirmStart: $("#confirm-start"),
  confirmCancel: $("#confirm-cancel"),
};

const state = {
  lives: START_LIVES,
  score: 0,
  questionIndex: 0,
  round: 0,
  timeLeft: TIME_LIMIT,
  revealTime: 20,
  started: false,
  locked: false,
  ending: false,
  revealActive: false,
  feedback: null,
  revealed: Array(TOTAL).fill(false),
};

let puzzlePieces = [];
let timerId = null;
let revealTimerId = null;
let pendingEndTimer = null;
let confirmReturnMode = "initial";

function createPuzzle() {
  const fragment = document.createDocumentFragment();
  puzzlePieces = [];

  questions.forEach((question, index) => {
    const piece = document.createElement("div");
    piece.className = "puzzle-piece";
    piece.setAttribute("aria-label", `Пазл бөлігі ${index + 1}`);

    const label = document.createElement("span");
    label.className = "piece-label";
    label.textContent = `${question.category} · ${String(index + 1).padStart(2, "0")}`;
    piece.append(label);
    fragment.append(piece);
    puzzlePieces.push(piece);
  });

  ui.puzzleGrid.replaceChildren(fragment);
}

function getOptions(question) {
  const options = question.choices.map((text, index) => ({
    text,
    correct: index === 0,
  }));

  // The correct option moves through all four positions from question to question.
  const shift = (questions.indexOf(question) + state.round) % options.length;
  return options.slice(shift).concat(options.slice(0, shift));
}

function renderStats() {
  const filled = "♥ ".repeat(state.lives).trim();
  const empty = "♡ ".repeat(Math.max(0, START_LIVES - state.lives)).trim();
  const hearts = state.lives === 0 ? "💀" : [filled, empty].filter(Boolean).join(" ");

  ui.lives.textContent = hearts;
  ui.lives.setAttribute("aria-label", `${state.lives} жан қалды`);
  ui.lives.classList.remove("is-danger");
  if (state.lives < START_LIVES && state.lives > 0) {
    void ui.lives.offsetWidth;
    ui.lives.classList.add("is-danger");
  }

  ui.score.textContent = String(state.score);
  ui.progressCount.textContent = `${state.score} / ${TOTAL}`;
  ui.progressFill.style.width = `${(state.score / TOTAL) * 100}%`;
  ui.puzzleStatus.textContent = state.score === TOTAL
    ? "Пазл толық ашылды"
    : `Жабық бөліктер: ${TOTAL - state.score}`;
}

function updateTimerUI() {
  ui.timer.textContent = String(state.timeLeft);
  ui.timer.setAttribute("aria-label", `${state.timeLeft} секунд қалды`);
  ui.timerFill.style.width = `${(state.timeLeft / TIME_LIMIT) * 100}%`;
  ui.timerBox.classList.toggle("timer-warning", state.timeLeft <= 5 && state.timeLeft > 2);
  ui.timerBox.classList.toggle("timer-danger", state.timeLeft <= 2);
}

function stopTimer() {
  if (timerId !== null) {
    window.clearInterval(timerId);
    timerId = null;
  }
}

function startTimer() {
  stopTimer();
  state.timeLeft = TIME_LIMIT;
  updateTimerUI();

  if (!state.started || state.locked || state.ending || state.feedback) return;

  timerId = window.setInterval(() => {
    if (!state.started || state.locked || state.ending || state.feedback) {
      stopTimer();
      return;
    }

    state.timeLeft -= 1;
    updateTimerUI();

    if (state.timeLeft <= 0) {
      stopTimer();
      handleTimeout();
    }
  }, 1000);
}

function renderQuestion() {
  const question = questions[state.questionIndex];
  if (!question) return;

  ui.questionNumber.textContent = `${state.questionIndex + 1} / ${TOTAL}`;
  ui.questionProgressFill.style.width = `${((state.questionIndex + 1) / TOTAL) * 100}%`;
  ui.questionCategory.textContent = question.category;
  ui.questionText.textContent = question.question;

  const options = getOptions(question);
  ui.answers.replaceChildren();

  options.forEach((option, position) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.dataset.position = String(position);
    button.setAttribute("aria-label", `${LETTERS[position]}. ${option.text}`);

    if (state.feedback && state.feedback.choice === option.text) {
      button.classList.add(state.feedback.correct ? "is-correct" : "is-wrong");
    }
    if (state.feedback && !state.feedback.correct && option.correct) {
      button.classList.add("is-correct");
    }

    const letter = document.createElement("span");
    letter.className = "answer-letter";
    letter.textContent = LETTERS[position];

    const copy = document.createElement("span");
    copy.className = "answer-copy";
    copy.textContent = option.text;

    button.append(letter, copy);
    button.disabled = !state.started || state.locked || state.ending;
    button.addEventListener("click", () => chooseAnswer(option, button));
    ui.answers.append(button);
  });

  renderFeedback();
  if (!state.locked && !state.ending && !state.feedback && state.started) startTimer();
  else updateTimerUI();
}

function renderFeedback() {
  if (!state.feedback) {
    ui.feedback.hidden = true;
    ui.primaryAction.hidden = true;
    return;
  }

  const feedbackClass = state.feedback.correct
    ? "is-correct"
    : state.feedback.timeout
      ? "is-timeout"
      : "is-wrong";

  ui.feedback.hidden = false;
  ui.feedback.className = `feedback ${feedbackClass}`;
  ui.feedbackIcon.textContent = state.feedback.correct ? "✓" : state.feedback.timeout ? "⌛" : "!";
  ui.feedbackTitle.textContent = state.feedback.correct
    ? "Дұрыс жауап!"
    : state.feedback.timeout
      ? "Уақыт аяқталды"
      : "Қате жауап";
  ui.feedbackText.textContent = state.feedback.text;

  ui.primaryAction.hidden = false;
  if (state.feedback.correct) {
    ui.primaryAction.textContent = state.questionIndex === TOTAL - 1 ? "НӘТИЖЕНІ КӨРУ" : "КЕЛЕСІ СҰРАҚ";
  } else {
    ui.primaryAction.textContent = "ҚАЙТА ЖАУАП БЕРУ";
  }
}

function chooseAnswer(option, button) {
  if (!state.started || state.locked || state.ending || state.lives <= 0) return;

  stopTimer();
  state.locked = true;
  button.classList.add(option.correct ? "is-correct" : "is-wrong");

  if (option.correct) {
    state.score += 1;
    state.revealed[state.questionIndex] = true;
    revealPiece(state.questionIndex);
    state.feedback = {
      correct: true,
      choice: option.text,
      text: "+1 ұпай. Пазлдың бір бөлігі ашылды!",
    };
    renderStats();
    renderQuestion();
    return;
  }

  state.lives -= 1;
  state.feedback = {
    correct: false,
    choice: option.text,
    text: state.lives > 0
      ? `1 жан жоғалды. Қалған жан: ${state.lives}. Дұрыс жауап: ${questions[state.questionIndex].choices[0]}.`
      : `Сіз ${START_LIVES} жаныңызды пайдаландыңыз. Дұрыс жауап: ${questions[state.questionIndex].choices[0]}.`,
  };
  renderStats();
  renderQuestion();

  if (state.lives === 0) {
    pendingEndTimer = window.setTimeout(() => {
      pendingEndTimer = null;
      showEndModal();
    }, 620);
  }
}

function handleTimeout() {
  if (!state.started || state.locked || state.ending || state.lives <= 0) return;

  state.locked = true;
  state.lives -= 1;
  state.feedback = {
    correct: false,
    timeout: true,
    choice: "",
    text: state.lives > 0
      ? `10 секунд өтті. 1 жан күйді. Қалған жан: ${state.lives}. Дұрыс жауап: ${questions[state.questionIndex].choices[0]}.`
      : `10 секунд өтті. Сіз ${START_LIVES} жаныңызды пайдаландыңыз. Дұрыс жауап: ${questions[state.questionIndex].choices[0]}.`,
  };
  renderStats();
  renderQuestion();

  if (state.lives === 0) {
    pendingEndTimer = window.setTimeout(() => {
      pendingEndTimer = null;
      showEndModal();
    }, 620);
  }
}

function resetAttempt() {
  if (state.ending || !state.started) return;
  state.locked = false;
  state.feedback = null;
  renderQuestion();
}

function advanceQuestion() {
  if (!state.feedback || !state.feedback.correct || state.ending) return;

  if (state.questionIndex === TOTAL - 1) {
    startImageReveal();
    return;
  }

  state.questionIndex += 1;
  state.locked = false;
  state.feedback = null;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function revealPiece(index) {
  const piece = puzzlePieces[index];
  if (!piece) return;

  piece.classList.remove("is-revealed");
  piece.classList.add("is-revealing");
  ui.puzzleBoard.classList.remove("piece-reveal");
  void ui.puzzleBoard.offsetWidth;
  ui.puzzleBoard.classList.add("piece-reveal");

  window.setTimeout(() => {
    piece.classList.remove("is-revealing");
    piece.classList.add("is-revealed");
    ui.puzzleBoard.classList.remove("piece-reveal");
  }, 470);
}

function resetPuzzle() {
  puzzlePieces.forEach((piece) => {
    piece.classList.remove("is-revealing", "is-revealed");
  });
}

function resetResultUI() {
  ui.endKicker.textContent = "ОЙЫН АЯҚТАЛДЫ";
  ui.endTitle.textContent = "ОЙЫН АЯҚТАЛДЫ";
  ui.endDescription.textContent = "";
  ui.endScore.textContent = "0";
  ui.endPuzzle.textContent = `0 / ${TOTAL}`;
  ui.endEmblem.textContent = "✦";
  ui.restartButton.textContent = "БАСТАУ";
}

function showEndModal() {
  if (state.revealActive) return;
  stopTimer();
  state.ending = true;
  ui.answers.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });

  ui.endKicker.textContent = "ОЙЫН АЯҚТАЛДЫ";
  ui.endTitle.textContent = "ОЙЫН АЯҚТАЛДЫ";
  ui.endDescription.textContent = `Сіз ${START_LIVES} жаныңызды пайдаландыңыз. Жиналған ұпай: ${state.score}.`;
  ui.endScore.textContent = String(state.score);
  ui.endPuzzle.textContent = `${state.score} / ${TOTAL}`;
  ui.endEmblem.textContent = "✦";
  ui.restartButton.textContent = "БАСТАУ";
  ui.confirmModal.hidden = true;
  ui.modal.hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => ui.restartButton.focus(), 30);
}

function updateRevealCountdown() {
  ui.revealCountdown.textContent = String(state.revealTime);
}

function requestRevealFullscreen() {
  const request = ui.revealOverlay.requestFullscreen || ui.revealOverlay.webkitRequestFullscreen;
  if (!request) return;

  try {
    const result = request.call(ui.revealOverlay);
    if (result && typeof result.catch === "function") result.catch(() => {});
  } catch (_error) {
    // The fixed overlay remains a fullscreen fallback if the browser denies the API.
  }
}

function exitRevealFullscreen() {
  const exit = document.exitFullscreen || document.webkitExitFullscreen;
  if (!exit) return;

  try {
    const result = exit.call(document);
    if (result && typeof result.catch === "function") result.catch(() => {});
  } catch (_error) {
    // The overlay is hidden below even when the browser has no fullscreen API.
  }
}

function startImageReveal() {
  if (state.revealActive) return;

  stopTimer();
  state.ending = true;
  state.revealActive = true;
  state.revealTime = 20;
  updateRevealCountdown();
  ui.revealOverlay.hidden = false;
  document.body.classList.add("reveal-open");
  requestRevealFullscreen();

  revealTimerId = window.setInterval(() => {
    state.revealTime -= 1;
    updateRevealCountdown();

    if (state.revealTime <= 0) finishImageReveal();
  }, 1000);
}

function finishImageReveal() {
  if (!state.revealActive) return;

  if (revealTimerId !== null) {
    window.clearInterval(revealTimerId);
    revealTimerId = null;
  }
  state.revealActive = false;
  ui.revealOverlay.hidden = true;
  document.body.classList.remove("reveal-open");
  exitRevealFullscreen();
  openRestartConfirm("complete");
}

function openRestartConfirm(source) {
  confirmReturnMode = source;
  ui.modal.hidden = true;
  ui.confirmModal.hidden = false;
  document.body.classList.add("modal-open");

  if (source === "initial") {
    ui.confirmTitle.textContent = "ОЙЫНДЫ БАСТАЙМЫЗ БА?";
    ui.confirmDescription.textContent = `${TOTAL} сұрақ, ${START_LIVES} жан және әр сұраққа ${TIME_LIMIT} секунд.`;
    ui.confirmCancel.hidden = true;
  } else {
    ui.confirmTitle.textContent = "ОЙЫНДЫ ҚАЙТА БАСТАЙМЫЗ БА?";
    ui.confirmDescription.textContent = `Алдыңғы нәтиже: ${state.score} ұпай, ${state.score} / ${TOTAL} пазл. Ескі нәтиже тазаланып, жаңа ойын басталады.`;
    ui.confirmCancel.hidden = false;
  }

  ui.confirmStart.textContent = "БАСТАУ";
  window.setTimeout(() => ui.confirmStart.focus(), 30);
}

function showCompletionResult() {
  ui.endKicker.textContent = "ҚҰТТЫҚТАЙМЫЗ!";
  ui.endTitle.textContent = "ҚҰТТЫҚТАЙМЫЗ!";
  ui.endDescription.textContent = `Сіз Тас дәуірі пазлын толық жинадыңыз! Ұпай: ${state.score}.`;
  ui.endScore.textContent = String(state.score);
  ui.endPuzzle.textContent = `${state.score} / ${TOTAL}`;
  ui.endEmblem.textContent = "✓";
  ui.restartButton.textContent = "БАСТАУ";
  ui.modal.hidden = false;
  ui.confirmModal.hidden = true;
}

function cancelRestart() {
  ui.confirmModal.hidden = true;

  if (confirmReturnMode === "gameover") {
    ui.modal.hidden = false;
  } else if (confirmReturnMode === "complete") {
    showCompletionResult();
  } else {
    ui.confirmModal.hidden = false;
  }

  window.setTimeout(() => {
    if (confirmReturnMode === "gameover" || confirmReturnMode === "complete") ui.restartButton.focus();
    else ui.confirmStart.focus();
  }, 30);
}

function startNewGame() {
  stopTimer();
  if (pendingEndTimer) {
    window.clearTimeout(pendingEndTimer);
    pendingEndTimer = null;
  }
  if (revealTimerId !== null) {
    window.clearInterval(revealTimerId);
    revealTimerId = null;
  }

  state.lives = START_LIVES;
  state.score = 0;
  state.questionIndex = 0;
  state.round += 1;
  state.timeLeft = TIME_LIMIT;
  state.revealTime = 20;
  state.started = true;
  state.locked = false;
  state.ending = false;
  state.revealActive = false;
  state.feedback = null;
  state.revealed = Array(TOTAL).fill(false);

  ui.revealOverlay.hidden = true;
  ui.modal.hidden = true;
  ui.confirmModal.hidden = true;
  document.body.classList.remove("modal-open", "reveal-open");
  resetResultUI();
  resetPuzzle();
  renderStats();
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

ui.primaryAction.addEventListener("click", () => {
  if (!state.feedback) return;
  if (state.feedback.correct) {
    advanceQuestion();
  } else {
    resetAttempt();
  }
});

ui.restartButton.addEventListener("click", () => openRestartConfirm("gameover"));
ui.confirmStart.addEventListener("click", startNewGame);
ui.confirmCancel.addEventListener("click", cancelRestart);

autoStart();

function autoStart() {
  createPuzzle();
  renderStats();
  renderQuestion();
  openRestartConfirm("initial");
}
