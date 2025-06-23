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


cons