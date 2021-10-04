// Sir, Please check the RokPaperScissors.java in folder java if you would like to see the comparison between java and javascript. Thank You Sir :).


const computerDisplay = document.getElementById('computer-guess');
const userDisplay = document.getElementById('user-guess');
const resultDisplay = document.getElementById('result');
const userChoices = document.querySelectorAll('.buton button');
const computerScoreDisplay = document.getElementById('computer-score');
const playerScoreDisplay = document.getElementById('player-score')
const roundDisplay = document.getElementById('round-number')
const computerChoice = ['Rock', 'Paper', 'Scissors'];

let computerScore = 0;
let playerScore = 0;
let round = 1;
let userChoice;
let randomize; 
let comchoice;
let result;





const computerGuess = () => {
randomize = Math.floor(Math.random() * 3);
comchoice =  computerChoice[randomize];   
computerDisplay.innerHTML = comchoice;
}


userChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userDisplay.innerHTML = `You have choosen ${userChoice}`;
    computerGuess();
    getResult();
    round++;
    roundDisplay.innerHTML = round;
}));



const getResult = () => {
    if (userChoice === comchoice) {
        result = "It's Draw Mate, Try Again !!!";
    }
    
    else if (userChoice === "Rock") {
        if (comchoice === 'Paper') {
            result = 'Ahhh, You Lose Bruhh';
            computerScore++;
            computerScoreDisplay.innerHTML = computerScore;
        }
        else {
            result = 'Yeahhh, You Win Bruhh';
            playerScore++;
            playerScoreDisplay.innerHTML = playerScore;
        }
    }

    else if (userChoice === "Paper") {
        if (comchoice === 'Rock') {
            result = 'Yeahhh, You Win Bruhh';
            playerScore++;
            playerScoreDisplay.innerHTML = playerScore;
        }
        else {
            result = 'Ahhh, You Lose Bruhh';
            computerScore++;
            computerScoreDisplay.innerHTML = computerScore;
        }
    }

    else {
        if (comchoice === 'Rock') {
            result = 'Ahhh, You Lose Bruhh';
            computerScore++;
            computerScoreDisplay.innerHTML = computerScore;
        }
        else {
            result = 'Yeahhh, You Win Bruhh';
            playerScore++;
            playerScoreDisplay.innerHTML = playerScore;
        }
    }
    
    
    resultDisplay.innerHTML = result;
}



