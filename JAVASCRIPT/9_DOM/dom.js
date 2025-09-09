
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



// !  how to apply css 


let items = document.getElementsByTagName("li")

console.log(items)

let about = items[1]

console.log(about)

about.style.color="red"
about.style.textDecoration="underline"


// !  how to add/ remove class 


let firstCard = document.querySelector(".card")

console.log(firstCard.classList)

firstCard.classList.add("dark")


console.log(firstCard.classList)

firstCard.classList.remove("dark")


// !  how to create any element 

let div = document.createElement("div")

div.classList.add("circle")


// cardss[2].append(div)
// cardss[2].prepend(div)

// cardss[2].before(div)
cardss[2].after(div)




let footer = document.createElement("div")

footer.classList.add("footer")

footer.innerHTML = ` <p> this is footer from js file , dom example 2025</p>`


let main = document.querySelector("main")

console.log(main)

main.after(footer)