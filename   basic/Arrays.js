const myArr = [43,43,21,45,32,54]
console.log(myArr[3])

const myarr2 = new Array(1,3,4,5,43,33)
console.log(myarr2)

// array methods
myArr.push(6)
console.log(myArr)
myArr.pop() // it pops the last element from the array


myArr.unshift(9)  // it use to insert element in the front and shift all the values by 1
myArr.shift() // used to remove the element from the first index


console.log(myArr.includes(9))


const newArr = myArr.join()
console.log(newArr)  // it converts the existing array into strings
console.log(typeof newArr)



//          Slice splice        ///////////

console.log("A",myArr)
const myn1 = myArr.slice(1,3)  // slice is used to get the elements from the array without changing the original array
console.log(myn1)



console.log("b",myArr)
const myn2 = myArr.splice(1,3)
console.log(myn2)    // splice is used to remove the elements from the array and it also changes the original array
console.log(myArr)