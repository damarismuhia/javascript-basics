/* Naming Conventions - letters, underscores, dollar signs etc
*/
//1. let
let firstName = "john"
let lastName = "bobo"
console.log(firstName, lastName);
//console.log(age) //error
console.log(age2) /*possible due to hoisting with var*/

let age = 30
//2. var - when we create a variable using var, it gets added into the window object
var age2 = 30 
console.log(age);
const language = "English"

//Re-assigning
age = 31
console.log("new age is: ", age);

//3. const - /*const cant be reassigned but when using non-primitive data type eg array, objects you can modify its content*/
const myArray = [1,2,3.5];
myArray.push(7,9) //add to the end of array
console.log(myArray);

//Declare Multiple Variables at once
let a, b, c;
const d= 10, e =20

// 2. Data Type 

const fname = "Dama"
let accountNumber = 7890865665
console.log(fname, accountNumber, typeof fname, typeof accountNumber);

// Mark 3: Primitives & Reference Types
/**
 * 1. Primitives - stored directly in the stack where it is accesses from:: sring | number | boolean | null | undefined | symbol | bigint
 * 2. reference Types - are stored in the heap and accessed by reference:: arrays | functions | objects
 */

//reference stored on the heap
const person = {
    username: 'Damsy',
    email: 'dams@gmail.com'

}
const persion1 = person
console.log(person, persion1);

// Mark 4: Type Conversion

/*Convert string to a number*/
let amount = '100';
amount = parseInt(amount); // parsefloat
amount = +amount; //Unary - new way
amount = Number(amount);
console.log(amount, typeof amount);

/*Convert String to decimal */
amount = parseFloat(amount)
console.log("String to Float", amount)

//NB Converting a alphabetical to a number results to NaN (Not a Number) 

/*Convert number to a string*/
let accountType = 900

accountType = accountType.toString()
accountType = String(accountType)

console.log(accountType, typeof accountType);

/*Convert Number  to boolean */
amount = 1

console.log("String to Float", amount)

// Mark 4.1: Type Coercion - when applying operators to values that have different types
let year;
year = 5 + '4' //concatenate
year = 5 + Number('4') //actual addition
let count = 8 * '4'

console.log("Coercion", year, "Count with mutiply " +count )


// Mark 5: Operators
/*1. Arithemetic*/
let x;
x = 5 * 5
x = 5 % 5
console.log("Operator results is: ", x);

//Concatenation: using +
x = "Hello"+ " " + "world"
console.log("Concatenate:" +x);

//Exponent
x = 2 ** 3 //2 pow 3
let y = 3 ** 2 //3 pow 2
console.log("Exponent:", x , y);

/*2. Asignment Operators*/
x = 10
x %= 5
y **= 4
x *= 7
console.log("Assignment:", x , y);

/*3. Comparison Operators*/
x = 2 == 2, y = 3 == '3' //compares the value 
console.log("Value Comparison:", x , y);

x = 2 === 2, y = 3 ==='3' //compares the type
console.log("Type Comparison:", x , y);

//not equal
x = 2 !== 2


