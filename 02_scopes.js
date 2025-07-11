// function one(){
//     const username = "Ritik";
//     function two(){
//         const website = "youtube.com:";
//         console.log(username);
//     }
//     //console.log(website);
//     two();
// }
// one();

// if(true){
//     const username = "ritik";
//     if(username==="ritik"){
//         const website = "youtube";
//         console.log(`username is ${username} and webisite is ${website}`);
//     }
//     //console.log(website);
// }
//console.log(username);

///+++++++++++++ interesting part +++++++++++++
console.log(addoOne(5));
function addoOne(num){
    return num+1;
}

console.log(addTwo(5));
// this will give an error because addTwo is not hoisted
const addTwo = function(num){
    return num+2;
}