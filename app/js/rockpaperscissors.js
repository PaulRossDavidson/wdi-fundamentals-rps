////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
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
	if (move !== null) {
		return move;
  } else {	
		return getInput();
	}
}

function getComputerMove(move) {
	if (move !== null) {
		return move;
  }	else {
		return randomPlay();
	}
	
function getWinner(playerMove,computerMove) {
		if
			(playerMove === computerMove) {
			winner = "tie" 
			return winner}		
		else if
		    (playerMove == "rock" && computerMove == "paper") {
		    winner = "computer"
		    return winner
		    }
		else if 
			(playerMove == "paper" && computerMove == "scissors") {
			winner = "computer" 
			return winner}
		else if
			(playerMove == "scissors" && computerMove == "rock") {
			winner = "computer" 
			return winner}
		else if 
			(playerMove == "rock" && computerMove == "scissors") {
			winner = "player"
			return winner}
		else if 
			(playerMove == "paper" && computerMove == "rock") {
			winner = "player" 
			return winner}
	    else if
			(playerMove == "scissors" && computerMove == "paper") {
			winner = "player" 
			return winner}
}    

function playToFive() {
   
    console.log("Let's play Rock, Paper, Scissors");
   
 	if
		(playerWins == 5) {
		return "Player won everything!"}
	else if
		(computerWins == 5) {
		return "computer won everything!"}
	else if
		(winner == "player") {
		playerWins = (playerWins += 1)
		console.log("Player won this one!")
		}
	else if
		(winner == "computer") {
		computerWins = computerWins += 1
		console.log("The computer won this one!")
		}
	 if
		(winner == "tie") {
		console.log("It's a tie, try again.")}
		
	
}
playToFive(getWinner("scissors", "paper"));
console.log(playerWins)
console.log(computerWins)

    return [playerWins, computerWins];
}
