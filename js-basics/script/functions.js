/*------------------------MARK 1: Functions Basics----------------------------------------------*/
//1. Function Declaration
function sayHello(name, loc) { //when u declare an function, we pass in params, we use return when a func returns
    return `\n\nFunctions: Hello Javascript ${name} from ${loc}` 
}
const result = sayHello('Brook', 'Kinshasha') //when calling a function we pass in arguments
console.log( result);

    //1b Function Expressions - func assigned to a variable
    const addDollarSign = function () {
        console.log('\nFunc expression');
    }
    addDollarSign()

    //1c. Arrow function - doesnt require function keyword, uses => after parenthesis eg or 
    const subsctract = (a, b) => {
        return a - b
    } 
    console.log('Arrow function: ', subsctract(7, 4));

        //1c i) Implicit return
        const subsctracts = (a, b) => a-b
        console.log('Implicit return', subsctracts(84.9, 8));

        //1c ii) can leave off () with single param
        const double = a => a * 5
        console.log('no parethesis: ', double(8));

        //1c iv) Arrow func in a callback - closure
        
    //1d Returning an object - curry braces with parathesis ({object})
    const createObj = () => ({name: 'Brooks Doe'} )
    console.log('Retuning an objc syntax: => ({}): ', createObj());

//2. Params & Arguments
    //a). default params
function register(user = 'Botay'){
    return user + ' is registered successfully'
}
console.log('We just use return when we want a func to return', register('Brooks'));

    //b) Objects as params
function loginUser(bankUser){
    return `The user ${bankUser.firstname} with phone number ${bankUser.phone} is logged in`
}
console.log(loginUser({firstname: 'Doe',phone: '254718194920'}));

    //c) Array as params
function getRandomNumber(items) {
    const randomIndex = Math.floor(Math.random() * items.length)
    return `Random Number from items array is ${items[randomIndex]} at random index: ${randomIndex}`
}
console.log(getRandomNumber([9,90,23,78,9,6,0,4,67]));

   //d) Rest Params - you can pass in unlimited no of args using spread opererator and this will be converted into an array
   function addition(...numbers){
    let total = 0
    for (const num of numbers) {
        total += num;
    }
    return total;
   }
   console.log(addition(1,2,3,7,8));

//3. Blocked Scope
if (true){
    var myVar = '\nVar is function scoped but not block scoped and can be accessed outside this block- loop/if statement etc'
}
console.log(myVar);


/**************************** - IIFE Immediately Invoked Function Expressions- *********************************/
/**
 * IIFE - allow us to declare and invoke a function immediately: syntax---> (function () {})()
 */
(function () {
    const customerName = 'Joe Brooks'
    console.log('IIFE syntax: (function () {})() :', customerName);
})();

//IIFE with params
(function (name) {
    console.log('Hello I am IIFE with params and ' + name);
})("Brook\'s Son");

//or
((parama) => {
//func body
})('Params IIFE')

/**************************** - Function Challange- *********************************/
//Challenge 1

/**Instructions:**

- Create a function called `getCelsius()` that takes a temperature in Fahrenheit as an argument and returns the temperature in celsius.
- For bonus points, write it as a one line arrow function
- You can make the output look prettier by putting it into a string. You can even add `\xB0` (degrees) and a `C` in front of the celsius temperature.
- The formula for Fahrenheit to Celsius is `(F - 32) * 5 / 9`.Read more about the formula [here](https://www.cuemath.com/fahrenheit-to-celsius-formula/) if needed.
*/

const getCelsius = (fahrenheit) => (fahrenheit -32) * 5 / 9
console.log('The Temperature is ', getCelsius(89).toFixed(2),`\xB0C`);

//Challenge 2
/**Instructions:**
- Create an arrow function called `minMax()` that takes in an array of numbers 
    and returns an object with the minimum and maximum numbers in the array.
*/
const minMax = (arrNums) => ({
    min: Math.min(...arrNums), 
    max: Math.max(...arrNums)
})
console.log(...[3,4,9,0,8,98,99]);
console.log('Func that takes in array and return object', minMax([3,4,9,0,8,98,99]));

// Challenge 3

/**
  Create an IIFE (Immediately Invoked Function Expression) that takes in the length and width 
  of a rectangle outputs it to the console in a message as soon as the page loads.*/

(function (length, width){
    console.log(`Area of the rctangle is: ${length * width}`,"Length is: ", length, 'and width is:', width);
})(40, 97);

        //or 

((length, width)=>{console.log('Area is:', length * width);})(30, 89)
