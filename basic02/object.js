// Singleton

// Object literal
// const mySyum = Symbol("key1");

// const jsUser = {
//   name: 'Mike',
//   age: 30,
//   location: 'USA',
//   email: 'xyz@gmail.com',
//   isLoggedIn: false,
// };

// console.log(jsUser.name);
// console.log(jsUser.age);
// console.log(jsUser.location);
// console.log(jsUser.email);
// console.log(jsUser.isLoggedIn);
// jsUser.email = 'jhdsjhd@gmail.com';
// console.log(jsUser.email);

// // console.log(jsUser[mySyum]);
// jsUser.greeting = function() {
//   console.log('Hello',`${this.name}`,`${this.age}`);
//   //return 'Hello';
// }
// console.log(jsUser.greeting());

//lecture 17
// const tinderUser = new Object();
// tinderUser,id = 1;
// tinderUser.name = 'Mike';
// tinderUser.age = 30;
// tinderUser.location = 'USA';
// tinderUser.email = 'xyz@g.com';
// tinderUser.isLoggedIn = false;
// console.log(tinderUser);

// // const reglUser = {
// //   email: 'jdjfi@g.com',
//   fullname: {
//     userfullname: {
//       firstname: 'Mike',
//       lastname: 'Smith',
//     }
//   }
// }
// console.log(reglUser.fullname.userfullname.firstname.toUpperCase());
// console.log(reglUser.fullname.userfullname.lastname.toUpperCase());

// const obj1 = {1: 'a', 2: 'b', 3: 'c'};
// const obj2 = {4: 'd', 5: 'e', 6: 'f'};
// const obj3 = {obj1, obj2};
// console.log(obj3);
// const obj3 = Object.assign({},obj1, obj2);
// console.log(obj3);

// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// const users = [
//   {
//     id: 1,
//     name: 'Mike',
//     age: 30,
//     location: 'USA',
//     // email: '
//   }
// ]

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));



//lecture 18

const course = {
  title: 'JS',
  price: 100,
}
// }
// course.price = 200;

// const {title, price} = course;
// console.log(title, price);

// const {title: courseTitle, price: coursePrice} = course;
// console.log(courseTitle, coursePrice);

// {
//   "name": "Mike",
//   "age": 30,
//   "location": "USA",
// }
