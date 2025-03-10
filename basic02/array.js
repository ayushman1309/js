//array
// const myArr = [0,1,2,3,4,5,6]

// const name = ["Xyz" , "Abc"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);


// // Array Method
// myArr.push(7)
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(6));
// console.log(myArr.indexOf(9));

// console.log(myArr.lastIndexOf(9));
// console.log(myArr.join("-"));
// console.log(myArr);
// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);

// slice, splice

// console.log("A",myArr);
// const myn1 = myArr.slice(1 , 3)
// console.log(myn1);

// console.log("B",myArr);

// const myn2 = myArr.splice(1 , 3)
// console.log("C" , myArr);
// console.log(myn2);

const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc = ["Superman" , "Batman" , "Wonderwoman"]
marvel_heros.push(dc)
// console.log(marvel_heros);

// // console.log(marvel_heros[3][1]);

// const all_heros = marvel_heros.concat(dc)
// console.log(all_heros);
const all_new_heros = [...marvel_heros , ...dc] 
console.log(all_new_heros);






