const coding = ["js","ruby","java","python","C++"]

// coding.forEach( function (val) {
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )


// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item,index,arr);
// })

 const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "jave",
        languageFileName: "jv"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
 ]

 myCoding.forEach( (item)=> {
    console.log(item.languageName);
 } )