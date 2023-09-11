 const user = {
    username: "sujeet",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
 }

//  user.welcomeMessage()
//  user.username = "saam"
//  user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "sujeer"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "sujeer"
//     console.log(this.username);
//     console.log("hi");
// }
// chai()
  
const chai = () => {
    let username = "sujeer"
    console.log(this.username);
    console.log("hi");
}
// chai()


// () => {}

// const addTwo = (num1,num2) => {
//     return num1 + num2
// }

// const addTwo = (num1,num2) => num1 + num2

// const addTwo = (num1,num2) => (num1 + num2) // iplecit return

const addTwo = (num1,num2) => ({username: "sujeeeeeee"})

console.log(addTwo(3,4));