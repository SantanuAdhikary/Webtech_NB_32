

// !  Named Function 


function display()
{
    console.log("I am display function")
}

display()

// !  function with parameters 

function add(a , b)
{
    console.log(`the addition of ${a} and ${b} is ${a+b}`)
}

add(2,8)
add(30,50)


// !  function with return keyword 


function sub(a,b)
{
    return a - b;
}

let res = sub(50,20) 
console.log(res)

console.log(sub(40,20))



// !  function with expression


let a = function(sname)
{
    console.log("I am anonymous function")
    console.log(`my name is : ${sname}`)
}

a("santanu")




// !  Arrow Function 



let arrow = ()=>{

    console.log("I am arrow function")
}

arrow()



// !  nested function 


let outer = ()=>{

    console.log("I am outer function")

    let inner =()=>{
        console.log("I am inner function")
    }
    inner()
}


outer()


// !  Lexical Scopping ***

// in nested function inner function can access all the properties of outer function but the outer function can't access the property of inner function, this is called Lexical Scopping.

let parent =()=>{

    let a = 10 

    let child =()=>{
        let b = 20 

        console.log(a)
        console.log(b)
    }
    // console.log(b)
    child()
}

parent()


// !   Higher order Function and Callback Function ***

// any function that takes another function as parameter is called higherorder function.
// the function we are sending to the higher order function as parameter is called callback function.


let hof =(a)=>{

  console.log("I am higher order function")
  a()

}

hof(()=>{
   console.log("I am callback function")
});



// !   IIFE (Immediate Invoke Function Expression)


(function()
{
    console.log("I am iife function")
})()






let fun1 = (a,b ,c)=>
{

    console.log(a)
    console.log(b)

    let fun2=()=>{

        console.log("i am fun2")
    }

    fun2()
    c()
}

fun1(10,"html",()=>{
    console.log("i am cb function")
})