function calculateCartPrice(...num1){  // ... this is called rest operator it will take all the arguments passed in an array
    return num1
}
console.log(calculateCartPrice(2,3,4,5,6))


const user = {
    name:"ritik",
    age:21,
    price:199
}

function handleobject(anyObject){
    console.log(`username is ${anyObject.name} and price is ${anyObject.price}`)
}
handleobject(user)
handleobject({
    name:"sam",
    price:892
})


const myNewArray = [200,4,67,86]
function returnSecondvalue(getArray){
 return getArray[1]
}
console.log(returnSecondvalue(myNewArray))
const myArray = [23,45,32,21]
function returnThirdvalue(getArray2){
    return getArray[2]
}
console.log(returnThirdvalue(myArray))


const user2 = {
    email:"ritikpandey9536@gmail.com",
    name:"Ritik Pandey",
    age:20,
    isLoggedIn:false,
    

}