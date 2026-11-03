let body = document.querySelector("body")
let btn = document.querySelector("button")
let div = document.querySelector("div")
let currMode = "Light"


btn.addEventListener("click", () => {
    if (currMode === "Light") {
        currMode = "Dark"
        console.log("Dark")
        body.style.backgroundColor = "Black"

        btn.classList.add("dark")
        btn.classList.remove("light")
        
        div.classList.add("dark")
        div.classList.remove("light")
    } else {
        currMode = "Light"
        console.log("Light")
        body.style.backgroundColor = "white"

        btn.classList.add("light")
        btn.classList.remove("dark")

        div.classList.add("light")
        div.classList.remove("dark")
    }
});