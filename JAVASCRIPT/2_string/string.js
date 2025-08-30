

// ! how to declare string 

let str1 = 'I am first string'

console.log(str1)
console.log(typeof str1)


let str2 = "I am second string"

console.log(str2)
console.log(typeof str2)

let str3 = `I am string 3`

console.log(str3)
console.log(typeof str3)



// !  how to know the length of the string 


console.log(str1.length)



// !    Methods of String

// ! 1.  toUpperCase()

// this method is used to convert any string into uppercase and it will return one new string.

// it will not modify the original string.

let sname = "karthik"

let upper = sname.toUpperCase()

console.log(upper)
console.log(sname)


// !  2. toLowerCase()


// this method is used to convert any string into lowercase and it will return one new string.

// it will not modify the original string.

let city = "CHENNAI"

let lower =  city.toLowerCase()

console.log(lower)
console.log(city)



// !  3. trim()

// it is used to remove the whitespaces from both the sides of the string and it will return one new string.

let str4 = "  hello   "

console.log(str4)

console.log(str4.length)

let str5 = str4.trim()

console.log(str5)
console.log(str5.length)


// ! 4.  indexOf()

// this method is used to know the index of the given string.
// it will take the first occurace of the given string.

let msg= "good morning"

console.log(msg.indexOf("o"))    // 1

// ! 5. lastIndexOf()

// this method is used to return the last occurance index of the given string. 

console.log(msg.lastIndexOf("o"))   // 6


// ! 6. includes()

// it is used to know the given string is present or not, if it is present it will return true else it will return false.

console.log(msg.includes("good "))  // true
console.log(msg.indexOf("Good"))   // false 


// ! 7. charAt()

// it is used to know the character present in the given index.

console.log(msg.charAt(9))

// ! 8. concat()

// it is used to combine two or more than two strings and it will return one new string.

let msg1 = "hello everyone"
let msg2 = "how are you"

console.log(msg1.concat(" ",msg2," ?"))

let combine = msg1.concat(" ",msg2," ?")
console.log(combine)



// ! 9. replace()

let msg3 = "Bangalore"

let replaceMsg3 = msg3.replace("a", "@")

console.log(replaceMsg3)


// ! 10. replaceAll()

let allReplaceMsg3 = msg3.replaceAll("a", "@")
console.log(allReplaceMsg3)



let sentence = "I am from bangalore, I love bangalore"

console.log(sentence)
console.log(sentence.replaceAll("bangalore", "chennai"))


// !  String interpolation ***

let a = 10 
let b = 20 

// the multiplication of 10 and 20 is 200 

console.log(`the multiplication of ${a} and ${b} is ${a*b}`)


// !  11. split()

// it is used to convert any string into array. 

let greet = "good evening everyone"

console.log(greet.split(" "))

console.log(greet.split(""))

console.log(greet.split())

// ! 12.  slice()

// it is used to extract one string from another string.
// it will take two parameters(startIndex , endIndex)
// it will not includes the endIndex value.
// here we can give negative value also.


let str6 = "this is javascript session"

console.log(str6.slice(0,3))    // thi
console.log(str6.slice(8))     // javascript session
console.log(str6.slice(3,0))  

console.log(str6.slice(-7))     // session
console.log(str6.slice(-7,-2)) // sessi



// ! 13. substring()

console.log(str6.substring(0,3))   // thi
console.log(str6.substring(8))    // javascript session
console.log(str6.substring(3,0)) // thi

console.log(str6.substring(-7))