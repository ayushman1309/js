const coding = ['js','py','java','c','c++','ruby','php'];

const values = coding.forEach( (item, index) => {
    // console.log(`index is : ${index} and value is : ${item}`);
}
)
// console.log(values); //undefined

// const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.filter( (item) => item > 5);
// console.log(newNums); //[ 6, 7, 8, 9, 10 ]
// con

// const myNums = [1,2,3,4,5,6,7,8,9,10];
// const newNums = myNums.map( (item) => { return item * 2});//{scope}(without return)
// console.log(newNums); //[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]

// const newNums = myNums
//     .map( (item) => item * 2)
//     //.map( (item) => item > 10);
//     .filter( (item) => item > 10);
// console.log(newNums); //[ 12, 14, 16, 18, 20 ]//onlny the values greater than 10
//console.log(newNums); //when using map, it will return an array of boolean values
// [ false, false, false, false, false, true, true, true, true, true ]

//Acumulator 

// const myNums = [1,2,3,4,5,6,7,8,9,10];
// const myTotal = myNums.reduce( (acc, item) => {
//     if (item > 5) {
//         console.log(`acc is : ${acc} and item is : ${item}`);
//         return acc + item;
//     }
//     return acc;
// }, 0);
// console.log(myTotal);//55

const shoppingCart = [
    {
        product: 'phone',
        qty: 1,
        price: 699
    },
    {
        product: 'Screen Protector',
        qty: 1,
        price: 9.98
    },
    {
        product: 'Ear Buds',
        qty: 1,
        price: 20
    },
    {
        product: 'Memory Card',
        qty: 2,
        price: 20.99
    },
];

const totalPrice = shoppingCart.reduce((acc,item) => acc + item.price, 0)

console.log(totalPrice); //699
