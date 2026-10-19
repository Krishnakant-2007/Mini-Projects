let playerScore = 0;
let compScore = 0;

const choices = document.querySelectorAll("#rock, #paper, #scissor")
const msg = document.querySelector(".ready")

const uScore = document.querySelector(".p-score")
const pScore = document.querySelector(".c-score")

choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", () => {
        // console.log("Choice was clicked")
        const userChoice = choice.getAttribute("id")
        // console.log(`choice was clicked ${userChoice}`)
        playGame(userChoice);
        msg.classList.remove("select");         // Remove old animation
        void msg.offsetWidth;                   // Restart animation
        msg.classList.add("select");            // Apply animation again
    });
});

const playGame = (userChoice) => {
    console.log(`User choice is ${userChoice}`)
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log(`comp choice is ${compChoice}`)

    if (userChoice === compChoice) {
        //Draw game
        drawGame()
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //compChoice may be paper or scissor
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // compChoice maybe rock or scissor
            userWin = compChoice === "rock" ? true : false;
        } else {
            //comp choice maybe rock or paper
            userWin = compChoice === "rock" ? false : true;
        };

        showWinner(userWin, userChoice, compChoice);
    };
};

const genCompChoice = () => {
    //Rock ,Paper, Scissors
    const choices = ["rock", "paper", "scissor"]
    const randomIdx = Math.floor(Math.random() * 3)             //randomIdx ki range belongs to [0, 2]
    return choices[randomIdx]
}

const drawGame = () => {
    console.log(`Game was draw`)
    msg.innerText = "MATCH DRAW  PLAY AGAIN"
    msg.style.backgroundColor = "#d8c300";
    msg.style.boxShadow = " 0 0 20px 10px #d8c300";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        console.log("You Win!")
        playerScore++
        uScore.innerText = playerScore;
        msg.innerText = `YOU WIN! YOUR ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "rgb(50, 216, 4)";
        msg.style.boxShadow = " 0 0 20px 10px rgb(55, 255, 0)";
    } else {
        console.log("You Loose")
        compScore++
        pScore.innerText = compScore;
        msg.innerText = `YOU LOOSE ${compChoice} beats YOUR ${userChoice}`
        msg.style.backgroundColor = "red";
        msg.style.boxShadow = " 0 0 20px 10px rgb(255, 0, 0)";
    }
};