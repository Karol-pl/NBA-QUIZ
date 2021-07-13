const quizData = [
  {
    question: "How many NBA titles, has Lebron James won?",
    a: "2",
    b: "3",
    c: "4",
    d: "1",
    correct: "c",
  },
  {
    question: "What was the first NBA team for Gasol brothers?",
    a: "Minnesota Timberwolves",
    b: "Chicago Bulls",
    c: "San Antonio Spurs",
    d: "Memphis Grizzlies",
    correct: "d",
  },
  {
    question: "Which team has the most NBA championships?",
    a: "Boston Celtics",
    b: "Chicago Bulls",
    c: "San Antonio Spurs",
    d: "Los Angeles Lakers",
    correct: "a",
  },
  {
    question: "Which year Basketball Hall of Fame was introduced?",
    a: "1971",
    b: "1959",
    c: "2000",
    d: "1984",
    correct: "b",
  },
  {
    question: "Which of those players won the most NBA championships?",
    a: "Lebron James",
    b: "Robert Parish",
    c: "Kobe Bryant",
    d: "Bill Russell",
    correct: "d",
  },
  {
    question: "What the NBA shorthand stands for?",
    a: "National Basketball Assesment",
    b: "Natural Basketball Association",
    c: "National Basketball Association",
    d: "Natural Basketball Assesment",
    correct: "c",
  },
  {
    question: "Which team does NOT play in the eastern conference?",
    a: "Memphis Grizzlies",
    b: "Cleveland Cavaliers",
    c: "Indiana Pacers",
    d: "Milwaukee Bucks",
    correct: "a",
  },
  {
    question: "Which team drafted Dirk Nowitzki?",
    a: "Memphis Grizzlies",
    b: "Detroit Pistons",
    c: "Dallas Maverics",
    d: "Milwaukee Bucks",
    correct: "d",
  },
  {
    question:
      "Which team had the worst season record in NBA history ( 7 wins, 59 loses )?",
    a: "New Orleans Hornets",
    b: "Minnesota Timberwolves",
    c: "Charlotte Bobcats",
    d: "New Jersey Nets",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let shuffleQuestions = quizData.sort(() => Math.random() - 0.5);
let currentQuiz = 0;

let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2> Your final score is ${score}/${quizData.length}</h2> <button onClick="location.reload()">Reload</button>`;
    }
  }
});
