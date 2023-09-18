// for 

// for (let index = 0; index <= 10; index++) {
//     const element = index
//     console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//     const element = i
//     if (element == 6) {
//         console.log("reached 6");
//     }
//     console.log(element);
// }

// for (let i = 2; i <= 20; i++) {
//     console.log(`table of ${i}`);
//     for (let j = 1; j <= 10; j++) {
//         console.log(` ${i} * ${j} = ${i*j}`);        
//     }
// }

// let MyArray = ["a",'b','c','d','e']

// for (let i = 0; i < MyArray.length; i++) {
//     const element = MyArray[i];
//     console.log(element);
// }

// break and continue

// for (let index = 0; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected ${index}`);
//         break
//     }
//     console.log(`value of i is ${index}`);    
// }
for (let index = 0; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected ${index}`);
        continue
    }
    console.log(`value of i is ${index}`);    
}