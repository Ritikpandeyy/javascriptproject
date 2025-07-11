// const user  = {
// username:"ritik",
// price:199,

// welcomeMessage: function(){
//     console.log(`${this.username}  welcome to the website and price is ${this.price}`);
//     console.log(this);  // this will give the current object or we can say that current context

// }
// }
// user.welcomeMessage();
// user.username = "nitin";
// user.welcomeMessage();
// console.log(this);


// function chai(){
//     let username = "ritik";
//     console.log(this.username);// this will give undefinded because this is only used in objects not in functions
// }
// chai();

// const chai = function(){
//     let username = "ritik";
//     console.log(this.username);
// }

const chai = ()=>{ // this is an arrow function
    let username = "ritik";
    console.log(this.username);
}
chai();


// const addTwo = (num1,num2)=>{
//     return num1+num2;
// }



// const addTwo = (num1,num2)=> num1+num2;  // this is a single line arrow function 
// const addTHree = (num1,num2,num3)=>(num1+num2+num3) // this is also valid until we are not using curly breaces if we use curly braces then we have to ues return keyword


const addTwo = (num1,num2)=>({username:"ritik"})
console.log(addTwo(4,3));