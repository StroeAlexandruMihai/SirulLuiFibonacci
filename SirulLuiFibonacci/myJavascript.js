// javascript for quiz

const quizData = [{
        question: "Cu ce numere incepe sirul lui Fibonacci?",
        a: "1 si 2",
        b: "1 si 3",
        c: "3 si 5",
        d: "0 si 1",
        correct: "d",
    },
    {
        question: "Prin ce operatie se obtine sirul lui Fibonacci",
        a: "Inmultire",
        b: "Adunare",
        c: "Scadere",
        d: "Impartire",
        correct: "b",
    },
    {
        question: "Ce nationalitate avea Leonardo Fibonacci?",
        a: "Italiana",
        b: "Germana",
        c: "Romana",
        d: "Olandeza",
        correct: "a",
    },
    {
        question: "Algoritmul este notiunea fundamentala a : ",
        a: "Matematicii",
        b: "Informaticii",
        c: "Fizicii",
        d: "Logicii",
        correct: "b",
    },
    {
        question: "Al 5-lea termen al sirului lui Fibonacci este : ",
        a: "7",
        b: "8",
        c: "3",
        d: "27",
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
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>Ai raspuns corect la ${score}/${quizData.length} intrebari.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
//end script for quiz

// javascript pentru aplicatii
// varianta WHILE

function myFunction() {

    var number = document.getElementById("number").value;

    submitOK = "true";

    if (isNaN(number) || number < 1 || number > 30) {
        alert("Numarul trebuie sa fie intreg pozitiv > 0 si mai mic decat 30 !");
        submitOK = "false";
    }

    if (submitOK == "false") {
        return false;
    }

    function fibonacci_while(number) {

        if (number == 1)
            return 0;
        if (number == 2)
            return 1;
        var num1 = 0;
        var num2 = 1;
        var sum;
        var i = 2;
        sir_fibb = 0;
        while (i < number) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
            i += 1;
            sir_fibb = sir_fibb + ' , ' + num2;
        }
        return sir_fibb;
    }

    document.getElementById("demo").innerHTML = "Secventa Fibonacci este: " +
        fibonacci_while(number);

}

// javascript pentru aplicatii
// varianta FOR


function myFunction1() {

    var number1 = document.getElementById("number1").value;
    sir_fibb = 0;

    submitOK = "true";

    if (isNaN(number1) || number1 < 1 || number1 > 30) {
        alert("Numarul trebuie sa fie intreg pozitiv > 0 si mai mic decat 30!");
        submitOK = "false";
    }

    if (submitOK == "false") {
        return false;
    }

    function fibonacci_for(number1) {
        var num1 = 0;
        var num2 = 1;
        var sum = 0;
        var i = 2;
        var sir_fibb = 0;
        for (i; i < number1; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
            sir_fibb = sir_fibb + ' , ' + num2;
        }
        return sir_fibb;
    }

    document.getElementById("demo1").innerHTML = "Secventa Fibonacci este: " + fibonacci_for(number1);

}

// javascript pentru aplicatii
// varianta RECURSIVA


function myFunction2() {

    var number2 = document.getElementById("number2").value;

    submitOK = "true";

    if (isNaN(number2) || number2 < 1 || number2 > 30) {
        alert("Numarul trebuie sa fie intreg pozitiv > 0 si mai mic decat 30 !");
        submitOK = "false";
    }

    if (submitOK == "false") {
        return false;
    }

    function fibonacci_r(number2) {
        if (number2 == 1)
            return 0;
        if (number2 == 2)
            return 1;
        return sir_fibb = fibonacci_r(number2 - 1) + fibonacci_r(number2 - 2);
    }

    document.getElementById("demo2").innerHTML = "Secventa Fibonacci este: " +
        fibonacci_r(number2);

}