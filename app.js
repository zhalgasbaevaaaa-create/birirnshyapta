const questions = [
  {
    category: "Тас дәуірі",
    question: "«Тас дәуірі» атауы ең алдымен нені көрсетеді?",
    choices: [
      "Тастан жасалған құралдар кең қолданылғанын",
      "Өсімдік талшықтары ғана пайдаланылғанын",
      "Үңгірлерде ешкім тұрмағанын",
      "Барлық құралдың бірдей болғанын",
    ],
  },
  {
    category: "Палеолит",
    question: "Палеолит сөзінің қазақша мағынасы қандай?",
    choices: [
      "Ежелгі тас дәуірі",
      "Орта тас дәуірі",
      "Жаңа тас дәуірі",
      "Тас құралдарсыз кезең",
    ],
  },
  {
    category: "Мезолит",
    question: "Мезолит нені білдіреді?",
    choices: [
      "Орта тас дәуірін",
      "Ежелгі тас дәуірін",
      "Жаңа тас дәуірін",
      "Үңгірлерден кейінгі уақытты",
    ],
  },
  {
    category: "Неолит",
    question: "Неолиттің қазақша атауы қайсы?",
    choices: [
      "Жаңа тас дәуірі",
      "Ежелгі тас дәуірі",
      "Орта тас дәуірі",
      "Алғашқы адамдарға дейінгі уақыт",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Тас дәуірінің алғашқы кезеңдерінде адамдардың негізгі кәсібі қандай болды?",
    choices: [
      "Аңшылық пен терімшілік",
      "Тек егін егу",
      "Тек қыш ыдыс жасау",
      "Тек ұзақ сапарға шығу",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Терімшілік дегеніміз не?",
    choices: [
      "Жеуге жарамды өсімдік, жидек пен тамырларды жинау",
      "Жануарлардың ізін тасқа қашау",
      "Үңгірдің төбесін тегістеу",
      "Тасты суға лақтырып ойнау",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Аңшылықтың мәні неде?",
    choices: [
      "Жабайы жануарларды аулау",
      "Жабайы өсімдіктерді суару",
      "Ұсақ тастарды жинау",
      "Үңгір қабырғасын бояу",
    ],
  },
  {
    category: "Тас дәуірі",
    question: "Алғашқы тас құралын жасаудың негізгі тәсілі қандай болды?",
    choices: [
      "Тасты ұрып жарып, өткір қыр шығару",
      "Тасты жұмсақ жүнмен орау",
      "Тасты жіпке байлап қою",
      "Тасты тек күнге кептіру",
    ],
  },
  {
    category: "Тас дәуірі",
    question: "Тас қырғыш көбіне не үшін қолданылды?",
    choices: [
      "Жануар терісін өңдеу үшін",
      "Үңгірдің төбесін өлшеу үшін",
      "Отқа су құю үшін",
      "Жидектерді бояу үшін",
    ],
  },
  {
    category: "Тас дәуірі",
    question: "Тас балтаның басты қызметі қандай болған?",
    choices: [
      "Ағашты шабу және өңдеу",
      "Үңгірге сурет салу",
      "Балықты санау",
      "Оттың түсін өзгерту",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Қарапайым найза ең алдымен қандай мақсатта пайдаланылды?",
    choices: [
      "Аң аулау үшін",
      "Дәнді дақылды ұнтақтау үшін",
      "Үңгір еденін сыпыру үшін",
      "Жидек теру үшін",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Отты пайдаланудың маңызды пайдасы қайсы?",
    choices: [
      "Жылыну және тамақ пісіру",
      "Тасты өсіру",
      "Үңгірді өзенге айналдыру",
      "Аңдарды қолға бірден үйрету",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Үңгір алғашқы адамдар үшін көбіне қандай қызмет атқарды?",
    choices: [
      "Табиғи баспана болды",
      "Астық сақтайтын үлкен қойма болды",
      "Теңіздегі қайық болды",
      "Жазу үйрететін мектеп болды",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Үңгір ішіндегі от адамдарға тағы қандай мүмкіндік берді?",
    choices: [
      "Жарық түсіріп, қауіптен қорғануға көмектесті",
      "Үңгір қабырғасын әйнекке айналдырды",
      "Мұзды бірден тасқа айналдырды",
      "Жануарлардың тілін үйретті",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Мамонт бейнесі Қазақстандағы қай тарихи кезеңнің табиғатын елестетеді?",
    choices: [
      "Тас дәуірінің мұзды даласын",
      "Қазіргі қала тіршілігін",
      "Теңіздегі балықшылар ауылын",
      "Үлкен егіншілік алқабын",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Үңгір қабырғасындағы ежелгі бейнелерде көбіне не көрсетілген?",
    choices: [
      "Жануарлар мен аңшылық көріністері",
      "Қазіргі көлік жолдары",
      "Сауда орындарының сызбалары",
      "Кейінгі дәуірдің қала үйлері",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Ежелгі пиктограммалар алғашқы адамдар туралы нені танытады?",
    choices: [
      "Олардың дүниетанымы мен күнделікті тәжірибесін",
      "Олардың телефон қолданғанын",
      "Олардың биік ғимарат салғанын",
      "Олардың қағаз кітап басқанын",
    ],
  },
  {
    category: "Мезолит",
    question: "Микролит дегеніміз не?",
    choices: [
      "Ұсақ өлшемді тас құрал немесе қалақша",
      "Үлкен үңгірдің атауы",
      "От жағуға арналған ағаш үй",
      "Ежелгі өсімдіктің жемісі",
    ],
  },
  {
    category: "Мезолит",
    question: "Микролиттер қай кезеңнің құралдарына тән?",
    choices: [
      "Мезолитке",
      "Тек палеолитке дейінгі уақытқа",
      "Үңгірлер пайда болғанға дейінгі уақытқа",
      "Тас дәуірінен тыс кезеңге",
    ],
  },
  {
    category: "Мезолит",
    question: "Мезолит кезінде аңшылықты жеңілдеткен маңызды құрал қайсы?",
    choices: [
      "Садақ пен жебе",
      "Үлкен тас қабырға",
      "Күйдірілмеген кірпіш",
      "Өрілген кілем",
    ],
  },
  {
    category: "Мезолит",
    question: "Балық аулауға арналған көне құралға қайсысы жатады?",
    choices: [
      "Сүйек қармақ",
      "Тасқа салынған алақан ізі",
      "Жануар терісінен жасалған жамылғы",
      "Үңгір төбесіндегі сурет",
    ],
  },
  {
    category: "Неолит",
    question: "Неолитте тас өңдеудің қай тәсілі кең тарады?",
    choices: [
      "Тасты тегістеу және бұрғылау",
      "Тасты отқа мүлде жақындатпау",
      "Тасты тек бояумен жабу",
      "Тасты суға ғана салу",
    ],
  },
  {
    category: "Неолит",
    question: "Қыш ыдыстардың кең таралуы қай кезеңге тән?",
    choices: [
      "Неолитке",
      "Ең алғашқы аңшылыққа дейінгі уақытқа",
      "Үңгірлер қалыптаспаған уақытқа",
      "Микролиттер пайда болғанға дейінгі уақытқа",
    ],
  },
  {
    category: "Неолит",
    question: "Тасты тегістеп жасалған балтаның артықшылығы қандай еді?",
    choices: [
      "Ол берік әрі тиімді құрал болды",
      "Ол от орнына қолданылды",
      "Ол өсімдіктің орнына өсті",
      "Ол үңгірге жарық берді",
    ],
  },
  {
    category: "Неолит",
    question: "Неолит дәуірінде адамдардың шаруашылығында қандай өзгеріс байқалды?",
    choices: [
      "Өндіруші шаруашылықтың алғашқы түрлері қалыптасты",
      "Аңшылық пен терімшілік мүлде жоғалды",
      "Барлық адам үңгірден біржола кетті",
      "Тас құралдардың бәрі қолданылмай қалды",
    ],
  },
  {
    category: "Неолит",
    question: "Неолиттік төңкеріс дегеніміз не?",
    choices: [
      "Иемденуші шаруашылықтан өндіруші шаруашылыққа көшу",
      "Үңгірлердің бір күнде жоғалуы",
      "Барлық құралдың ұсақталуы",
      "Тек аңшылықпен айналысуға қайта оралу",
    ],
  },
  {
    category: "Неолит",
    question: "Неолит кезеңінде отырықшылықтың күшеюіне не әсер етті?",
    choices: [
      "Егіншілік пен мал өсірудің басталуы",
      "Мамонттардың көбірек жүруі",
      "Үңгір қабырғаларының биіктеуі",
      "Терімшіліктің толық тоқтауы",
    ],
  },
  {
    category: "Палеолит",
    question: "Қазақстан аумағында алғашқы адамдардың пайда болуы қай кезеңмен байланысты?",
    choices: [
      "Ерте палеолитпен",
      "Мезолиттің соңымен ғана",
      "Неолиттің ортасымен ғана",
      "Тас дәуірінен кейінгі уақытпен",
    ],
  },
  {
    category: "Қазақстан тұрақтары",
    question: "Бөріқазған мен Тәңірқазған қандай тарихи орындарға жатады?",
    choices: [
      "Палеолиттік тұрақтарға",
      "Неолиттен кейінгі қала орындарына",
      "Қазіргі ауыл шаруашылығы алаңдарына",
      "Тек үңгір суреттері салынған орындарға",
    ],
  },
  {
    category: "Қазақстан тұрақтары",
    question: "Бөріқазған мен Тәңірқазған тұрақтары Қазақстанның қай өңірімен байланысты?",
    choices: [
      "Қаратау жотасы маңымен",
      "Каспийдегі аралдармен",
      "Солтүстіктегі қазіргі қалалармен",
      "Биік таулы мұздықтардың шыңдарымен",
    ],
  },
  {
    category: "Қазақстан тұрақтары",
    question: "Шақпақата тұрағы қай өңірде орналасқан?",
    choices: [
      "Маңғыстау өңірінде",
      "Шығыс Қазақстанның орманды бөлігінде",
      "Солтүстік даланың көл түбінде",
      "Оңтүстіктегі қазіргі қала ішінде",
    ],
  },
  {
    category: "Қазақстан тұрақтары",
    question: "Қараүңгір тұрағы Қазақстан тарихында қай кезеңмен белгілі?",
    choices: [
      "Неолитпен",
      "Ең алғашқы тас құралдарға дейінгі уақытпен",
      "Мезолиттен бұрынғы табиғи кезеңмен",
      "Тас дәуіріне қатысы жоқ уақытпен",
    ],
  },
  {
    category: "Қазақстан тұрақтары",
    question: "Үсть-Нарым тұрағы Қазақстанның қай бөлігіндегі неолит ескерткіштерінің бірі?",
    choices: [
      "Шығыс Қазақстандағы",
      "Каспий теңізінің ортасындағы",
      "Маңғыстаудың шөлсіз бөлігіндегі",
      "Қаратаудан тыс аралдағы",
    ],
  },
  {
    category: "Қазақстан тұрақтары",
    question: "Атбасар ескерткіштері қай өңірдегі неолиттік тұрақтарымен байланысты?",
    choices: [
      "Солтүстік Қазақстанмен",
      "Тек Маңғыстау жағалауымен",
      "Қаратау үңгірлерінің ішкі бөлігімен",
      "Қазақстан аумағынан тыс жермен",
    ],
  },
  {
    category: "Қазақстан тұрақтары",
    question: "«Тұрақ» сөзі археологияда нені білдіреді?",
    choices: [
      "Ежелгі адамдар тұрған немесе құралдарын пайдаланған орын",
      "Тек аңдардың інін",
      "Судың астындағы табиғи тасты",
      "Үңгір қабырғасындағы бір ғана суретті",
    ],
  },
  {
    category: "Алғашқы адамдар",
    question: "Алғашқы қауым адамдары не үшін бірігіп өмір сүрді?",
    choices: [
      "Бірлесіп аң аулап, қорғанып және еңбек ету үшін",
      "Үңгірлерді бір-бірінен жасыру үшін",
      "Тасты мүлде қолданбау үшін",
      "Барлық отты өшіру үшін",
    ],
  },
  {
    category: "Тас дәуірі",
    question: "Тас құралдар археологтарға қандай дерек береді?",
    choices: [
      "Адамдардың еңбегі мен тұрмысын түсінуге мүмкіндік береді",
      "Тек ауа райын дәл болжауға көмектеседі",
      "Үңгірдегі оттың түсін ғана көрсетеді",
      "Мамонттардың санын нақты есептеп береді",
    ],
  },
  {
    category: "Тас дәуірі",
    question: "Тас құралдың өткір жиегі не үшін қажет болды?",
    choices: [
      "Кесу және қыру үшін",
      "Ән айту үшін",
      "Жарық шығару үшін",
      "Үңгірді жылыту үшін",
    ],
  },
];

const TOTAL = questions.length;
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
  puzzleGrid: $("#puzzle-grid"),
  puzzleBoard: $("#puzzle-board"),
  puzzleStatus: $("#puzzle-status"),
  modal: $("#end-modal"),
  endKicker: $("#end-kicker"),
  endTitle: $("#end-title"),
  endDescription: $("#end-description"),
  endScore: $("#end-score"),
  endPuzzle: $("#end-puzzle"),
  endEmblem: $("#end-emblem"),
  restartButton: $("#restart-button"),
};

const state = {
  lives: 3,
  score: 0,
  questionIndex: 0,
  round: 0,
  locked: false,
  ending: false,
  feedback: null,
  revealed: Array(TOTAL).fill(false),
};

let puzzlePieces = [];
let pendingEndTimer = null;

function createPuzzle() {
  const fragment = document.createDocumentFragment();
  puzzlePieces = [];

  questions.forEach((question, index) => {
    const piece = document.createElement("div");
    piece.className = "puzzle-piece";
    if (index >= TOTAL - 3) piece.classList.add("last-row");
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

  // Rotate the options by a different amount for every question. The correct
  // answer therefore appears in changing positions instead of always first.
  const shift = (question.id ?? questions.indexOf(question) + 1 + state.round) % options.length;
  return options.slice(shift).concat(options.slice(0, shift));
}

function renderStats() {
  const filled = "♥ ".repeat(state.lives).trim();
  const empty = "♡ ".repeat(Math.max(0, 3 - state.lives)).trim();
  const hearts = state.lives === 0 ? "💀" : [filled, empty].filter(Boolean).join(" ");

  ui.lives.textContent = hearts;
  ui.lives.setAttribute("aria-label", `${state.lives} жан қалды`);
  ui.lives.classList.remove("is-danger");
  if (state.lives < 3 && state.lives > 0) {
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
    button.disabled = state.locked || state.ending;
    button.addEventListener("click", () => chooseAnswer(option, button));
    ui.answers.append(button);
  });

  renderFeedback();
}

function renderFeedback() {
  if (!state.feedback) {
    ui.feedback.hidden = true;
    ui.primaryAction.hidden = true;
    return;
  }

  ui.feedback.hidden = false;
  ui.feedback.className = `feedback ${state.feedback.correct ? "is-correct" : "is-wrong"}`;
  ui.feedbackIcon.textContent = state.feedback.correct ? "✓" : "!";
  ui.feedbackTitle.textContent = state.feedback.correct ? "Дұрыс жауап!" : "Қате жауап";
  ui.feedbackText.textContent = state.feedback.text;

  ui.primaryAction.hidden = false;
  if (state.feedback.correct) {
    ui.primaryAction.textContent = state.questionIndex === TOTAL - 1 ? "НӘТИЖЕНІ КӨРУ" : "КЕЛЕСІ СҰРАҚ";
  } else {
    ui.primaryAction.textContent = "ҚАЙТА ЖАУАП БЕРУ";
  }
}

function chooseAnswer(option, button) {
  if (state.locked || state.ending) return;

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
      : `Сіз 3 жаныңызды пайдаландыңыз. Дұрыс жауап: ${questions[state.questionIndex].choices[0]}.`,
  };
  renderStats();
  renderQuestion();

  if (state.lives === 0) {
    pendingEndTimer = window.setTimeout(() => showEndModal("gameover"), 620);
  }
}

function resetAttempt() {
  if (state.ending) return;
  state.locked = false;
  state.feedback = null;
  renderQuestion();
}

function advanceQuestion() {
  if (!state.feedback || !state.feedback.correct || state.ending) return;

  if (state.questionIndex === TOTAL - 1) {
    showEndModal("win");
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

function showEndModal(mode) {
  if (state.ending) return;
  state.ending = true;
  ui.answers.querySelectorAll("button").forEach((button) => {
    button.disabled = true;
  });

  const won = mode === "win";
  ui.endKicker.textContent = won ? "ҚҰТТЫҚТАЙМЫЗ!" : "ОЙЫН АЯҚТАЛДЫ";
  ui.endTitle.textContent = won ? "ҚҰТТЫҚТАЙМЫЗ!" : "ОЙЫН АЯҚТАЛДЫ";
  ui.endDescription.textContent = won
    ? "Сіз Тас дәуірі пазлын толық жинадыңыз!"
    : "Сіз 3 жаныңызды пайдаландыңыз.";
  ui.endScore.textContent = String(state.score);
  ui.endPuzzle.textContent = `${state.score} / ${TOTAL}`;
  ui.endEmblem.textContent = won ? "✓" : "✦";
  ui.restartButton.textContent = won ? "ҚАЙТА ОЙНАУ" : "ҚАЙТА БАСТАУ";
  ui.modal.hidden = false;
  document.body.classList.add("modal-open");
  window.setTimeout(() => ui.restartButton.focus(), 30);
}

function restartGame() {
  if (pendingEndTimer) {
    window.clearTimeout(pendingEndTimer);
    pendingEndTimer = null;
  }

  state.lives = 3;
  state.score = 0;
  state.questionIndex = 0;
  state.round += 1;
  state.locked = false;
  state.ending = false;
  state.feedback = null;
  state.revealed = Array(TOTAL).fill(false);

  ui.modal.hidden = true;
  document.body.classList.remove("modal-open");
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

ui.restartButton.addEventListener("click", restartGame);

createPuzzle();
renderStats();
renderQuestion();
