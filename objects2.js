// //const tinderUser = new Object()  it is an singleton object
const tinderUser = {}  // it is non singleton object

tinderUser.id = "123"
tinderUser.name = "Ritik"
tinderUser.isLoggedIn = false
//console.log(tinderUser)

// const regularUser = {
//     email:"ritikpandey9536@gmail.com",
//     fullname:{
//         userFullname:{
//             firstname:"Ritik",
//             lastname:"Pandey",
//         }   
//     }
// }
// console.log(regularUser.fullname)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2} // spread operator same as like array
// console.log(obj3)


//when value comes from database
const users = [
 {
    id:1,
    email:"ritikpandey9536@gmail.com",
    age:21
 },
 {
    id:1,
    email:"ritikpandey9536@gmail.com",
    age:21
 },
 {
    id:1,
    email:"ritikpandey9536@gmail.com",
    age:21
 },
]
// console.log(users[2])
console.log(tinderUser)
console.log(Object.keys(tinderUser));  // it will return an array of keys
console.log(Object.values(tinderUser))  // it will return an array of values of object
console.log(Object.entries(tinderUser))


console.log(tinderUser.hasOwnProperty('isLoggedIn'))  // we can check if object has this property or not
