const quizData = [
    {
        question: 'How old is Jessalyn?',
        a: '20',
        b: '24',
        c: '26',
        d: '30',
        correct: 'b',
    },
    {
        question: 'What is her favorite color?',
        a: 'red',
        b: 'yellow',
        c: 'blue',
        d: 'light blue',
        correct: 'd',
    },
    {
        question: 'Whats the name of her dog?',
        a: 'Meek',
        b: 'Shadow',
        c: 'Sausage',
        d: 'Meek Mill',
        correct: 'a',
    },
    {
        question: 'How tall is she?',
        a: '5 ft',
        b: '6 ft',
        c: '5 ft 4 in',
        d: '5 ft 7 in',
        correct: 'c',
    },
    {
        question: 'What year did she graduate HS?',
        a: '2015',
        b: '2020',
        c: '2017',
        d: 'she did not graduate',
        correct: 'c',
    },
];

const quiz = document.getElementById("quiz");
const answerEl = document.querySelectorAll(".answer");

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected () {

    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;

}

function deselectAnswers() {
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `<h2>You answered ${score} out of ${quizData.length} 
            questions correctly.</h2>
            <button onclick = "location.reload()">Take the quiz again</button> 
            `;
        }
    }
});


