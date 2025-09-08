
// promise is one javascript object , used to handle asynchronized operation.
// we can create promise by using new keyword. 
// it will take one callback function there it will take two parameters (resolve , reject)
// for handling the resolve we need  .then() block and for handling the reject we need .catch() block.

// promise having 3 states (pending , fulfilled, rejected)


let p = new Promise((resolve, reject)=>{

    let studied = false 

    if(studied)
    {
        resolve("I will give mock on 15th sept")
    }
    else{
        reject("I will not give bcz I am not prepared")
    }

})

console.log(p)

p
.then((data)=>{
    console.log(data)
})
.catch((err)=>{

    console.log(err)
})
.finally( 
    console.log("I am finally block")
)




