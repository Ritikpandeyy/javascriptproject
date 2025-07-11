// const greeting = "Hello world!";
// for(const greet of greeting){
//     console.log(`Each character is ${greet}`);
// }

// //maps
// const map = new Map();
// map.set('IN',"India");
// map.set('US',"United States");
// console.log(map)

// const myObject = {
//     js:"javascript",
//     cpp:"C++",
//     rb:"Ruby",
//     swift:"Swift by apple"
// }
// for (const key in myObject) {
//     console.log(myObject[key]);
// }

// const coding = ["js","cpp","rb","swift"];
// coding.forEach(function(item){
//     console.log(`Each item is ${item}`);
// })
// coding.forEach( (item)=>{
// console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

const mycoding = [
    {
    languaneName:"javascript",
    price:200
    },
    {
    languaneName:"java",
    price:  300
    },
    {
    languaneName:"C++",
    price:800
    },
]
mycoding.forEach((item)=>{
    console.log(item.languaneName);
})