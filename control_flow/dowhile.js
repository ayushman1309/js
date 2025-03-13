// *******************DO WHILE LOOP*******************
// The do while loop is similar to the while loop with one key difference. The condition is evaluated after the loop has executed. This means that the loop will always execute
// the body at least once. The syntax for the do while loop is:
// do {
//   // code block to be executed
// } while (condition);
//
// Example: 
// let i = 0;
// do { 
//   console.log(i);
//   i++; 
// } while (i < 5);
// In this example, the loop will execute
// 5 times and print the numbers 0 to 4 to the console.

// while(true){
//     console.log("Hello World");
//     break
// }
// Output
// Hello World
let array = ['a', 'b', 'c', 'd', 'e'];
let arr = 0;
while(arr < array.length){
    console.log(`values is : ${array[arr]}`);
    arr++;
}

