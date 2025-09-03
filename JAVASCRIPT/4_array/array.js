


let arr = [10,"html",true,[4,9]]

console.log(arr)


// ! how to know the length of the array 


console.log(arr.length)

// !  Array Methods 


// !  1. push()

// it is used to add element at the end of array

let arr1 = [20,30,40]

arr1.push(50)

console.log(arr1)


// ! 2. pop()

// it is used to remove the last element from the array.

let arr2 = [80,90,100]

arr2.pop()


console.log(arr2)

// ! 3. unshift()

// it is used to add element at the staring of array.

let arr3 = [20,40,80]

arr3.unshift(10)

console.log(arr3)


// ! 4. shift()

// it is used to remove element from the starting

let arr4 = [50,60,70]

arr4.shift()

console.log(arr4)


// ! 5. includes()

console.log(arr4.includes(70))
console.log(arr4.includes(700))


// ! 6. indexOf()

let arr5 = [10,20,30,10,20]

console.log(arr5.indexOf(20))

// ! 7. lastIndexOf()

console.log(arr5.lastIndexOf(20))


// ! 8. concat()

let sub1 = ["html","css"]
let sub2 = ["java","python"]

console.log(sub1.concat(sub2))


// ! 9. reverse()

// this method is used to reverse the array. it will modify the original array.

let arr6=[20,40,80,100,150]

arr6.reverse()

console.log(arr6)

// ! 10.  join()

// it is used to convert any array into string

let arr7 = ["hello","how","are","you"]

console.log(arr7.join(" "))


// !  reverse the string using only methods 

let str = "hello"

let arr8 = str.split("")
console.log(arr8)

let revArr = arr8.reverse()

console.log(revArr)

let revStr = revArr.join("")

console.log(revStr)

console.log(str.split("").reverse().join(""))


// !  11. slice()

// it is extracting one array from another array.

let arr9 = [ 8,10,40,66,30,22,10] 

console.log(arr9.slice(2,5))


// ! 12. splice()

// splice() method will take 3 parameters. (startIndex , deleteCount, replacentValue)
// this method will modify the original array.


let arr10 = [8,10,40,66,30,22,10]


arr10.splice(2,3,400)

console.log(arr10)


let subjects = ['html','css','js']

subjects.splice(2,0,"python")

console.log(subjects)




// !  Higher Order Array Methods


// !  1. map()

// map() method is higherorder array method it is used to traverse the array and perform any operation with all the elements of the array. 

// it will return one new array. 

// it will take one callback there it will take 3 paramters (element , index , array)

let numbers = [80,75,65,82,92]


let mappedArr =  numbers.map((ele)=>{

    return ele * 2
 })

 console.log(mappedArr)


 let subject = ['html','css','js','java']

 let upper = subject.map((ele)=>{

    return ele.toUpperCase();
 })

 console.log(upper)


//  !  2. filter()

// it is one higherorder array method , used to traverse the array and check the condition and it will return one new array.


let filteredArr = numbers.filter((ele)=>{

    return ele > 80
})

console.log(filteredArr)


// !  3. reduce()

// it is one higherorder array method used to convert the array into single value.

// it will take 4 parameters ( accumulator , element, index, array)

let arrr= [10,20,30,40,50]


let sum = arrr.reduce((acc,ele)=>{

    return acc + ele
},0)

console.log(sum)


// !  4. sort()

// it is used to sort the array into ascending or descending order. 
// it will take two parameters in the callback function , 
  
  // firstParameter - secondParameter will give ascending order
  // secondParameter - firstParameter will give descending order

let arr11 = [3,1,6,22,5,9]


let asc = arr11.sort((a,b)=>{

     return a - b
})

console.log(asc)

let dsc = asc.sort((a,b)=>{
    return b - a
})

console.log(dsc)





let prices = [200,100,30,45,600]


let m = prices.map((ele)=>{

    return ele * 100
})

console.log(m)

// !  5. forEach()


let x = prices.forEach((ele)=>{

    console.log(ele + 100)

    return ele 
})

console.log(x)