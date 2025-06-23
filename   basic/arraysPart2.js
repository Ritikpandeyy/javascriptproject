const marvelHeroes = ["thor","Ironman","spiderman"]
const dcHeroes =["superman","batman","flash"]

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes[3][2])


// const combinedArr = marvelHeroes.concat(dcHeroes)
// console.log(combinedArr)

// const allnewHeroes = [...marvelHeroes,...dcHeroes]
// console.log(allnewHeroes)

const anotherArray = [1,3,4,[4,5,6],[5,6,[7,8]]]
 const realanotherArray = anotherArray.flat(Infinity)
 console.log(realanotherArray)