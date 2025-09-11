
let fetchedData =  fetch("https://fakestoreapi.com/products")


console.log(fetchedData)


fetchedData.then((data)=>{

     console.log(data)  // response 

     let jsondata = data.json()
     console.log(jsondata)   // promise 


     jsondata.then((data)=>{
            console.log(data)  
     })
     .catch((err)=>{
        console.log(err)
     })
})
.catch((err)=>{
    console.log(err)
})
