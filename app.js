let drawNumberList = [];
let secretNumber = generateRandomNumber();
let attempts = 1;
function textOfTheGame(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}
textOfTheGame('#title','Number Guessing Game');
textOfTheGame('.paragraph__text','Enter a number from 1 to 500 to be guessed:');

function userActualAttempt (kick) {
 document.getElementById("guessUser").innerHTML = `Chute atual: ${kick}`;
}

function verifyPlayerGuess() {       
    function tips (kick) {
    if(secretNumber > kick) {
        textOfTheGame('#message', `Você errou!! O número secreto é maior.`);
    } else if(secretNumber < kick) {
        textOfTheGame('#message',`Você errou!! O número secreto é menor.`);
    } else {
        return null
    }
}

    let kick = parseInt(document.querySelector('input').value);
    userActualAttempt(kick);

    if(kick == secretNumber) {
       let conditionAttempts = attempts > 1? 'tentativas' : 'tentativa';
       let messageAttempts  = `Você acertou!! O número secreto é: ${secretNumber}, e o jogador finalizou o jogo com: ${attempts} ${conditionAttempts}`;
       textOfTheGame('#result',`${messageAttempts}`);
       document.getElementById('retry').removeAttribute('disabled');
    } else {
       attempts ++;
       clearInput();
       tips(kick);
    }
    console.log(secretNumber);
    }

function generateRandomNumber() {   
  let chosedNumber =  parseInt(Math.random() *500 + 1);
  if(drawNumberList.includes(chosedNumber)) {
    return generateRandomNumber();
  } else {
    drawNumberList.push(chosedNumber);
    console.log(drawNumberList);
    return chosedNumber;
  }
 }

function retryGame() {
    drawNumberList= [];
    secretNumber = generateRandomNumber();
    clearInput();
    clearTexts();
    attempts = 1;
}

function clearInput() {
    let clearInput = document.querySelector('input');
    clearInput.value = '';
}

function clearTexts() {
    document.getElementById('result').innerHTML = '';
    document.getElementById('message').innerHTML = '';
    document.getElementById('guessUser').innerHTML = '';
    document.getElementById('retry').setAttribute('disabled', true);
}








