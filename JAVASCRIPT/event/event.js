
console.log("event in js")

let display = () => {
    
    console.log("I am display function")
}


let changeColor = () => {

    let header = document.querySelector("header")

    header.style.backgroundColor = "red"
    
    console.log("hi")
}



let printMsg = () => {
    alert("good afternoon ")
}

let copyText = () => {

    let card1 = document.querySelector(".card1")
    console.log(card1.innerHTML)

    let card2 = document.querySelector(".card2")
    
    card2.innerHTML = card1.innerHTML


    card1.innerHTML = ""
    
   
    console.log("copied")
}



let changeBackgrond = () => {

    let box = document.querySelector(".box")

    box.style.backgroundColor = "green"
    
    console.log("hello")
}

let changeBackgrond2 = () => {


    let box = document.querySelector(".box")

    box.style.backgroundColor = "red"
    
    console.log("hiiiii")
}