let boxes = document.querySelectorAll(".box")
let resetBtn = document.querySelector("#reset")
let newGameBtn = document.querySelector("#new")
let winnerAnounce = document.querySelector(".msg-container")
let winner = document.querySelector("#msg")

let turn_O = true

// 🎵 Game Sounds
let moveSound = new Audio("sounds/move.wav");
let winSound = new Audio("sounds/win.wav");
let tieSound = new Audio("sounds/tie.wav");

// Sound volume
moveSound.volume = 0.9;
winSound.volume = 0.9;
tieSound.volume = 0.9;

const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn_O) {
            box.innerText = "X"
            turn_O = false
            box.classList.add("x");
            box.classList.remove("o");
        } else {
            box.innerText = "O"
            turn_O = true
            box.classList.add("o");
            box.classList.remove("x");
        }

        moveSound.currentTime = 0;
        moveSound.play();

        box.disabled = true;

        checkWinner()
    })
})

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = ""
    }
}


const showWinner = (win) => {
    winner.innerText = `Congratulations! Winner is ${win}`;
    winnerAnounce.classList.remove("hide");

    moveSound.pause();

    winSound.currentTime = 0;
    winSound.play().catch((error) => {
        console.log("Winner sound error:", error);
    });
};

const checkWinner = () => {
    for (let pattern of winningPatterns) {
        console.log(pattern[0], pattern[1], pattern[2])
        console.log(
            boxes[pattern[0]].innerText,
            boxes[pattern[1]].innerText,
            boxes[pattern[2]].innerText
        )
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("Winner")

                showWinner(pos1Val)
                disableBoxes()
                return
            }
        }
    }

    checkTie()

}


const resetGame = () => {
    turn_O = true;
    enableBoxes();
    winnerAnounce.classList.add("hide")

    moveSound.pause();
    winSound.pause();
    tieSound.pause();

    moveSound.currentTime = 0;
    winSound.currentTime = 0;
    tieSound.currentTime = 0;
}

newGameBtn.addEventListener("click", resetGame)
resetBtn.addEventListener("click", resetGame)

const checkTie = () => {
    let isTie = true;

    for (let box of boxes) {
        if (box.innerText === "") {
            isTie = false;
            break;
        }
    }

    if (isTie) {
        winner.innerText = "It's a Tie! 🤝";
        winnerAnounce.classList.remove("hide");

        moveSound.pause();

        tieSound.currentTime = 0;
        tieSound.play().catch((error) => {
            console.log("Tie sound error:", error);
        });

        disableBoxes();
    }
};
