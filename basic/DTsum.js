// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);






//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//stack(primitive)  ,   Heap(Non-Primitive)

let myName = "AYUSHMAN"
anothername = myName

anothername = "PATHAK"

console.log(myName);
console.log(anothername);

let userone = {
  email: "xyz@google.com",

  upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "ayush@google.com"

console.log(userone.email);

console.log(usertwo.email);






