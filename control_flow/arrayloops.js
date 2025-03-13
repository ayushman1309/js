// Array Loops

// for of loop
// for in loop
// forEach loop
// map loop
// filter loop
// reduce loop
// find loop
// findIndex loop
// some loop
// every loop 
// includes loop
// indexOf loop
// lastIndexOf loop
// join loop  

// *******************FOR OF LOOP*******************
// The for of loop is used to iterate over the elements of an array. The syntax for the for of loop is:

// const arr = ['a', 'b', 'c', 'd', 'e'];
// for(const element of arr){
//     console.log(`value is : ${element}`);
// }
// Output
// value is : a
// value is : b 
// value is : c
// value is : d
// value is : e

// *******************FOR IN LOOP*******************
// The for in loop is used to iterate over the properties of an object. The syntax for the for in loop is:
// let index = 1;
// for(const index in arr){
//     console.log(`index is : ${index}`);
// }

// maps   - key value pair
// set    - unique values

const map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.location = 'USA';
map.set('job', 'developer');
map.set('salary', 10000);
map.set('company', 'Google');
console.log(map);

for(const [key, value] of map){
    console.log(`key is : ${key} and value is : ${value}`);
}
