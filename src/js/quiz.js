


// Création de tableaux et d'objets
// Un cours qui m'a aidé à bien revoir les notions d'objets js :
// https://www.pierre-giraud.com/javascript-apprendre-coder-cours/creation-objet-litteral/


const quizData = [
    {
        img: "../assets/images/pere.jpeg",
        question: "Quelle est la <strong>capitale</strong> de la France?",
        answers: {
            a: "Paris",
            b: "Londres",
            c: "Berlin"
        },
        correctAnswer: "a",
        explication: "around the world"
    },
    {
        img:'',
        question: "Quelle est la plus grande planète du système solaire?",
        answers: {
            a: "Terre",
            b: "Mars",
            c: "Jupiter"
        },
        correctAnswer: "c", 
        explication: "entrer votre code ici"
        
    },

    {
        img: '',
        question: "Qu'est-ce que le <strong><abbr title='document object model'>DOM</abbr></strong> en JavaScript?",
        answers: {
            a: "Une bibliothèque de fonctions",
            b: "Une interface de programmation pour les documents HTML et XML",
            c: "Un langage de programmation"
        },
        correctAnswer: "b",
        explication: "entrer les explications que vous voulez"
    },

    // {
    //     question: "Comment sélectionnez-vous un élément par son ID en utilisant le DOM?",
    //     answers: {
    //         a: "document.getElementById('id')",
    //         b: "document.getElement('id')",
    //         c: "document.querySelector('#id')"
    //     },
    //     correctAnswer: "a"
    // }, 

    // {
    //     question: "Quelle méthode <strong>ajoute </strong>un nouvel élément au DOM?",
    //     answers: {
    //         a: "document.createElement()",
    //         b: "document.appendChild()",
    //         c: "document.newElement()"
    //     },
    //     correctAnswer: "a"
    // },

    // {
    //     question: "Comment pouvez-vous ajouter un <strong>écouteur d'événements</strong> à un élément dans le DOM?",
    //     answers: {
    //         a: "element.addEventListener('event', function)",
    //         b: "element.onEvent('event', function)",
    //         c: "element.event('event', function)"
    //     },
    //     correctAnswer: "a"
    // },

    // {
    //     question: "Quelle propriété du DOM permet de <strong>modifier le contenu textuel </strong> d'un élément?",
    //     answers: {
    //         a: "textContent",
    //         b: "innerHTML",
    //         c: "innerText"
    //     },
    //     correctAnswer: "a"
    // }, 

    // {
    //     question: "Quelle méthode est utilisée pour <strong>supprimer</strong> un élément du DOM?",
    //     answers: {
    //         a: "document.deleteElement()",
    //         b: "element.removeChild()",
    //         c: "element.remove()"
    //     },
    //     correctAnswer: "c"
    // },

    // {
    //     question: "Comment <strong>changer le style d'un élément</strong> en utilisant le DOM?",
    //     answers: {
    //         a: "element.styles.set('color', 'red')",
    //         b: "element.style.color = 'red'",
    //         c: "element.setColor('red')"
    //     },
    //     correctAnswer: "b"
    // },

    // {
    //     question: "Que représente <strong>'document' </stronger> dans le contexte du DOM?",
    //     answers: {
    //         a: "Le navigateur web actuel",
    //         b: "L'objet racine du DOM",
    //         c: "Une fonction JavaScript"
    //     },
    //     correctAnswer: "b"
    // },

    // {
    //     question: "Quelle méthode permet de trouver tous les éléments qui correspondent à un sélecteur CSS donné?",
    //     answers: {
    //         a: "document.querySelector()",
    //         b: "document.getElementById()",
    //         c: "document.querySelectorAll()"
    //     },
    //     correctAnswer: "c"
    // },

    // {
    //     question: "Quel est l'<stronger>objet parent</stronger> de tous les objets dans le DOM?",
    //     answers: {
    //         a: "window",
    //         b: "document",
    //         c: "HTMLDocument"
    //     },
    //     correctAnswer: "a"
    // },    
         
    
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
        questionText.innerHTML = `${questionIndex + 1}. ${questionData.question}`;
        questionText.setAttribute('id', 'question' + `${questionIndex}`)
        //questionText.setAttribute('alt', `${questionData.question}`);
        if(questionData.img != ''){

            let img_question = document.createElement('img');
            img_question.innerHTML = `${questionData.img}`;
            img_question.setAttribute('src', `${questionData.img}`)
            img_question.classList.add('tailleQuestion');
            questionElement.appendChild(img_question);
        }
        questionElement.appendChild(questionText);
        
        // console.log("mon image" + img_question);


        let number = 1;
        // Création des réponses au quiz en btn radio 
        for (const option in questionData.answers) {

            const optionLabel = document.createElement('label');
            optionLabel.setAttribute('for', `questionElement${number}`);                                              

                optionLabel.innerHTML = `
                    <input type="radio" name="question${questionIndex}" id="questionElement${number}"  value="${option}" aria-labelledby="question${questionIndex}">
                    ${option}: ${questionData.answers[option]}  
                `;
            
            // console.log(option); on récupère option qui représente nos a,b,c et ils vont aller chercher le nom de la réponse avec
            //questionData.answers[option]  -----> ex : si mon option vaut a
            // questionData.answers[a] = Paris ------> dans notre premier objet le 'a' a pour valeur 'Paris'
            questionElement.appendChild(optionLabel);
            number++;
        }
        

        quizContainer.appendChild(questionElement);
    });
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.question');
    let score = 0;
    let manque = false;
    let tab = [];
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
        if(answerContainer.querySelector(selector) == null){
            
            manque = true; 
            tab.push(questionIndex);
        }
        // console.log(answerContainer.querySelector(selector) ); ---> ensuite on vient récupérer la value 
        // de notre réponse que l'on a coché ===> en gros là c'est l'assemblage de nos deux explications juste au 
        // dessus, on récupère la question avec ces enfants qui sont composés de <label> et d'<input> de type radio 
        // et pour finir avec le selector on crée le moyen de sélectionner le input qui a été coché par le user pour en récupérer 
        // la value, dans notre cas le 'a' vaut 'Paris'

        
        if (userAnswer === questionData.correctAnswer) {
           
            score++;
        }
    });

    if(manque){
        console.log('il manque une question à cocher');
        let message_manquant = document.getElementById('message_incomplet');
        console.log(message_manquant);
        message_manquant.style.display = 'block';

        tab.forEach((element, index)=>{

            let select_question = document.getElementById('question-container');            
            let question_plus = select_question.children[element];            
            
            let color_p_question = question_plus.querySelector('p');            
            color_p_question.style.color = 'blue';
        });
       
    }else{

        resultContainer.innerHTML = `Score : ${score} / ${quizData.length}`;

        let container = document.getElementById('question-container');

        for(i = 0; i <= container.childElementCount; i++){
            let description = document.createElement('p');
            // let question = container.querySelector('div');
            let question = container.children[i];
            console.log(question);

            description.textContent = quizData[i].explication;

            question.appendChild(description);

        }

        //ajouter le détail des réponses

    }
}

buildQuiz();

submitButton.addEventListener('click', showResults);


function st(){
    let quiz = document.getElementById('quiz-container')
    quiz.style.background = 'red';
    console.log("fonctionne");
}

document.getElementById("contraste").addEventListener("click", st);


    const selectElement = document.getElementById('selection');
    
    selectElement.addEventListener('change', (event) => {
        let quiz = document.getElementById('quiz-container')
        const valeurSelectionnee = selectElement.value;
        console.log(valeurSelectionnee);
        if(valeurSelectionnee == 'color1'){
            quiz.style.background = 'yellow';
            console.log("touch")
        }else if(valeurSelectionnee == 'color2'){
            
            quiz.style.background = 'red';
            
        }else{
            console.log('aucune selection');
        }
        console.log('Option sélectionnée:', valeurSelectionnee);
    });
