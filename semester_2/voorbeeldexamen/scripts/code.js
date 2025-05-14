const global = {
    quizQuestions: [
        {
            question: "Wie is de hoofdpersoon in Final Fantasy VII Remake?",
                answers: ["Cloud Strife", "Sephiroth", "Tifa Lockhart"],
            correct: "Cloud Strife",
            selected: ""
        },
        {
            question: "Welke wereld wordt verkend in Final Fantasy XV?",
                answers: ["Gaia", "Eos", "Spira", "Cocoon"],
            correct: "Eos",
            selected: ""
        },
        {
            question: "Wie is de antagonist in Final Fantasy VIII?",
                answers: ["Ultimecia", "Kefka", "Seymour", "Kuja", "Edea"],
            correct: "Ultimecia",
            selected: ""
        },
        {
            question: "Heeft hoofdrolspeler in Final Fantasy IX een staart?",
                answers: ["Ja", "Nee"],
            correct: "Ja",
            selected: ""
        },
        {
            question: "Hoe heet de stad waarin het verhaal van Final Fantasy VII Remake begint?",
                answers: ["Midgar", "Junon", "Nibelheim", "Wutai"],
            correct: "Midgar",
            selected: ""
        },
        {
            question: "Welke summon is prominent aanwezig in Final Fantasy XV?",
                answers: ["Ifrit", "Shiva", "Ramuh", "Titan"],
            correct: "Ifrit",
            selected: ""
        },
        {
            question: "Wat is de naam van het luchtschip in Final Fantasy VIII?",
                answers: ["Ragnarok", "Highwind", "Invincible", "Falcon"],
            correct: "Ragnarok",
            selected: ""
        },
        {
            question: "Welke rol vervult Cid Highwind in Final Fantasy VII?",
                answers: ["Luchtschipkapitein", "Wapensmid", "Koning"],
            correct: "Luchtschipkapitein",
            selected: ""
        },
        {
            question: "Wat is het kenmerkende aan Cactuar-wezens in de Final Fantasy-serie?",
                answers: ["Ze zijn altijd groen", "Ze gebruiken de aanval 1000 Needles", "Ze zijn planten"],
            correct: "Ze gebruiken de aanval 1000 Needles",
            selected: ""
        },
        {
            question: "Welk Final Fantasy-wezen zorgt, met zijn aanval genaamd Bad Breath, voor verschillende statuseffecten?",
                answers: ["Malboro", "Chocobo", "Behemoth", "Tonberry"],
            correct: "Malboro",
            selected: ""
        }
    ]
}
const setup = () => {
    let startBtn = document.getElementById("start");
    startBtn.addEventListener("click", startQuiz);
    let opslaanBtn = document.querySelector(".col-10 .btn-success");
    opslaanBtn.addEventListener("click", slaOp);
}
const startQuiz = () => {
    let startDiv = document.querySelector("body > section > div:nth-child(2)");
    startDiv.classList.toggle("d-none");
    let quiz = document.getElementById("quiz");
    quiz.classList.toggle("d-none");
    loadQuestions();
}
const loadQuestions = () => {
    let questionList = document.querySelector("#questions");
    for (let i = 0; i < global.quizQuestions.length; i++) {
        let vraag = document.createElement("li");
        vraag.addEventListener("click", showQuestion);
        vraag.setAttribute("data-question", i);
        vraag.classList.add("list-group-item");
        vraag.innerText = "Vraag " + (i+1);
        questionList.appendChild(vraag);
    }
    showFirstQuestion();
}
const showFirstQuestion = () => {
    let questionList = document.querySelector("#questions");
    questionList.children[0].classList.toggle("active");
    let questionNumberField = document.querySelector("h5");
    let questionTextField = document.querySelector(".col-10 .card-title");
    let questionAnswerList = document.querySelector("#answers");
    questionNumberField.innerText = "Vraag 1";
    questionTextField.innerText = global.quizQuestions[0].question;
    let answers = global.quizQuestions[0].answers;
    for (let i = 0; i < answers.length; i++) {
        let answer = document.createElement("li");
        answer.innerText = answers[i];
        answer.addEventListener("click", selectAnswer);
        answer.classList.add("list-group-item");
        questionAnswerList.appendChild(answer);
    }
}
const showQuestion = (event) => {
    if (!event.target.classList.contains("active")) {
        let question = event.target.getAttribute("data-question");
        let questionNumberField = document.querySelector("h5");
        let questionTextField = document.querySelector(".col-10 .card-title");
        let questionAnswerList = document.querySelector("#answers");
        questionAnswerList.innerHTML = "";
        questionNumberField.innerText = "Vraag " + (parseInt(question) + 1);
        questionTextField.innerText = global.quizQuestions[question].question;
        let answers = global.quizQuestions[question].answers;
        for (let i = 0; i < answers.length; i++) {
            let answer = document.createElement("li");
            answer.innerText = answers[i];
            answer.classList.add("list-group-item");
            answer.addEventListener("click", selectAnswer);
            questionAnswerList.appendChild(answer);
        }
        let questionList = document.querySelector("#questions").children;
        for (let i = 0; i < questionList.length; i++) {
            questionList[i].classList.remove("active");
        }
        event.target.classList.add("active");
    }
}
const selectAnswer = (event) => {
    let currentQuestion = document.querySelector("h5").innerText.substring(6);
    let questionAnswerList = document.querySelector("#answers");
    for (let i = 0; i < questionAnswerList.children.length; i++) {
        questionAnswerList.children[i].classList.remove("bg-info");
    }
    event.target.classList.toggle("bg-info");
    global.quizQuestions[parseInt(currentQuestion) - 1].selected = event.target.textContent;
}
const slaOp = () => {
    let currentQuestion = document.querySelector("h5").innerText.substring(6);
    valideerAntwoord(parseInt(currentQuestion) - 1);
}
const valideerAntwoord = (vraag) => {
    let questionList = document.querySelector("#questions").children;
    if (global.quizQuestions[vraag].correct === global.quizQuestions[vraag].selected) {
        questionList[vraag].classList.remove("bg-info");
        questionList[vraag].classList.add("bg-success");
    } else {
        questionList[vraag].classList.remove("bg-info");
        questionList[vraag].classList.add("bg-danger");
    }
}
window.addEventListener('load', setup);