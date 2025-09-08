
// ! 1.  how to target elements 


//?   by id 


let logo = document.getElementById("logo")

console.log(logo)



// ?  by classname 

let cards= document.getElementsByClassName("card")

console.log(cards)


let secondCard = cards[1]

console.log(secondCard)


let btn = document.getElementsByClassName("btn")

console.log(btn[0])


// ? by tagname


let lists = document.getElementsByTagName("li")

console.log(lists[1])

//  ? qeurySelector()

let logo2 =  document.querySelector("#logo")
console.log(logo2)


let card1 = document.querySelector(".card")

console.log(card1)


let li = document.querySelector("li")

console.log(li)


// ?  querySelectorAll()

let c =document.querySelectorAll(".card")

console.log(c[1])



// !  how to get / set content inside element


let cardss= document.getElementsByClassName("card")

console.log(cardss[1].innerText)
console.log(cardss[1].innerHTML)


console.log(cardss[2])

cardss[2].innerHTML = "<h2> I am from js file</h2> <P> hii hello</P>"

// cardss[2].innerText = "<h1> hi</h1>"