let val1 = 10
let val2 = 20
function addNum(num1, num2) {
  let total = num1 + num2
  return total//total is return to global execution context
}
let result = addNum(val1, val2)
let result2 = addNum(30, 40)
console.log(result)
// Output
// 30
// The function addNum takes two arguments and returns the sum of two numbers. The function is called with two variables val1 and val2. The sum of val1 and val2 is 30. So, the output will be 30.
console.log(result2)
// Output
// 70
// The function addNum is called with two numbers 30 and 40. The sum of 30 and 40 is 70. So, the output will be 70.
