const quizData = [ // массив с вопросами



    {
        question: "Как ты обычно реагируешь, если кто-то нарушает твои границы?",
        answers :[
            "Спокойно указываю, что это неприемлемо",
            "Просто ухожу, избегая общения",
            "Нападаю первым, чтобы поставить на место",
            "Манипулирую, чтобы человек сам понял, что неправ"
        ]
    },
    {
        question: "Кто-то критикует тебя на людях. Твоя реакция?",
        answers :[
            "Держу себя в руках и отвечаю строго",
            "Стараюсь уйти от темы",
            "Мгновенно начинаю защищаться или нападаю в ответ",
            "Саркастически обесцениваю его слова"
        ]
    },
    {
        question: "В компании людей тебе что-то не нравится, что ты делаешь?",
        answers :[
            "Предлагаю другое решение",
            "Молчу, жду, когда все закончится",
            "Говорю в лоб, что это бред",
            "Пытаюсь убедить всех, не раскрывая свои мотивы"
        ]
    },
    {
        question: "Человек тебя обманывает. Что ты делаешь?",
        answers :[
            "Спокойно ставлю его перед фактом",
            "Прекращаю контакт, не объясняя",
            "Конфликтую напрямую",
            "Отвечаю тем же, но позже"
        ]
    },
    {
        question: "В конфликте ты чаще :",
        answers :[
            "Сохраняешь контроль и логичность",
            "Уходишь в тень",
            "Кричишь, чтобы доминировать",
            "Давишь через чувство вины"
        ]
    },
    {
        question: "Кто-то требует от тебя объяснений :",
        answers :[
            "Отвечаю четко, без эмоций",
            "Ссылаюсь на занятость и ухожу",
            "Возмущаюсь, что это не его дело",
            "Заставляю его сомневаться, что он вообще прав"
        ]
    },
    {
        question: "Тебя игнорируют. Что ты чувствуешь?",
        answers :[
            "Неуютно, но анализирую причину",
            "Все равно, ухожу в себя",
            "Взрываюсь от злости",
            "Заставляю человека пожалеть"
        ]
    },
    {
        question: "Когда спор становится острым, ты :",
        answers :[
            "Берешь паузу и возвращаешься с решением",
            "Отступаешь, чтобы не усугублять",
            "Давишь, пока не добьешься своего",
            "Ведешь оппонента к нужному решению через намеки"
        ]
    },
    {
        question: "Твоя тактика в напряженной ситуации :",
        answers :[
            "Стратегия и контроль",
            "Никакой - просто пережить",
            "Атака и прессинг",
            "Интрига и управление эмоциями"
        ]
    },
    {
        question: "Что для тебя важно в конфликте?",
        answers :[
            "Справедливость и четкие границы",
            "Уйти без потерь",
            "Победа любой ценой",
            "Выгода и контроль над мнением"
        ]
    },
    {
        question: "Когда чувствуешь угрозу, ты :",
        answers :[
            "Удерживаешь хладнокровие",
            "Прячешься - физически или эмоционально",
            "Нападаешь первым",
            "Переигрываешь все психологически"
        ]
    },
    {
        question: "Люди говорят, что ты :",
        answers :[
            "Холодный, но справедливый",
            "Закрытый и трудночитаемый",
            "Взрывной и резкий",
            "Хитрый и непредсказуемый"
        ]
    },
    {
        question: "При эмоциональной нагрузке :",
        answers :[
            "Сохраняешь самообладание",
            "Уходишь в изоляцию",
            "Кричишь и проявляешь агрессию",
            "Используешь эмоции других против них"
        ]
    },
    {
        question: "Если нужно стоять на своем :",
        answers :[
            "Объясняешь позицию и аргументируешь",
            "Просто уступаешь",
            "Давишь и провоцируешь",
            "Заставляешь других принять твою точку грения мягко"
        ]
    },
    {
        question: "В ситуации давления :",
        answers :[
            "Сохраняешь порядок и контроль",
            "Скрываешься из поля зрения",
            "Идешь на лобовой",
            "Переводишь все на другого человека"
        ]
    },
];

//начальные условия. индекс текущего вопроса 0 - значит вопрос первый
let currentQuestionIndex = 0;

// получаем их хтмл элемент с вопросом
const questionElement = document.getElementById("question");
// получаем все кнопки с вариантами ответов
const answerButtons = document.querySelectorAll(".answer-btn");



function showIntro() {
  const container = document.getElementById("quiz-container");

  container.innerHTML = `
    <div class="intro-style">
      <h2>Привет.<br>Это психологический тест о твоих стратегиях поведения<br>в напряжённых ситуациях и конфликтах.<br>Он поможет тебе узнать себя чуть лучше, чтобы проанализировать свое поведение и мотивацию.</h2>
      <div class="answer">
        <button class="answer-btn" id="start-btn">Начать тест</button>
      </div>
    </div>
  `;

  document.getElementById("start-btn").addEventListener("click", () => {
    currentQuestionIndex = 0;
    showQuizUI();
    loadQuestion();
  });
}

// Восстановить структуру теста с вопросом и кнопками
function showQuizUI() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = `
    <h2 id="question"></h2>
    <div class="answers">
      <button class="answer-btn"></button>
      <button class="answer-btn"></button>
      <button class="answer-btn"></button>
      <button class="answer-btn"></button>
    </div>
  `;
  // Навешиваем обработчики заново на кнопки
  const buttons = container.querySelectorAll(".answer-btn");
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < quizData.length) {
        loadQuestion();
      } else {
        finishQuiz();
      }
    });
  });
}

function loadQuestion() {
  const current = quizData[currentQuestionIndex];
  const questionElement = document.getElementById("question");
  const answerButtons = document.querySelectorAll(".answer-btn");

  questionElement.textContent = current.question;

  answerButtons.forEach((btn, index) => {
    if (current.answers[index]) {
      btn.style.display = "block";
      btn.textContent = current.answers[index];
    } else {
      btn.style.display = "none";
    }
  });
}

function finishQuiz() {
  const container = document.getElementById("quiz-container");
  container.innerHTML = "<h2>Тест завершён.</h2>";
}

showIntro();
