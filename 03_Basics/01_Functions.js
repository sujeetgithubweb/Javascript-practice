function SayMyName() {
    console.log("S");
    console.log("U");
    console.log("J");
    console.log("E");
    console.log("E");
    console.log("T");
}

// SayMyName();

// function addTwoNumbers(Number1, Number2){

//     console.log(Number1 + Number2);
// }

function addTwoNumbers(Number1, Number2){
    
    // console.log(Number1 + Number2);
    //  let result = Number1 + Number2
    //  return result
    return Number1 + Number2
}

 const result = addTwoNumbers(5, 3)

//  console.log("Result: ", result);

// function loginUserMessage(username) {
function loginUserMessage(username = "Sujee"){  
    // if (username === undefined) {
    // if ("") {    *** empty value represent false value
    // if (undefined) {    *** undefined represent false value
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// loginUserMessage("Sujeet")
// console.log(loginUserMessage("Sujeet"));
// console.log(loginUserMessage());

// function calculateCartPrice(...num1) {
function calculateCartPrice(val1, val2, ...num1) {

    return num1;
}

// console.log(calculateCartPrice(200, 300, 400,500, 600));

const user = {
    username : "Sujeet",
    price: 999
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price }`);
}

// handleObject(user);
handleObject({
    username: "ssjsins",
    price: 3424
})

const myNewArray = [2200, 3383, 333, 333]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 40000, 500]));
