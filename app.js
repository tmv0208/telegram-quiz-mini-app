<script>
const tg = window.Telegram ? window.Telegram.WebApp : null;
if (tg) {
  tg.ready();
  tg.expand();
}

const questions = [
  {
    question: "Почему шторка в душе прилипает к телу при включенной воде?",
    options: [
      "Внутри кабины образуется область с черной дырой",
      "Из-за снижения давления воздуха при ускорении потока падающей водой (Закон Бернулли)",
      "Из-за возникновения статического электричества на поверхности полиэтилена",
      "Из-за нагревания и теплового расширения воздуха внутри кабины"
    ],
    correct: 1,
    explanation: "По закону Бернулли, при увеличении скорости потока воздуха давление падает. Внешнее атмосферное давление оказывается выше и вталкивает шторку внутрь."
  },
  {
    question: "Почему ожог водяным паром 100 °C опаснее ожога кипятком той же температуры?",
    options: [
      "Температура пара над кипящей водой всегда превышает 120 °C",
      "Пар конденсируется на коже и отдает скрытую теплоту парообразования в дополнение к теплоте остывания",
      "Пар быстрее проникает в глубокие слои кожи из-за высокого давления",
      "Молекулы пара обладают большей массой, чем капли кипятка"
    ],
    correct: 1,
    explanation: "Пар при оседании на коже конденсируется в воду, отдавая ~2260 Дж/г скрытой теплоты парообразования, и только затем остывает как вода."
  },
  {
    question: "Почему чайник 'поет' и шумит перед закипанием, а при кипении затихает?",
    options: [
      "Пузырьки пара всплывают в холодную воду и с грохотом схлопываются (кавитация)",
      "Вода трется о металлические стенки чайника",
      "Нагревательный элемент вибрирует от перегрузки электричеством",
      "Воздух расширяется и с шумом выходит через носик"
    ],
    correct: 0,
    explanation: "В холодных верхних слоях воды пузырьки пара мгновенно конденсируются и схлопываются. Тысячи таких микровзрывов (кавитация) и создают шум."
  },
  {
    question: "Почему водопроводный кран начинает сильно гудеть при открытии наполовину?",
    options: [
      "В трубах возникает гидроудар от скачка давления",
      "Возникают автоколебания прокладки в потоке воды, а труба служит резонатором",
      "Вода мгновенно закипает от трения о металл",
      "Насос гидравлики переходит в аварийный режим"
    ],
    correct: 1,
    explanation: "Изношенная прокладка колеблется в потоке воды сотни раз в секунду, а столб трубы резонирует и усиливает этот звук."
  },
  {
    question: "Что произойдет с температурой воздуха в герметично закрытой комнате, если включить вентилятор на 3 часа?",
    options: [
      "Температура опустится, в комнате станет прохладно",
      "Температура поднимется, в комнате станет еще жарче",
      "Температура не изменится",
      "Влажность опустится до нуля"
    ],
    correct: 1,
    explanation: "По 1-му началу термодинамики вся электроэнергия мотора из-за трения превращается в тепло внутри комнаты."
  },
  {
    question: "Что необходимо ракете, чтобы выйти и удержаться на круговой орбите вокруг Земли?",
    options: [
      "Подняться строго вертикально и выключить двигатель",
      "Набрать необходимую горизонтальную скорость (первую космическую v₁ ≈ 7,9 км/с)",
      "Иметь массу не менее 100 тонн",
      "Непрерывно сжигать топливо на всем протяжении полёта"
    ],
    correct: 1,
    explanation: "Орбита — это состояние непрерывного падения, при котором благодаря высокой горизонтальной скорости тело постоянно 'промахивается' мимо Земли."
  },
  {
    question: "Что произойдет с уровнем воды в стакане, когда плавающий кусок льда полностью растает?",
    options: [
      "Вода перельется через край",
      "Уровень воды опустится",
      "Уровень воды останется ровно на том же месте",
      "Зависит от температуры в комнате"
    ],
    correct: 2,
    explanation: "По закону Архимеда объём вытесненной льдом воды точно равен объёму воды, получающейся при его таянии."
  },
  {
    question: "Почему птицу не бьет током, когда она сидит на высоковольтном проводе двумя лапками?",
    options: [
      "У птиц кожистая лапка с высоким сопротивлением",
      "Разность потенциалов между лапками близка к нулю",
      "По высоковольтным проводам течет безопасный ток",
      "Птицы накапливают статический заряд"
    ],
    correct: 1,
    explanation: "Сопротивление короткого куска провода между лапками ничтожно, поэтому напряжение ΔU ≈ 0, и ток через птицу не идет."
  },
  {
    question: "Зависит ли вторая космическая скорость (скорость освобождения) от массы самого запускаемого тела?",
    options: [
      "Да, тяжелые объекты требуют большей скорости",
      "Нет, скорость не зависит от массы тела",
      "Да, легкие объекты требуют большей скорости",
      "Зависит только при наличии атмосферы"
    ],
    correct: 1,
    explanation: "Из закона сохранения энергии (m·v²/2 = G·M·m/R) масса тела m сокращается. Скорость зависит только от массы и радиуса планеты."
  },
  {
    question: "За счет каких сил 'сухой нано-скотч' и лапки геккона держатся на гладких поверхностях без клея?",
    options: [
      "Магнитное притяжение",
      "Межмолекулярные силы Ван-дер-Ваальса",
      "Электростатический разряд",
      "Ваккумные присоски"
    ],
    correct: 1,
    explanation: "Триллионы микроволосков обеспечивают контакт на атомном уровне, где суммируются силы межмолекулярного притяжения Ван-дер-Ваальса."
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function loadQuestion() {
  answered = false;
  const q = questions[currentQuestion];
  document.getElementById("progress").innerText = `${currentQuestion + 1} из ${questions.length}`;
  document.getElementById("question-text").innerText = q.question;
  
  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";
  
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "btn-option";
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(idx);
    optionsContainer.appendChild(btn);
  });

  document.getElementById("explanation").style.display = "none";
  document.getElementById("btn-next").style.display = "none";
}

