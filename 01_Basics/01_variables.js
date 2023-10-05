const accountId = 12233
let accountEmail = "sujeet@gmail.com"
var accountPassword ="12345"
accountCity = "Pune" // not good practice to create variale
let accountState;
let classes = "";

// accountId = 2 // not allowed

accountEmail = "hc@ksvgmail.com"
accountPassword = "1212121"
accountCity = "delhi" // not good practice to create variale

/*   
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Variables
Variables are containers of data. Variables are used to store data in a memory location. When a variable is declared, a memory location is reserved. When a variable is assigned to a value (data), the memory space will be filled with that data. To declare a variable, we use var, let, or const keywords.

For a variable that changes at a different time, we use let. If the data does not change at all, we use const. For example, PI, country name, gravity do not change, and we can use const. We will not use var in this challenge and I don't recommend you to use it. It is error prone way of declaring variable it has lots of leak. We will talk more about var, let, and const in detail in other sections (scope). For now, the above explanation is enough.

A valid JavaScript variable name must follow the following rules:

A JavaScript variable name should not begin with a number.
A JavaScript variable name does not allow special characters except dollar sign and underscore.
A JavaScript variable name follows a camelCase convention.
A JavaScript variable name should not have space between words.
The following are examples of valid JavaScript variables.

firstName
lastName
country
city
capitalCity
age
isMarried

first_name
last_name
is_married
capital_city

num1
num_1
_num_1
$num1
year2020
year_2020
The first and second variables on the list follows the camelCase convention of declaring in JavaScript. In this material, we will use camelCase variables(camelWithOneHump). We use CamelCase(CamelWithTwoHump) to declare classes, we will discuss about classes and objects in other section.

Example of invalid variables:

  first-name
  1_num
  num_#_1


  Exercises

  Declare four variables without assigning values

1- Declare four variables with assigned values

2- Declare variables to store your first name, last name, marital status, country and age in multiple lines

3- Declare variables to store your first name, last name, marital status, country and age in a single line

4- Declare two variables myAge and yourAge and assign them initial values and log to the browser console.
*/