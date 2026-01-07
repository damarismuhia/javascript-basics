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

/*------------------------MARK 2: Numbers----------------------------------------------*/
const num = new Number(5); // makes it an object, and this logs all the number methods & properties

const numDecimal = num.toFixed(2)
console.log("Convert a number to string rep of decimal point", numDecimal, typeof numDecimal);


const numToPrecision = num.toPrecision(4)
console.log("Returns the specified digits, if the digit is one it will add zeros:", numToPrecision, typeof numToPrecision);

const numToExponetial = num.toExponential(2) //The argument (2) = number of digits after the decimal point
console.log('toExponential Returns a string containing a number represented in exponential notation.', numToExponetial);

console.log(num);

/*------------------------MARK 2: Math Object----------------------------------------------*/
// Contains method such as sqrt, absolute(abs), floor, ceil, round, pow, min, max, random
console.log(Math);
let numX;
numX = Math.sqrt(16)
console.log('Math SQRT using .sqrt: ', numX, 
    `\nAbsolute num, handy when u want to do away with -tives: ${Math.abs(-8)}`);


console.log(`Round number to nearest integer: ${Math.round(5.6)}`,
 `\nRound the number up always using ceil ${Math.ceil(5.2)}`,
`\nRound the number down using floor ${Math.floor(4.9)}`);

console.log(`Power of a number using pow ${Math.pow(2, 3)}`);
console.log(`Get the Min number :${Math.min(4,5,6,2)} and max number is ${Math.max(4,5,6,2)}`);
console.log(`\nRandom decimal btwn 0 and 1 using .random() :${Math.random()}, 
\nTo get a random no btwn 1 to 100, or 100, you need to multiply it by that number eg: ${Math.random() * 1000},
\n To do away with decimacls you can either floor or ceil it, ${Math.floor(Math.random() * 100000)}`);

// Number Challenge
/* Instructions:**

    Create a variable called `x` that is a random number between 1 and 100 along with a variable called `y` that is a random number between 1 and 50.

    Create a variable for the sum, difference, product, quotient and remainder of `x` and `y`. Log the output in a string that shows the two numbers of `x` and `y` along with the operator and result.

    - You can log the output string directly or put them in separate variables and log them like below.
    - You can use string concatenation or template literals for the output.

    **Expected Result:**

    ```JavaScript
    console.log(sumOutput); // 31 + 15 = 46
    console.log(differenceOutput); // 31 - 15 = 16
    console.log(productOutput); // 31 * 15 = 465
    console.log(quotientOutput); // 31 / 15 = 2.066666666666667
    console.log(rmOutput); // 31 % 15 = 1
    ```

    **Hints:**

    1. The `Math.random()` function returns a floating-point, pseudo-random number in the range 0 to less than 1

    2. The `Math.floor()` function will round a number down to the nearest integer
*/

let numChallange = Math.floor(Math.random() * 100 + 1)
let num2Challange = Math.floor(Math.random() * 50 + 1)

let sum = numChallange + num2Challange
let diff = numChallange - num2Challange
let product = numChallange * num2Challange
let quotient = numChallange / num2Challange
let modulo = numChallange % num2Challange
console.log(`\nnum1: ${numChallange},num2: ${num2Challange} 
    \nSummation is ${numChallange} + ${num2Challange}= ${sum}
    \nDifference ${diff}
    \nProduct ${product}
    \nQuotient ${quotient}
    \nModula ${modulo}
    `);

/*------------------------MARK 3: Dates & Times----------------------------------------------*/
let date;
date = new Date()
console.log('Date is:', date, typeof date, 
    `\nTo turn date to a sting we can use .tostring ${date.toString()} type: ${typeof date.toString()}`);



/*/Date(year: number, monthIndex: number, date?: number, hours?: number, minutes?: number, seconds?: number, ms?: number)*/
date = new Date(2021, 7 , 31, 12, 20) //the caveat is that the month is zero index. if u put a 0 in place of month you will get Jan, 7 gives Aug etc
console.log(`\nYou can pass in the specific date into Date obj ${date},
\nOr pass as string(not zero based) ${new Date('2021-07-31T12:30:00')}`); 

console.log('\nTake note of when u use hypen and the year starts, it might be off by a day due to time zones: ', new Date('2022-02-10')
, '\n\nvs when u use hypen and the month starts: ', new Date('02-10-2022'));

/* Timestamps - show a no. of sec that has elapsed since the date of January 1st, 1970.
 Timestamp is expresed in milliseconds*/

 date = Date.now(); //gives us the timestamp
 console.log('Timestamp is', date);
//To get the timestamp of specific date we can use .getTime()/valueOf 
 console.log(`\n\nTo get the timestamp of specific date: ${new Date('01-07-2026').getTime()}`);

 //Convert Timestamp to date
 date = new Date(1767733200000)   
 console.log('Timestamp to date', date);

 // Methods & Date TimeFormat API for Date Object
     
/**
 * 1. .getFullYear(); - gives us the year
 * 2. .getMonth() - month is zero index, so feb give us jan even if u are using date strings, so add a + 1 to get the correct month 
 * 3. .getHours(), .getMinutes(), getSeconds(), .getMilliseconds()
 */
let currentDate = new Date()
let dateFormat = currentDate
let dateOfTheMon = currentDate.getDate(); //1-31
let dayOfTheWeek = currentDate.getDay(); //mon tue
dateFormat = currentDate.getMonth() + 1;

console.log(currentDate, `Date of the mon ${dateOfTheMon}, day of the week ${dayOfTheWeek}`);

/**We can use  intl.date time format api, to format dates in a locale sensitive way*/

dateFormat = Intl.DateTimeFormat('default').format(currentDate) 

console.log("Formated date using Intl: ", dateFormat);
//we can call .toLocaleString on the date object instead of using Intl API
dateFormat = currentDate.toLocaleString('default')
console.log('Formated date using toLocaleString: ', dateFormat);


dateFormat = currentDate.toLocaleString('default', {month: 'short'})
console.log('get month using toLocaleString: ', dateFormat, `\n\nMonth in long form ${currentDate.toLocaleString('default', {month: 'long'})}`);

dateFormat = currentDate.toLocaleString('default', {
    weekday: 'long',
    year: "numeric",
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
     timeZone: 'EAT'
   
}) // Better approach that the above get...();

console.log("Date from each component:", dateFormat);