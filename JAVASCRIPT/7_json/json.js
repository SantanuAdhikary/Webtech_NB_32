
// JSON (JavaScript Object Notation) is a lightweight data-interchange format 
// that is easy for humans to read and write, and easy for machines to parse and generate.  
 
//!  Advantages of JSON: - 

//? Human-Readable:

//  JSON's structure is easy for developers to understand and  write. 

//? - Lightweight: 

// JSON is a minimal format that reduces the size of the data being transmitted. 

//? - Language-Independent:

//  JSON can be used with many programming languages, 
// including JavaScript, Python, Ruby, Java, etc. 








let person = {
    personName : "rohit",
    age:35,
    city:"chennai",
    isPlayer:true
}

console.log(person)



// !   JSON.stringify()

// this method is used to convert any javascript object into json. 


let jsonData = JSON.stringify(person)

console.log(jsonData)

console.log(typeof jsonData)

// !  JSON.parse()

// this is used to convert any json into javascript object.

let ob1 = JSON.parse(jsonData)

console.log(ob1)





let employee =[
    {
        eid:1,
        ename:"miller",
        sal:7000
    },
    {
        eid:2,
        ename:"adams",
        sal:8000
    },  
    {
        eid:3,
        ename:"scott",
        sal:9000
    }
] 


console.log(employee)

employee.map((ele)=>{
    console.log(ele.sal)
})

// !  Object Destructure 

let student ={
    sname : "rahul",
    age:10,
    isStudent:true,
    skills:['html','css','js']
}

let { isStudent , skills, sname , age }  = student


console.log(sname)



// !    rest parameter 



let display =(a,b,...c)=>{

    console.log(a)
    console.log(b)
    console.log(c)
}

display(10,20,30,40,50,60)


// !  spread opeartor 


let arr1 = [10,20,30]
let arr2= [40,50,60]


let arr3 =[...arr1,...arr2]

console.log(arr3)



let arr4 = [1,2,3,4,5,6,7,8,9,11,12,13]


let [a,b,...c] = arr4

console.log(a)
console.log(b)
console.log(c)