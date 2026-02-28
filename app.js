let drawNumberList = [];
let secretNumber = generateRandomNumber();
let attempts = 1;
function textOfTheGame(tag, text) {
    let campo = document.querySelector(tag);
    campo.innerHTML = text;
}
textOfTheGame('h1','Number Guessing Game');
textOfTheGame('p','Enter a number from 1 to 500 to be guessed:');

function userActualAttempt (kick) {
 document.getElementById("guessUser").innerHTML = `Seu chute atual é: ${kick}`;
}

function verifyPlayerGuess() {       
    function tips () {
    if(secretNumber > kick) {
        textOfTheGame('h3', `Voce errou!! <br> O número secreto é maior.`);
    } else if(secretNumber < kick) {
        textOfTheGame('h3',`Voce errou!! <br> O número secreto é menor.`);
    } else {
        return null
    }
}

    let kick = parseInt(document.querySelector('input').value);
    userActualAttempt(kick);
    if(kick == secretNumber) {
       let conditionAttempts = attempts > 1? 'tentativas' : 'tentativa';
       let messageAttempts  = `Voce acertou!! O número secreto é: ${secretNumber}, e o jogador finalizou o jogo com: ${attempts} ${conditionAttempts}`;
       textOfTheGame('h2',`${messageAttempts}`);
       document.getElementById('retry').removeAttribute('disabled');
    } else {
       clearInput();
    }
    attempts ++;
    tips();
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
    document.querySelector('h2').innerHTML = '';
    document.querySelector('h3').innerHTML = '';
    document.getElementById('retry').setAttribute('disabled', true);
}