function checkAnswer(selectedIdx) {
  if (answered) return;
  answered = true;

  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".btn-option");

  if (selectedIdx === q.correct) {
    buttons[selectedIdx].classList.add("correct");
    score++;
  } else {
    buttons[selectedIdx].classList.add("incorrect");
    buttons[q.correct].classList.add("correct");
  }

  const explanationEl = document.getElementById("explanation");
  explanationEl.innerText = q.explanation;
  explanationEl.style.display = "block";

  const btnNext = document.getElementById("btn-next");
  if (currentQuestion < questions.length - 1) {
    btnNext.innerText = "Следующий вопрос";
  } else {
    btnNext.innerText = "Посмотреть результат";
  }
  btnNext.style.display = "block";
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz-screen").style.display = "none";
  const resultScreen = document.getElementById("result-screen");
  resultScreen.style.display = "block";

  document.getElementById("result-score").innerText = `${score} / ${questions.length}`;
  
  let comment = "";
  if (score === 10) comment = "Идеально! Вы настоящий физик-аналитик уровня Марка!";
  else if (score >= 7) comment = "Отличный результат! Элен гордится твоими знаниями!";
  else if (score >= 5) comment = "Хорошая попытка! Стёпа оценил бы твой эксперимент.";
  else comment = "Не переживай! Читай наш Telegram-канал 'Физика — это просто' и пробуй снова!";

  document.getElementById("result-comment").innerText = comment;
}

function sendResult() {
  if (!tg || typeof tg.sendData !== "function") {
    alert("Страница открыта не как Telegram Mini App.");
    return;
  }

  const statusEl = document.getElementById("sendStatus");
  statusEl.textContent = "Отправляю...";

  const quizId = (tg && tg.initDataUnsafe && tg.initDataUnsafe.start_param) 
    ? tg.initDataUnsafe.start_param 
    : "main";

  const result = {
    quiz_id: quizId,
    score: score,
    total: questions.length,
    finished_at: new Date().toISOString()
  };

  const data = JSON.stringify(result);

  if (data.length > 4000) {
    alert("Результат слишком большой.");
    return;
  }

  try {
    tg.sendData(data);
    statusEl.textContent = "Результат отправлен боту. Закрываю Mini App...";

    setTimeout(() => {
      tg.close();
    }, 800);

  } catch (error) {
    statusEl.textContent = "Ошибка sendData: " + error.message;
  }
}

// Запуск при загрузке
loadQuestion();
  </script>
