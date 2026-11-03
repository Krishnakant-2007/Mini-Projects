let number = document.querySelector("#number");
let button = document.querySelector(".button")
let numType = document.querySelector(".num-type-soln")
let evenOdd = document.querySelector(".even-odd-soln")
let div5 = document.querySelector(".div-by-5-soln")
let div3 = document.querySelector(".div-by-3-soln")
let isPrime = document.querySelector(".prime-soln")
let resultContainer = document.querySelector(".result-container")

// button.addEventListener("click", () => {

//     let input = number.value;
//     if (input == "") {
//         return
//     }

//     input = Number(number.value)

//     if (input > 0) {
//         numType.innerText = "Positive"
//     } else if (input === 0) {
//         numType.innerText = "Zero"
//     } else if (input < 0) {
//         numType.innerText = "Negative"
//     }

//     if (input % 2 === 0) {
//         evenOdd.innerText = "Even"
//     } else {
//         evenOdd.innerText = "Odd"
//     }

//     if (input % 5 === 0) {
//         div5.innerText = "Yes"
//     } else {
//         div5.innerText = "No"
//     }

//     if (input % 3 === 0) {
//         div3.innerText = "Yes"
//     } else {
//         div3.innerText = "No"
//     }

//     resultContainer.classList.remove("hidden")
// })

number.addEventListener("input", () => {
    let input = number.value;

    if (number.value == "") {
        resultContainer.classList.add("hidden");
        return
    }

    input = Number(number.value)

    if (input > 0) {
        numType.innerText = "Positive"
    } else if (input === 0) {
        numType.innerText = "Zero"
    } else if (input < 0) {
        numType.innerText = "Negative"
    }

    if (input % 2 === 0) {
        evenOdd.innerText = "Even"
    } else {
        evenOdd.innerText = "Odd"
    }

    if (input % 5 === 0) {
        div5.innerText = "Yes"
    } else {
        div5.innerText = "No"
    }

    if (input % 3 === 0) {
        div3.innerText = "Yes"
    } else {
        div3.innerText = "No"
    }

    {
        let s = 0
        for (let i = 1; i <= input; i++) {
            if (input % i === 0) {
                s += 1
            } else {
                s += 0
            }
        }
        if(s===2){
            isPrime.innerText = "Yes"
        }else{
            isPrime.innerText = "No"
        }
    }

    resultContainer.classList.remove("hidden")
});