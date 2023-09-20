const myNums = [1, 2, 3];

// const myTotal = myNums.reduce(function (acc , currval) {
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);
// console.log(myTotal);

const shoppingCart = [
  { itemName: "js couse", price: 2999 },
  { itemName: "py couse", price: 999 },
  { itemName: "mobile dev couse", price: 12999 },
  { itemName: "cpp couse", price: 2999 },
  { itemName: "dsa couse", price: 5999 },
];

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(priceToPay);
  