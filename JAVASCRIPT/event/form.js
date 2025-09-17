

let form = document.querySelector("form")

console.log(form)


form.addEventListener("submit", (e) => {
    
    e.preventDefault()

    let sname = document.getElementById("sname").value 

    let semail = document.getElementById("semail").value 

    console.log({sname, semail})
    console.log("form submitted")
})




let form2 = document.getElementById("form2")

console.log(form2)


form2.addEventListener("submit", (e) => {
    e.preventDefault()

    let num1 = parseInt( document.getElementById("num1").value)

    let num2 =parseInt( document.getElementById("num2").value )

    console.log(num1 + num2)

    let output = document.querySelector(".output")

    output.innerHTML = `<h2> the addition of ${num1} and ${num2} is ${num1 + num2} </h2>`
    
    console.log("add is done")
})