const quizContainer = document.getElementById('quiz-container');
const quizQuestions = [
    {
        question: "What is the main goal of Agile development?",
        answers: {
            a: "Following a strict plan",
            b: "Embracing change and iteration",
            c: "Maximizing documentation",
        },
        correctAnswer: "b"
    },
    {
        question: "Which of the following is a Scrum role?",
        answers: {
            a: "Manager",
            b: "Product Owner",
            c: "Architect",
        },
        correctAnswer: "b"
    },
    {
        question: "What does a Scrum Master do?",
        answers: {
            a: "Write code",
            b: "Lead meetings and remove obstacles",
            c: "Design user interfaces",
        },
        correctAnswer: "b"
    },
    {
        question: "What is the purpose of a sprint in Scrum?",
        answers: {
            a: "To plan the project",
            b: "To fix bugs in the software",
            c: "To deliver potentially shippable increments of product functionality",
        },
        correctAnswer: "c"
    },
    {
        question: "Who is responsible for prioritizing the product backlog?",
        answers: {
            a: "Scrum Master",
            b: "Product Owner",
            c: "Development Team",
        },
        correctAnswer: "b"
    },
    {
        question: "What is the recommended length for a sprint in Scrum?",
        answers: {
            a: "1 week",
            b: "2 weeks",
            c: "4 weeks",
        },
        correctAnswer: "b"
    },
    {
        question: "What is a user story in Agile?",
        answers: {
            a: "A task assigned to a developer",
            b: "A description of a feature from the perspective of an end user",
            c: "A technical requirement specified by the architect",
        },
        correctAnswer: "b"
    },
    {
        question: "What does the term 'Definition of Done' refer to in Scrum?",
        answers: {
            a: "The list of tasks to be completed in a sprint",
            b: "The acceptance criteria for a user story",
            c: "The set of requirements for releasing a product increment",
        },
        correctAnswer: "c"
    },
    {
        question: "What is the purpose of a Daily Standup meeting in Scrum?",
        answers: {
            a: "To assign tasks to team members",
            b: "To discuss progress, plans, and any obstacles",
            c: "To review the product backlog",
        },
        correctAnswer: "b"
    },
    {
        question: "What is the primary focus of the Sprint Review meeting in Scrum?",
        answers: {
            a: "To demo the product increment to stakeholders",
            b: "To plan the next sprint",
            c: "To retrospect on the previous sprint",
        },
        correctAnswer: "a"
    }
];

function startQuiz() {
    let quizContent = '';
    quizQuestions.forEach((question, index) => {
        quizContent += `<div class="question">
                            <h3>${index + 1}. ${question.question}</h3>
                            <ul class="answers">`;
        for (const option in question.answers) {
            quizContent += `<li>
                                <input type="radio" name="question${index}" value="${option}">
                                <label>${question.answers[option]}</label>
                            </li>`;
        }
        quizContent += `</ul></div>`;
    });
    quizContent += `<button onclick="showResults()">Submit Quiz</button>`;
    quizContainer.innerHTML = quizContent;
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let score = 0;
    quizQuestions.forEach((question, index) => {
        const answerContainer = answerContainers[index];
        const selectedOption = answerContainer.querySelector(`input[name=question${index}]:checked`);
        if (selectedOption) {
            if (selectedOption.value === question.correctAnswer) {
                score++;
            }
        }
    });
    alert(`You scored ${score} out of ${quizQuestions.length}`);
}


function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let score = 0;
    quizQuestions.forEach((question, index) => {
        const answerContainer = answerContainers[index];
        const selectedOption = answerContainer.querySelector(`input[name=question${index}]:checked`);
        if (selectedOption) {
            if (selectedOption.value === question.correctAnswer) {
                score++;
            }
        }
    });
    alert(`You scored ${score} out of ${quizQuestions.length}`);
}

const totalQuestions = quizQuestions.length;
    const percentage = (score / totalQuestions) * 100;
    const resultMessage = `You scored ${score} out of ${totalQuestions}. Your score: ${percentage.toFixed(2)}%`;
    const feedbackElement = document.getElementById('quiz-feedback');
    feedbackElement.innerText = resultMessage;
    feedbackElement.style.display = 'block';

