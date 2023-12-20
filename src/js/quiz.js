


// Création de tableaux et d'objets
// Un cours qui m'a aidé à bien revoir les notions d'objets js :
// https://www.pierre-giraud.com/javascript-apprendre-coder-cours/creation-objet-litteral/


const quizData = [
    {
        question: "Quelle est la capitale de la France?",
        answers: {
            a: "Paris",
            b: "Londres",
            c: "Berlin"
        },
        correctAnswer: "a"
    },
    {
        question: "Quelle est la plus grande planète du système solaire?",
        answers: {
            a: "Terre",
            b: "Mars",
            c: "Jupiter"
        },
        correctAnswer: "c"
    },

    {
        question: "quelle est la salle la plus merdique de junia ?",
        answers: {
            a: "A l'isen",
            b: "A HEI",
            c: "A l'ISA",
            d: "A l'isen et a l'isa"
        },
        correctAnswer: "d"
    },
    // Ajoutez plus de questions ici
];






const quizContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const submitButton = document.getElementById('submit-button');

function buildQuiz() {
    quizData.forEach((questionData, questionIndex) => {

        // Création des questions au quiz
        //console.log(questionData);   ------> on récupère tout les objets du tableau
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const questionText = document.createElement('p');
        questionText.innerText = `${questionIndex + 1}. ${questionData.question}`;
        questionElement.appendChild(questionText);



        // Création des réponses au quiz en btn radio 
        for (const option in questionData.answers) {
            const optionLabel = document.createElement('label');
            optionLabel.innerHTML = `
                <input type="radio" name="question${questionIndex}" value="${option}">
                ${option}: ${questionData.answers[option]}  
            `;
            // console.log(option); on récupère option qui représente nos a,b,c et ils vont aller chercher le nom de la réponse avec
            //questionData.answers[option]  -----> ex : si mon option vaut a
            // questionData.answers[a] = Paris ------> dans notre premier objet le 'a' a pour valeur 'Paris'
            questionElement.appendChild(optionLabel);
        }

        quizContainer.appendChild(questionElement);
    });
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.question');
    let score = 0;

    quizData.forEach((questionData, questionIndex) => {
        const answerContainer = answerContainers[questionIndex];
        // console.log(answerContainers[questionIndex]); ---> on récupère le parent 'question' pour ensuite 
        // venir récuperer la valeur checked afin de savoir si notre réponse est bonne ou non
        // <div class="question">
        //  <p>1. Quelle est la capitale de la France?</p>
        //  <label>            
        //    <input type="radio" name="question0" value="a">
        //     a: Paris
        //  </label><label>
        //     <input type="radio" name="question0" value="b">
        //     b: Londres
        //  </label><label>
        //     <input type="radio" name="question0" value="c">
        //     c: Berlin
        //  </label></div>

        const selector = `input[name=question${questionIndex}]:checked`;
        // console.log(selector); -----> on récupère notre valeur cochée grâce à "question${questionIndex}" car
        // rappelons nous que plus tôt dans le code on a créer nos labels et dedans nos input avec pour 
        // propriété name = question${questionIndex}
        // ---> en gros on vient récupérer le input de type radio qui a été coché parmis tout ces derniers
        // par exemple si on a coché 'a', le selector va identifier : 
        //    <input type="radio" name="question0" value="a">
        
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        // console.log(answerContainer.querySelector(selector) ); ---> ensuite on vient récupérer la value 
        // de notre réponse que l'on a coché ===> en gros là c'est l'assemblage de nos deux explications juste au 
        // dessus, on récupère la question avec ces enfants qui sont composés de <label> et d'<input> de type radio 
        // et pour finir avec le selector on crée le moyen de sélectionner le input qui a été coché par le user pour en récupérer 
        // la value, dans notre cas le 'a' vaut 'Paris'

        
        if (userAnswer === questionData.correctAnswer) {
           
            score++;
        }
    });

    resultContainer.innerHTML = `Score : ${score} / ${quizData.length}`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);

