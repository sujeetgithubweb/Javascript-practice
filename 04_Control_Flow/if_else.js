// if
// const isUserLoggedIn = true
// const temperature = 41

// if (temperature == 50) {
//     console.log("less then 41");
// } else {
//     console.log(" greater the 41");
// }

// < , > , <= , >= , == , != , === , !==

// const score = 200

// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`);
// }

// short hand notation

// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2"); not a good way

// if (balance < 500) {
//     console.log("less then");
// } else if (balance < 750) {
//     console.log("less the 750");
// } else if (balance < 1200) {
//     console.log("less then 1200");
// }


const userLoggedIn = true 
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in");
}

