//  ask user for input
// check that the input has to be either rock, paper, scissors (case-insenstive)
function playerSelection(playerScore, computerScore){
    let playerSelection = prompt(`So far the score is Player: ${playerScore} - Computer: ${computerScore}.\nChoose your competitor:`, "Rock, Paper, or Scissors?");
    whileTrue=true;
    while(whileTrue==true){
        playerSelection=capitalize(playerSelection);
        if(playerSelection=='Rock' || playerSelection=='Paper' || playerSelection=='Scissors'){
            return playerSelection;
            whileTrue=false;
        } else {
            playerSelection = prompt("You have to choose between Rock, Paper, or Scissors.")
            whileTrue=false;
        }
    }
}

//capitalize player choice
//get the first character, capitalize it, attach it back
function capitalize(playerSelection){
    playerSelection=playerSelection.toLowerCase();
    let capitalize=playerSelection.charAt(0);
    return playerSelection=capitalize.toUpperCase()+playerSelection.substring(1);;
}

//  computer randomly chooses between rock, paper, and scissors.
//      computer chooses random number up to 3 (math.random * 3)
//      each number (1,2,3) represents one item
function getComputerChoice(){
    let computerNumber = Math.floor(Math.random()*3)+1;
    switch(computerNumber){
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

//we get the player's choice and the computer's choice
//there are at least 7 outcomes, 3 for player, 3 for computer, and a draw
//if player gets the winning choice, output winner
//if computer gets the winning choice, output loser
//if draw, output draw
//explain why winner, loser, or draw
function rounds(player, computer){
    let gameResult=2;
    if(player==computer)
        return gameResult;
    else{
        switch(player){
            case "Rock":
                if(computer=="Scissors"){
                    return gameResult=1;
                } else {
                    return gameResult=0;
                }
            case "Scissors":
                if(computer=="Paper"){
                    return gameResult=1;
                } else {
                    return gameResult=0;
                }
            case "Paper":
                if(computer=="Rock"){
                    return gameResult=1;
                } else {
                    return gameResult=0;
                }
        }
    }
}

//figures out who wins in total
function winner(playerScore,computerScore){
    if(playerScore>computerScore)
        return "PLAYER";
    else
        return "COMPUTER";
}

//continue playing rounds until someone reaches 5 points
//counter for each player starting 0
//whoever wins, counter goes up ++
//when a player reaches 5, stop game, announce winner
function mainGame(){
    let playerScore=0;
    let computerScore=0;
    alert("Welcome to Rock, Paper, Scissors! Click OK to continue.")
    whileTrue=true;
    while (playerScore<5 && computerScore<5){
        let player = playerSelection(playerScore, computerScore);
        let computer = getComputerChoice();
        let gameResult=rounds(player, computer);
        if (gameResult==0){
            alert(`You lost! ${computer} beats ${player}!`);
            computerScore++;
        } else if (gameResult==1){
            alert(`You won! ${player} beats ${computer}!`);
            playerScore++;
        } else {
            alert(`It's a draw! You both chose ${player}!`);
        }
    }
    alert(`And the winner is ${winner(playerScore, computerScore)}!`);
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);
}

/*let player = playerSelection();
let computer = getComputerChoice();

console.log(rounds(player,computer));
if(player == computer){
    console.log("Draw");
    console.log(player);
    console.log(computer);
} else {
    console.log("Diff");
    console.log(player);
    console.log(computer);
}*/

mainGame();
