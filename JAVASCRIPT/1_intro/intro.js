

console.log("external javascript")


//!  How to Declare variable 

// let , var , const 


// !  let keyword 

let sname 

sname = "manish"

console.log(sname)

let age = 21 

console.log(age)

age = 22

console.log(age)

// let sname 

// in let keyword re-declaration is not possible. 


// !  var keyword 


var isMarried 

isMarried = false 

console.log(isMarried)


var hasChild = true 
console.log(hasChild)


hasChild = false 
console.log(hasChild)


// by using var keyword we can re-declare any variable.

var isMarried = true 

console.log(isMarried)


// !   const 

// when we want to take constant value that we don't want to change we have to use const keyword.

const aadharNo = 123456789012

console.log(aadharNo)

// aadharNo = 987654321234

// console.log(aadharNo)




//!    DataTypes 

//  1. primitive      2. Non Primitive 


// !   Primitive Datatypes 

// !  1. number

let phNo = 7878123456
console.log(phNo)

//todo: typeof operator is used to know the datatype of the variable. 

console.log(typeof phNo )

let salary = 25000.50 
console.log(salary)
console.log(typeof salary)


// !  2. boolean 


let isStudent = false 

console.log(isStudent)
console.log(typeof isStudent)


// !  3.  string

let city = "chennai"
let state = 'tamilnadu'
let country = `India`

console.log(typeof city)
console.log(typeof state)
console.log(typeof country)


// !  4. undefined 

// variable declared but not initialized is called undefined.
// typeof undefined is undefined.

let courseName 

console.log(courseName)

console.log(typeof courseName)

// !  5. null 

let bonus = null;

console.log(bonus)
console.log(typeof bonus)  // object 


// !  6. bigint 

let largeNum = 2n 

console.log(largeNum)
console.log(typeof largeNum)



// !  2. Non Primitive datatypes

//  array , function , object 


// !  1. array 

let arr = [20, "html",true, undefined]

console.log(arr)

// !  2. function 


function add()
{
    console.log("I am add function ")
}

add()


// ! 3. object 


let emp = {
    ename:"miller",
    eid : 3451,
    city:"new york",
    salary:9000
}

console.log(emp)