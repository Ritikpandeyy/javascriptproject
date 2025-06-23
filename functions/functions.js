function saymyName(){
    console.log("R") 
    console.log("I")
    console.log("T")
    console.log("I") 
    console.log("K") 
}
//saymyName();


// function addtwoNumber(num1,num2){ // values passed at function definiton is parameter
//     console.log(num1+num2)
// }
// const result = addtwoNumber(2,-9)  //values passed at function calling are called arguments
// console.log(result)

function addtwoNumber(num1,num2){
    // let result = num1+num2
    // return result
    return num1+num2
}
const result2 = addtwoNumber(2,3)
//console.log("Result is:",result2)

function loginUserMessage(username="xyz"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("ritik"))
console.log(loginUserMessage())  // it will give undefined just login not null remember this 