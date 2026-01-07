/*------------------------MARK 1: Strings----------------------------------------------*/
let z;
let compute;
const customerName = "Brook Dams"

//Concatenation

//1. using a + sign
z = 'Hello My name is ' + customerName

//2. using template literals - `${variable name}`
z = `Hello, My new name is ${customerName}.`
compute = `The sum of 7 and 8 is ${7 + 8}`

console.log(z, ` Summation- ${compute}`);

//Mark 2: String Properties and Methods
const myString = "Hello world"
const stringOutput = myString.length
console.log(`string count is ${stringOutput}`);

//Access value of a string
console.log(`To access a string value u can use its index, eg myString[1] gives us: ${myString[0]}`);
console.log(`To access a string value u can use charAt(given index), eg myString.charAt(0) gives us: ${myString.charAt(0)}`);
console.log(`To get the index of a charcter, we can use myString.indexOf('H') gives us: ${myString.indexOf('H')}`); 


/*To access all the method that can be applied to a string we can use a prototype.
  A string is converted to an object under the hood and objects has prototype where the methods are stored.*/

let stringMethods = myString.__proto__;

let substring = myString.substring(0, 4)
console.log("String Methods: ", stringMethods, '\nTo substring a string- search a string for a specified value we use .substring(0, 4) with start and end index:', 
    substring);

console.log('Slice returns a section of string from the end to the start(reverse order):', myString.slice(-11, 6));

//trim() - remove whitespace(start and end)
//replace("old", new)
//includes("text to check")

/*split - split a string into an array, you can use delimeters to split
 or if u wanna split every char into an item array, just use quotes without space: split('')*/
let slittedArray = myString.split(' ')
console.log("Splited string output is", slittedArray);


//Mark Challange - Capitalize First letter of the word
const title = 'developer';
let uppercasedLetter = title.charAt(0).toUpperCase()
console.log("Capitalied first letter", uppercasedLetter + title.substring(1),);

/*------------------------MARK: Numbers----------------------------------------------*/


