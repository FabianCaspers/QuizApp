let questions = [
    {
        "question": "Wer hat 7vsWild S01 gewonnen?",
        "answer_1": "Fabio",
        "answer_2": "Mattin",
        "answer_3": "Fritz",
        "answer_4": "Dave",
        "right_answer": 3
    },
    {
        "question": "Wie viele Gegenstände durfte Knossi bei 7vsWild S02 mitnehmen?",
        "answer_1": "1",
        "answer_2": "7",
        "answer_3": "3",
        "answer_4": "5",
        "right_answer": 2
    },
    {
        "question": "Welcher Name war nicht bei 7vsWild?",
        "answer_1": "Joris",
        "answer_2": "Sabrina",
        "answer_3": "Larissa",
        "answer_4": "Fabio",
        "right_answer": 3
    },
    {
        "question": "Wer ist bei 7vsWild S02 als erstes rausgeflogen?",
        "answer_1": "Nova",
        "answer_2": "Sabrina",
        "answer_3": "Knossi",
        "answer_4": "Sascha",
        "right_answer": 1
    },
    {
        "question": "Wie nannte Knossi bei 7vsWild S02 seinen Ball?",
        "answer_1": "William",
        "answer_2": "Housten",
        "answer_3": "Wilson",
        "answer_4": "Will Iam",
        "right_answer": 3
    }
];


let rightQuestions = 0;
let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}


function showQuestion() {

    if (currentQuestion >= questions.length) {
        // Show End Screen
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display:none';
        document.getElementById('amount-of-questions').innerHTML = questions.length;
        document.getElementById('amount-of-right-questions').innerHTML = rightQuestions;
        document.getElementById('header-image').src = 'img/trophy.png';
    } else { // Show question

        let percent = (currentQuestion +1) / questions.length;
        percent = Math.round(percent * 100);
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = `width: ${percent}%;`;
    }


    let question = questions[currentQuestion];

    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questiontext').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {   // Richtige Frage beantwortet
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}


function nextQuestion() {
    currentQuestion++; // Wert wird von 0 auf 1 erhöht
    showQuestion();
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}


function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}