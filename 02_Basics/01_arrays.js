// ++++++++++++++++ array ++++++++++++++
 const myArr = [0,1,2,3,4,5]
 const myHeros = ["thor", "Ironman", "Superman"]

 const myArr2 = new Array(1,2,3,4,5,5,6)
//  console.log(myArr[0]);

 // Array methods

//  myArr.push(6)
//  myArr.push(7)
//  myArr.push(7)
//  console.log(myArr);
//  myArr.pop()

// myArr.unshift(8)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join()

//  console.log(myArr);
//  console.log(newArr);

// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1,3)

console.log((myn1));
console.log("b ", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log(myArr);