function getComputerChoice() {
    let rps=["Rocks","Papers","Scissors"];
    let random = rps.Math.floor(Math.random()*rps.length);
    return random
}

console.log(getComputerChoice());

function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        return("It's a draw! Play again...");
    }else if(playerSelection === "rock" && computerSelection === "scissor"){
        return("You win! Rock beats scissor");
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        return("You lose! Paper beats rocks");
    }else if (playerSelection === "paper" && computerSelection === "rocks"){
        return("You win! Paper beats rocks");
    }else if (playerSelection === "paper" && computerSelection === "scissor"){
        return("You lose! Scissor beats paper");
    }else if (playerSelection === "scissor" && computerSelection === "rocks"){
        return("You win! Rocks beats scissor");
    }else if (playerSelection === "paper" && computerSelection === "scissor"){
        return ("You win! Scissor beats paper");
    }
}

let computerSelection = getComputerSelection();
let playerSelection = prompt("Choose your weapon");
console.log(playerSelection,getComputerChoice);
console.log(playerSelection,getComputerChoice);
console.log(playerSelection,getComputerChoice);
console.log(playerSelection,getComputerChoice);
console.log(playerSelection,getComputerChoice);