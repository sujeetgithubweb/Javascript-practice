const name = "sujeet"  // we should not use valriablename as a name because it's depricated 
const repoCount = 40

// console.log(name + repoCount + " Value")

// we should always string interpoletion 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Sujeet');

// console.log(gameName[0]);
// console.log(gameName.__protp__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName);
//  console.log(gameName.charAt(2));
//  console.log(gameName.indexOf("t"));

 const newString = gameName.substring(0,4)
//  console.log(newString);

 const anotherString = gameName.slice(-1, 4)// not working properly
//  console.log(anotherString);

 const newStringOne = "     sujeet     "
//  console.log(newStringOne);
//  console.log(newStringOne.trim());

 const url = "https://sujeet.cpm/sujeet%20kumar"
//  console.log(url.replace('%20',"_"));

//  console.log(url.includes('ji'));

//  console.log(gameName.split(''));

 /* 
 length
 Accessing characters in a string
 toUpperCase()
 toLowerCase()
 substr(): It takes two arguments, the starting index and number of characters to slice.
 substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
 split(): The split method splits a string at a specified place.
 trim(): Removes trailing space in the beginning or the end of a string.
 includes(): It takes a substring argument and it checks if 
 replace(): takes as a parameter the old substring and a new substring.
 charAt(): Takes index and it returns the value at that index
charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
concat(): it takes many substrings and joins them.
startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false)
endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
repeat(): it takes a number as argument and it returns the repeated version of the string.
 
 */