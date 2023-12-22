const quizData = [
  
    {
        img:'../assets/images/pere.jpeg',
        descriptionImg: '',
        question: "Placer la question ici",
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

       
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');

        const questionText = document.createElement('p');
        questionText.innerHTML = `${questionIndex + 1}. ${questionData.question}`;
        questionText.setAttribute('id', 'question' + `${questionIndex}`)
        questionText.setAttribute('alt', `${questionData.question}`);
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
        
        let number = 1;
        
        // Création des réponses au quiz en btn radio 
        for (const option in questionData.answers) {


            const optionLabel = document.createElement('label');
            optionLabel.setAttribute('for', `questionElement${number}`);                                              

                optionLabel.innerHTML = `
                    <input type="radio" name="question${questionIndex}" id="questionElement${number}"  value="${option}" aria-labelledby="question${questionIndex}">
                    ${option}: ${questionData.answers[option]}  
                `;
            
            optionLabel.setAttribute('for', `questionElement${number}`);                                             

              
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

        const selector = `input[name=question${questionIndex}]:checked`;        
        
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if(answerContainer.querySelector(selector) == null){
            
            manque = true; 
            tab.push(questionIndex);
        }
        if(answerContainer.querySelector(selector) == null){
            
            manque = true; 
            tab.push(questionIndex);
        }       
        
        if (userAnswer === questionData.correctAnswer) {
           
            score++;
        }
    });

    if(manque){
        
        let message_manquant = document.getElementById('message_incomplet');
        
        message_manquant.style.display = 'block';

        tab.forEach((element, index)=>{

            let select_question = document.getElementById('question-container');            
            let question_plus = select_question.children[element];            
            
            let color_p_question = question_plus.querySelector('p');            
            color_p_question.style.color = 'blue';
        });
       
    }else{

    if(manque){
        
        let message_manquant = document.getElementById('message_incomplet');        
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
            let question = container.children[i];         

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
}
buildQuiz();

submitButton.addEventListener('click', showResults);



const selectElement = document.getElementById('selection');
    
selectElement.addEventListener('change', (event) => {
    
    let quiz = document.getElementById('quiz-container')
    const valeurSelectionnee = selectElement.value;
    
    if(valeurSelectionnee == 'daltonien'){

        quiz.style.background = '#07239C';
        quiz.style.color = '#fff';
    }else if(valeurSelectionnee == 'santa'){
        
        quiz.style.background = 'red';
        
        
    }else if(valeurSelectionnee == 'Achromatopsie'){
        quiz.style.background = '#222222';
    }else{
        
        console.log("aucun choix");
    }
    
});




    
