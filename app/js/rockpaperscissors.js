////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {  

    return move || getInput();
}


function getComputerMove(move) {

    return move || randomPlay();
}


function getWinner(playerMove,computerMove) {

    if(playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
        console.log('Player chose ' + playerMove + ' computer chose ' + computerMove);
        console.log('This round winner is ' + winner);
        
        
    } else if(playerMove === 'scissors' && computerMove === 'paper') {
        winner = 'player';
        console.log('Player chose ' + playerMove + ' computer chose ' + computerMove);
        console.log('This round winner is ' + winner);
        
        
    } else if(playerMove === 'paper' && computerMove === 'rock') {
        winner = 'player';
         console.log('Player chose ' + playerMove + ' computer chose ' + computerMove);
        console.log('This round winner is ' + winner);
        
        
    } else if (playerMove === computerMove) {
        winner = 'tie';
        console.log('Player chose ' + playerMove + ' computer chose ' + computerMove);
        console.log('This round is tie');
        
        
    } else {
        winner = 'computer';
        console.log('Player chose ' + playerMove + ' computer chose ' + computerMove);
        console.log('This round winner is ' + winner);
    }
    return winner;
}


var winner;


function playToFive() {
    
    var playerWins = 0;
    var computerWins = 0;

   while (playerWins < 5 && computerWins < 5) { 
       
        getWinner(getPlayerMove(), getComputerMove());
    
        if (winner === "player") {
        playerWins++;
        console.log([playerWins, computerWins]);
        }
        
        else if (winner === "computer") {
        computerWins++;
        console.log([playerWins, computerWins]);
        }
        
        else {
        console.log([playerWins, computerWins]);
        }

   }
   
        if(playerWins === 5 || computerWins === 5) {
            console.log('Winner of this game is ' + winner);
        }
        
    return 'Final result is ' + playerWins + ':' + computerWins;

}
playToFive();
