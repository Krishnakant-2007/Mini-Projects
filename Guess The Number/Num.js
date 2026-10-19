let random = Math.random();
let gameNum = Math.floor(random * 10);

let userNum = prompt("Guess the number between 1 to 10")
while (userNum != gameNum) {
    let userChoice = confirm("Oops! You loose, Wanna guess again??")
    if (userChoice) {
        userNum = Number(prompt("Guess the number between 1 to 10"))
    } else {
        alert("Thanks for playing")
        break
    }
}
if(userNum == gameNum){
    alert("Congrats! You Won 🎉🎉")
}