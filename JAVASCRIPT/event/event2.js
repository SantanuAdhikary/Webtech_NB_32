


let btn = document.querySelector(".btn")

console.log(btn)

btn.addEventListener("click", () => {
    
    alert("i am eventlistener")
})


let header = document.querySelector("header")

header.addEventListener("mouseover", () => {
    
    header.style.backgroundColor = "black"
    header.style.color = "white"
})

header.addEventListener("mouseleave", () => {

    header.style.backgroundColor = "antiquewhite"
    header.style.color = "black"
})




let a1 = () => {
    console.log("i am a1 function")
}

let a2 = () => {
    console.log("i am a2 function")
}


let btn3 = document.querySelector(".btn3")

btn3.addEventListener("click", () => {
    console.log("I am click event")
})

btn3.addEventListener("click", (e) => {
    console.log("I am click event 2");
    console.log(e)
    console.log(e.type)
    console.log(e.target)
});




// !  keyboard events

let input = document.querySelector("#inp1")


input.addEventListener("keydown", () => {
    console.log("key is pressed")
})


input.addEventListener("keyup", (e) => {
    console.log("key is up")

    console.log(e.target.value)


    let output = document.querySelector(".output")

    output.innerHTML = `<h2> ${e.target.value}</h2>`

})