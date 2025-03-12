// *********** Arrow Function ***********

const user = {
  username: "hitesh",
  prices: 199,
  welcomeMessage: function () {
    console.log(`${this.username} says welcome`);
    console.log(this);
    
  }
}
user.welcomeMessage();
user.username = "sam";
user.welcomeMessage();
// Output
// hitesh says welcome
// sam says welcome
// console.log(this);

const chai = () => {
  console.log(this);
}
chai();
// Output
// {}
// Arrow function does not have its own this. It takes this from its parent. In this case, the parent is global object. So, it will print {}.




// const add = (a, b) => { && const add = (a, b) => (a + b);
//   return a + b; if you use curly braces, you have to use return statement.but if you use parentheses, you don't need to use return statement.
// }
// console.log(add(2, 3));
// Output
// 5
// Arrow function with return statement. It will return the sum of two numbers.




//IIFE - Immediately Invoked Function Expression
(() => {
  console.log("IIFE");
})();
// Output
// IIFE
// IIFE is a function that is executed immediately after it is created. It is a design pattern which is also known as Self-Executing Anonymous Function and contains two major parts: 1. Anonymous Function, 2. The () Operator.
// The anonymous function is created and then immediately executed. It is used to avoid polluting the global namespace.









