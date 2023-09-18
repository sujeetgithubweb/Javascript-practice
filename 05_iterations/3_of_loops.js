//  for of  

//[{},{},{}]

const arr = [1,2,3,4,5]

for (const mun of arr) {
    //  console.log(mun);
}

const greeting = "Hello world!"
for (const greet of greeting) {
    // console.log(greet);
}

// Maps 

const map = new Map()

map.set('IN', "India")
map.set('FR', "France")
map.set('IN', "India")
map.set('PK', "Pakistan")
map.set('IN', "India")
map.set('IN', "India")
map.set('PK', "Pakistan")

// console.log(map);

for (const [key,value] of map) {
    console.log(key, ':-', value);
}

const myObject1 = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

// for (const [key, value] of myObject1) {
//     console.log(key , value);
// }

