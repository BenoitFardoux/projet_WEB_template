


// Création de tableaux et d'objets
// Un cours qui m'a aidé à bien revoir les notions d'objets js :
// https://www.pierre-giraud.com/javascript-apprendre-coder-cours/creation-objet-litteral/


const quizData = [
  
    {
        img:'',
        descriptionImg: '',
        question: "Placer votre question ici",
        answers: {
            a: "choix N°1",
            b: "choix N°2",
            c: "choix N°3"
        },
        correctAnswer: "c", 
        explication: "entrer vos explications ici"
        
    },
    {
        img: "../assets/images/pere.jpeg",
        descriptionImg: 'Photo d\'un homme rouge avec une barbe blanche',
        question: " Exemple de question : Qui est la personne l'image ci-dessus ?",
        answers: {
            a: "Père-Noël",
            b: "Réponse a",
            c: "Réponse b"
        },
        correctAnswer: "a",
        explication: "plus d'information sur le <a href='https://fr.wikipedia.org/wiki/P%C3%A8re_No%C3%ABl'> wikipedia du Père-Noël</a>"
    },

    {
        img: '',
        descriptionImg: '',
        question: "Qu'est-ce que le <strong><abbr title='document object model'>DOM</abbr></strong> en JavaScript?",
        answers: {
            a: "Une bibliothèque de fonctions",
            b: "Une interface de programmation pour les documents HTML et XML",
            c: "Un langage de programmation"
        },
        correctAnswer: "b",
        explication: "Pour en savoir plus, rendez vous sur le <a href='https://fr.wikipedia.org/wiki/Document_Object_Model' alt='vous allez ouvrir une nouvelle fenêtre' target='_blank' >wikipedia du DOM</a>"
    },

    
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
            img_question.setAttribute('alt', `${questionData.descriptionImg}`)
            img_question.setAttribute('aria-label', 'description de l\'image')
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

        for(i = 0; i <= container.childElementCount - 1; i++){
            let description = document.createElement('p');
            // let question = container.querySelector('div');
            let question = container.children[i];
            console.log(question);

            description.innerHTML = "Bonne réponse : " + quizData[i].correctAnswer + "<br> Explication : <br>" + quizData[i].explication;

            question.appendChild(description);

        }

        let quiz = document.getElementById('quiz-container')
        const redirection_a = document.createElement('a')
        const redirection = document.createElement('button');
        redirection_a.setAttribute('href', '../../index.html');
        redirection_a.textContent = "acceuil";

        redirection.appendChild(redirection_a);
        quiz.appendChild(redirection);
        

    }
}

buildQuiz();

submitButton.addEventListener('click', showResults);


const selectElement = document.getElementById('selection');
    
selectElement.addEventListener('change', (event) => {
    
    let quiz = document.getElementById('quiz-container')
    const valeurSelectionnee = selectElement.value;
    console.log(valeurSelectionnee);
    if(valeurSelectionnee == 'daltonien'){

        quiz.style.background = '#07239C';
        quiz.style.color = '#fff';
    }else if(valeurSelectionnee == 'santa'){
        
        quiz.style.background = 'red';
        
        
    }else if(valeurSelectionnee == 'Achromatopsie'){
        quiz.style.background = '#222222';
    }else{
        
        console.log('aucune selection');
    }
    console.log('Option sélectionnée:', valeurSelectionnee);
});