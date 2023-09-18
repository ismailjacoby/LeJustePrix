let gameForm = document.getElementById('game-form');
let userInput = document.getElementById('userInput');
let affichage = document.getElementById('affichage');
let restartDiv = document.getElementById('restart-div')
let scoreVictoire = document.getElementById('score-victoire')
let scoreDefaite = document.getElementById('score-defaite')
let tryCount = document.getElementById('tryCount');
let buttonReset = document.getElementById('button-reset')
let clearButton = document.getElementById('button-clear')
let sendButton = document.getElementById('button-send')
let tentative = document.getElementById('tentative')
let buttonOui;
let buttonNon;

let counter = 0
let randomNumber = Math.floor(Math.random() * 1001);
let initialScoreVictoire = 0;
let initialScoreDefaite = 0;


let messageHigher = "Le nombre recherché est plus élevé";
let messageLower ="Le nombre recherché est plus bas";
let messageFound = "Félicitation vous avez trouver le nombre!";
let messageGameOver = "Game Over! Vous avez dépassé le nombre maximum d'essais autorisés.";

console.log(randomNumber);

userInput.addEventListener('input', function(event) {
    let inputValue = userInput.value;
    let numericValue = inputValue.replace(/[^0-9]/g, '');
    userInput.value = numericValue;
});

document.addEventListener('DOMContentLoaded', function () {
    buttonOui = document.createElement('button');
    buttonOui.setAttribute('id', 'restart-yes');
    buttonOui.textContent = "Oui";

    buttonNon = document.createElement('button');
    buttonNon.setAttribute('id', 'restart-no');
    buttonNon.textContent = "Non";

    buttonOui.addEventListener('click', function(event){
        event.preventDefault();
        
        yes();
    });

    buttonNon.addEventListener('click', function(event){
        event.preventDefault();
        
        non();
    });
});


//Envoyer Onclick
document.addEventListener('DOMContentLoaded', function () {
    let submitButton = document.getElementById('button-send');
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        submit();
    });
});


clearButton.addEventListener('click', function (event) {
    event.preventDefault();
    clearAffichage();
});
  
document.addEventListener('DOMContentLoaded', function () {
    buttonOui = document.createElement('button');
    buttonOui.setAttribute('id', 'restart-yes');
    buttonOui.textContent = "Oui";

    buttonNon = document.createElement('button');
    buttonNon.setAttribute('id', 'restart-no');
    buttonNon.textContent = "Non";

    buttonOui.addEventListener('click', function(event){
        event.preventDefault();
        
        yes();
    });

    buttonNon.addEventListener('click', function(event){
        event.preventDefault();
        
        non();
    });
});

  

//Fonction pour verifier l'entree de l'utilisateur
function submit() {
    event.preventDefault()
    let userInputValue = parseInt(userInput.value);
    if (userInputValue === randomNumber) { 
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'message-found'); 
        let newP = document.createElement('p'); 
        newP.textContent = messageFound;
        newDiv.appendChild(newP);
        affichage.appendChild(newDiv);
        initialScoreVictoire++; 
        scoreVictoire.textContent = initialScoreVictoire;
        disableForm();
        restart(buttonOui, buttonNon);

    } else if (userInputValue < randomNumber) {
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'message-higher'); 
        let newP = document.createElement('p'); 
        newP.textContent = messageHigher;
        newDiv.appendChild(newP);
        affichage.appendChild(newDiv);
        counter++
        tentative.textContent = parseInt(tentative.textContent) + 1;
    } else if (userInputValue > randomNumber) { 
        let newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'message-lower'); 
        let newP = document.createElement('p'); 
        newP.textContent = messageLower;
        newDiv.appendChild(newP);
        affichage.appendChild(newDiv);
        counter++
        tentative.textContent = parseInt(tentative.textContent) + 1;
    }
    if (counter>=10){
        clearAffichage();
        let loseDiv = document.createElement('div');
        loseDiv.setAttribute('id', 'message-higher'); 
        let loseP = document.createElement('p'); 
        loseP.textContent = messageGameOver;
        loseDiv.appendChild(loseP);
        affichage.appendChild(loseDiv);
        disableForm(); 
        initialScoreDefaite++;
        scoreDefaite.textContent = initialScoreDefaite;
        restart(buttonOui, buttonNon);
    }
}


function restart(buttonOui, buttonNon) {
    let newH3 = document.createElement('h3');
    newH3.textContent = "Voulez vous rejouer?";

    let restartDiv = document.getElementById('restart-div');
    restartDiv.appendChild(newH3);
    restartDiv.appendChild(buttonOui);
    restartDiv.appendChild(buttonNon);
}


function yes(){
    clearAffichage();
    clearRejouer();
    enableForm();
    counter=0;
    randomNumber = Math.floor(Math.random() * 1001);
    tentative.textContent = "0";
}
function non(){
    clearAffichage();
    clearRejouer();
    enableForm();
    counter=0;
    randomNumber = Math.floor(Math.random() * 1001);
    tentative.textContent = "0";
    scoreVictoire.textContent = 0; 
    scoreDefaite.textContent = 0;
}

function enableForm(){
    userInput.disabled = false;
    userInput.style.backgroundColor = "#fffcf2";
    sendButton.disabled = false;
    sendButton.style.backgroundColor = "#ccc5b9";
    clearButton.disabled = false;
    clearButton.style.backgroundColor = "#eb5e28"; 
    buttonReset.disabled = false;
    buttonReset.style.backgroundColor = "#ccc5b9";
}
function disableForm(){
    userInput.disabled = true;
    userInput.style.backgroundColor = "#ccc";
    sendButton.disabled = true;
    sendButton.style.backgroundColor = "#ccc";
    clearButton.disabled = true;
    clearButton.style.backgroundColor = "#ccc"; 
    buttonReset.disabled = true;
    buttonReset.style.backgroundColor = "#ccc";
}

//Clear
function clearAffichage() {
    while (affichage.firstChild) {
        affichage.removeChild(affichage.firstChild);
    }
}
function clearRejouer() {
    while (restartDiv.firstChild) {
        restartDiv.removeChild(restartDiv.firstChild);
    }
}

