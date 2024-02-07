const computerChoiceView = document.getElementById('computer-choice');
const yourChoiceView = document.getElementById('your-choice');
const resultView = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let yourChoice;
let computerChoice;
let result;

// listen for a button being clicked
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => { //e for event
    yourChoice =  e.target.id
    yourChoiceView.innerHTML = yourChoice; //use to assign to yourChoice
    generateComputerChoice();
    getResult();
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; //use 3 as well

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }
    computerChoiceView.innerHTML = computerChoice;
};

//to get result
    function getResult() {
        if (computerChoice ===  yourChoice) {
            result = "It's a draw!"
        }
        if (computerChoice === 'rock' && yourChoice === 'paper') {
            result = "You Win! Another Game?"
        }
        if (computerChoice === 'rock' && yourChoice === 'scissors') {
            result = "You lost! Please try again."
        }
        if (computerChoice === 'paper' && yourChoice === 'scissors') {
            result = "You Win! Another Game?"
        }
        if (computerChoice === 'paper' && yourChoice === 'rock') {
            result = "You lost! Please try again."
        }
        if (computerChoice === 'scissors' && yourChoice === 'rock') {
            result = "You Win! Another Game?"
        }
        if (computerChoice === 'scissors' && yourChoice === 'paper') {
            result = "You lost! Please try again."
        }
        resultView.innerHTML = result;
    }