

// console.log("timing function in js")



// console.log("start")


// let display=()=>{

//     console.log("I am display function")
// }

// // display()


// // !  setTimeout()

// setTimeout(display,4000)


// console.log("end")


// setTimeout(()=>{
//     console.log("I am settimeout")
// },5000)



// let wish =()=>{

//     console.log("Happy Birthday 🎁🎁🎂🎂🎂")
// }


// setTimeout(wish, 3000)




// let sorry = ()=>{

//     console.log("sorryyyyyy 🥲🥲🥲🥲🙏🙏🙏🙏🙏")
// }


// setInterval(sorry,1000)



let st = setTimeout(() => {
    
    console.log("I am settimeout")
}, 3000);

clearTimeout(st)


let si = setInterval(() => {
    
    console.log("I am setinterval")
}, 1000);

clearInterval(si)