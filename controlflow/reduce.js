const myNums = [1,2,3,5,6,7,8,]
myNums.reduce(function(acc,currValue){
    console.log(`acc is ${acc} and currValue is ${currValue}`);
    return acc+currValue;
},0)// 0 is the initial value of acc

const mytotal = myNums.reduce((acc,currValue)=>acc+currValue,0);
console.log(mytotal)