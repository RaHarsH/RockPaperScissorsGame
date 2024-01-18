let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    //rock, paper, scissors
    const randIdx = Math.floor(Math.random()*3);   //Math.floor() is used to covert decimal no's into whole nmbers  //Math.random()*3 generates a random floating number between 0 & 2
    return options[randIdx];
}

const drawGame = () => {
    console.log("Game was draw!");
    msg.innerText = "Game was Draw, Play again.";
    msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) 
    {
        console.log("You win");
        userScore++;
        userScorePara.innerText = userScore;  //takes the userScore increment value to update the scoreboard
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        console.log("You lose");
        compScore++;
        compScorePara.innerText = compScore;  //takes the compScore increment value to update the scoreboard
        msg.innerText = `You lose! ${userChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";
    }


}

const playGame = (userChoice) => {
    console.log(`User choice = ${userChoice}`)
    //Generate Computer choice
    const compChoice = genCompChoice();
    console.log(`Computer choice = ${compChoice}`);

    if(userChoice === compChoice) 
    {
        //Draw Game
        drawGame();
    }
    else {
        let userWin = true;
        if(userChoice === "rock") {
            //computer now can have either paper or scissors //if comp choice was rock it would hve been draw
            userWin = (compChoice === "paper")? false : true;
        }
        else if(userChoice === "paper") {
            //rock, scissors
            userWin = (compChoice === "scissors")? false : true;
        }
        else if(userChoice === "scissors") {
            //rock, paper
            userWin = (compChoice === "rock")? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked!",userChoice );
        playGame(userChoice);

    })
})