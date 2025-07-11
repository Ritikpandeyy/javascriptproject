// // const userEmail = "ritik@gmail.com"
// // if(userEmail){
// //     console.log("got the Email");
// // }
// // else{
// //     console.log("don't have user email");
// // }

// //. falsy values = false,0,"",null ,-0,BIgInt Undefined,Nan
// // truthy values = true,1, [],{},"0",'false',function(){},-1


// const myArray = [];
// if(myArray.length===0){
//     console.log("array is empty")
// }
// else{
//     console.log("array is not empty");
// }


// const emytyObj = {}
// if(Object.keys(emptyObj.length===0)){
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??) :null or undefined
let val1;
val1 = 5??4;
console.log(val1);

val1 = null??4;
console.log(val1);


// ternary operator

// condition ? expressionIfTrue: exprsesionIfFalse
const price = 199;
price>=90?console.log("price is greather than 90"):console.log("price is less than 90");