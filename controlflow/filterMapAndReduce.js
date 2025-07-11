// const coding = ["js","c++","java","python"]

// const values = coding.forEach((item)=>{
//     console.log(item)
// })
// console.log(values) // undefined because forEach does not return anything

// const Mynums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = Mynums.filter( (num) =>{
//     return num>4;
// })


// const myNumber = [1,2,3,4,5,6,7]
//  const newNums = myNumber.map((num)=> num+10)
//  console.log(newNums)

 const myArray = [10,20,30,40,50]
 const newNums = myArray.map((num)=>num*10).map((num)=>num+1)
 console.log(newNums)
                        