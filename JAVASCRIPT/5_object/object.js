
let student = {

    sid:101,
    sname:"rakesh",
    isPlayer:true,
    skills:['java','html','css'],
    work : ()=>{
        console.log("eat sleep repeat")
    },

    address:{
        city:"chennai",
        pinCode:567890
    }
}


console.log(student)


// !  how to access 

console.log(student.sname)
console.log(student.skills[2])
student.work()

console.log(student.address.city)



let employee = {
    ename:"miller",
    eid:101,
    salary:20000
}

console.log(employee.ename)

// ! how to modify

employee.eid = 110

console.log(employee)

// ! how to add 

employee.phNo = 9876543212

console.log(employee)

// ! how to delete 

delete employee.salary

console.log(employee)


// !   methods 


// !   1.  Object.keys()

// it will return the keys in the form of array.

let player = {
    playerName : "rohit",
    age:35,
    team:"India"
}

let keys = Object.keys(player)
console.log(keys)

// ! 2. Object.values()

// it will return all the values in the form of array

let values = Object.values(player)

console.log(values)

// ! 3. Object.entries()

// it will return one nested array where all the key and value pair will be stored in separate array.

let key_values = Object.entries(player)

console.log(key_values)


// ! 4. Object.freeze()

// this method will make the object frozen , then we can't add or modify or delete any element.

let ob1 = {
    obname : "pen",
    color:"red"
}

console.log(ob1)

Object.freeze(ob1)

ob1.color = "black"   // we can't modify
ob1.price = 20       // we can't add
delete ob1.color    // we can't delete

console.log(ob1)


// ! 5.  Object.isFrozen()

console.log(Object.isFrozen(ob1))       // true
console.log(Object.isFrozen(player))   // false


// ! 6. Object.seal()

// it is also similar to Object.freeze() method, here we can't add or delete any element but here we can modify the element.

let ob2 = {
    obname : "notebook",
    price:300
}

console.log(ob2)

Object.seal(ob2)

ob2.color="red"     // we can't add
delete ob2.price   // we can't delete
ob2.price = 500   //! we can modify

console.log(ob2)


// ! 7. Object.isSealed()

// it is used to check the object is sealed or not. 

console.log(Object.isSealed(ob2))       // true
console.log(Object.isSealed(player))   // false



// ! 8.  Object.assign()

// it is used to combine two or more than two objects and it will return one new object.

let person ={
    personName:"rakesh",
    age: 30
}

let address ={
    city:"chennai",
    country:"India"
}


let combinedOb = Object.assign({},person, address)
console.log(combinedOb)

console.log(address)
console.log(person)



// ! 9.   hasOwnProperty()

// it is used to check the given property is present or not.

console.log(address.hasOwnProperty("city"))
console.log(address.hasOwnProperty("pincode"))