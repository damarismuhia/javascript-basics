//MARK: 1. For Loop

/**
 * Syntax:
 
 for([initialExpression]; [conditionExpression]; [incrementExpression]){
    statement;
 }

 * 
 * 1. initialExpression - initializes a variale/counter
 * 2. conditionExpression - condition that the loop will continue to run as long as it is met until the condition is false
 * 3. incrementExpression - Expression that will be executed after each iteration of the loop. Usually increments the variable
 * 4. Statement - code that will be executed each time the loop is run
 */

for(let i = 0; i <= 5; i++) {
    if(i === 4) {
        console.log('4 is my lucky number');
    }else {
        console.log('Number ' + i );
    }
}
//i. nested loops
console.log('\n\n Nested For Loops ', '\n ');
for (let i=0; i <= 3; i++){
    console.log('\n\nNumber ' + i);

    for (let j=0; j <= 2; j++){
        console.log(`${i} * ${j} = ` , i * j);
    }
}

//ii) loop thru an array but foreach is much common for array than for loop
console.log('\n\n For Loop with Arrays ', '\n ');
const names = ['Brooks', 'Doe', 'Tim', 'Jerry']
for(let index = 0; index < names.length; index++){
    console.log(`Names at index ${index}: `+ names[index]);
}


//MARK: 2. Break & Continue Statements

/**
 * We use break when u want to terminate a loop once a certain condition is met, so when i is set to 4, the code will stop executing
 * It Stops the entire loop immediately. */
console.log('\n\nBreak Statement ', '\n ');
for (let i = 0; i <= 50; i++) {
    if(i === 4){
        console.log('Breaking...');
        break;
    }
    console.log(i);
}

/**
 * Continue: Skips the current iteration of the loop and moves to the next iteration.
    The loop keeps running, but the code after continue inside the loop for that iteration is ignored. meaning i wont be set to 3
 * 
    With break, the rest of code stops executing once the condition is met, 
    with Continue, it skips that specific code and continue to execute the rest. eg, skip inactive users*/

 
console.log('\n\nContinue Statement ', '\n ');
for (let i = 0; i <= 7; i++) {
    if(i === 3){
        console.log('the condition is if i == 3, the code here wil be skipped, meaning i wont be assigned to 3. and code will continue to the next loop and assign i ...');
        continue;
    }
    console.log(i);
}


//MARK: 3. While & do While Loop (old school of doing iterations prefers for each, for in, for which)

/**
 i) while - we put the condition inside the parethesis only, the initialization is done outside the parethesis. The 
    incrementExpression is done inside the {} braces. while loop gives same results as for loop
 */
// console.log('\n\nwhile & do-while ', '\n ');
let w = 0;
while(w <= 9) {
    console.log(w);
    w++;
}

/**
 ii) do while loop will always run at least once, even if the condition is false.
 */
// do {
//     //code to run
//     console.log('do while:', w);
// }while(w<=3);


//Challange

/**
 * # FizzBuzz Challenge
  One of the most common challenges is the FizzBuzz challenge. 
  This has to do with loops and conditionals

**Instructions:**

- Print/log the numbers from 1 to 100
- For **multiples of three** print "Fizz" instead of the number
- For **multiples of five** print "Buzz"
- For numbers which are **multiples of both three and five** print "FizzBuzz".
 */

for(let i = 1; i <= 20; i++){
    if(i % 15 == 0) {
        console.log('FizzBuzz');
    }else if(i % 3 === 0){
        console.log('Fizz');
    }else if(i % 5 === 0) {
       console.log('Buzz'); 
    }else {
        console.log(i);
    }
    
}

//using while
let j = 0;
while(j <= 10){
    if(j % 15 == 0) {
        console.log('FizzBuzz');
    }else if(j % 3 === 0){
        console.log('Fizz');
        
    }else if(j % 5 === 0) {
       console.log('Buzz'); 
    }else {
       console.log(j);
    }
    j++
}


/**RULE: 

for loop → use when you know how many times you want to repeat something.

while loop → use when the number of repetitions is unknown and depends on some condition. */


//MARK: 4. For of Loop - cleaner way to loop thru an array than a standard for, while loop

console.log('\n\n For of Loop -- for(const item of arrayItems) -- ', '\n ');
const items = ['book', 'chair', 'table', 'pen', 'pencil', 'water bottle']
for(const item of items){
    console.log(item);
}

    //4.1 Loop thru a strings
    const str = 'For-of-loop'
    for(const letter of str) {
        console.log(letter);
    }

    //4.2 Loop over maps
    console.log('\n\n Loop over maps: ', '\n ');
    const map = new Map()
    map.set('name', 'Amir Brook')
    map.set('age', '22')

    for (const [key, value] of map){
        console.log(key, value);
    }

//MARK: 5. For in Loop - loop thru an object's values or array
console.log('\n\nFor-in Loop -- returns the key/index but for-of loop returns the actual value -- ', '\n ');

const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'black'
}
for (const key in colorObj){
    console.log(key , `is ${colorObj[key]}`);
}

//with array - notice this returns the index
const colorArray = ['red', 'black','maroon']
for (index in colorArray){
    console.log('Color at index', index , `: ${colorArray[index]}`);
}

//MARK: 6. High-Order Array methods
    console.log('\n\nHigh-Order function', '\n ');
    const socials = ['Twitter', 'Linkedin', 'Facebook', 'Instagram']
    console.log(socials.__proto__);

    //a) Array.forEach(callbackfn: (value: string, index: number, array: string[]) => void, thisArg?: any): void

    /*  the callbackfn A function that accepts up to three arguments. 
        - forEach calls the callbackfn function one time for each element in the array.*/
    console.log('\n\n.foreach takes in a callback function and doesnt retuen any value:'
        ,'||\n socials.forEach((item, index, array)=> console.log(item));');

    socials.forEach(function execute (item, index, array) {
        console.log( item , `at index: `, index);
    })

    //i) Passing Named function rather than anonymous function, socials.forEach(logSocials) 
    function logSocials(item) {
        console.log(item);
    }
    socials.forEach(logSocials)

    //ii) forEach with array of objects
    const customerData = [
        {'customerName': 'Brook Mayor', 'phoneNumber': '254718194920'},
        {'customerName': 'Toe Tap Mayor', 'phoneNumber': '2547111231420'}
    ]
    customerData.forEach((item) => console.log(item));

//Mark: b) Array.filter()
console.log('\n\n.filter() takes in a callback function: and returns the modified data');
const filteredData = customerData.filter((item, index, array) => item.customerName.startsWith('T'))
console.log(filteredData);

//Mark: b) Array.map()
console.log('\n\n.map() takes in a callback function with params: and returns the modified data');
const int = [1, 2, 3, 5, 6]
const finalMappedInt = int.map((number) => number * 9 + '')
console.log(finalMappedInt);

    //b i) create an array of company names from companies array
   var companies = [
    {
        id: 1,
        name: "BokPay Ltd",
        industry: "FinTech",
        employees: 120,
        country: "Kenya",
        isActive: true
    },
    {
        id: 2,
        name: "EcoSoft Solutions",
        industry: "Software",
        employees: 45,
        country: "Uganda",
        isActive: true
    },
    {
        id: 3,
        name: "HealthPlus Africa",
        industry: "HealthTech",
        employees: 200,
        country: "Rwanda",
        isActive: false
    },
    {
        id: 4,
        name: "AgroLink Systems",
        industry: "AgriTech",
        employees: 78,
        country: "Tanzania",
        isActive: true
    }
    ];

    //array of company names
    const companyNames = companies.map((company) => company.name)
    console.log(companyNames);

    //An array of object with company and industry
    const companyCategory = companies.map((company) =>  {
       return {
            company: company.name,
            industry: company.industry
        };
    });
    console.log(companyCategory);

    //Chain Map Methods
    const squareNDouble = int
        .map((number) => Math.floor(Math.sqrt(number)))
        .map((sqredNumber) => sqredNumber * 3)
        .filter(function (value) {
            return value % 2 === 0
        })
    console.log(squareNDouble);

//mark 3. reduce - previousValue,accumulator, current value
const totalEmployees = companies.reduce( 
    function(accumulator, companyObj) {
        return accumulator + companyObj.employees
    },0//initialValue
)
console.log('\n\n .reduce(): ', 'Total Employees: ', totalEmployees);

/**
 * # Array Method Challenges

## Challenge 1

**Instructions:**
Take the `people` array and create an array called `youngPeople` 
that stores objects with ONLY `name` and `email` properties of all the people that are 25 and under.
 The `name` property should have their first and last name.
 */
const people = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@gmail.com',
    phone: '111-111-1111',
    age: 30,
  },
  {
    firstName: 'Jane',
    lastName: 'Poe',
    email: 'jane@gmail.com',
    phone: '222-222-2222',
    age: 25,
  },
  {
    firstName: 'Bob',
    lastName: 'Foe',
    email: 'bob@gmail.com',
    phone: '333-333-3333',
    age: 45,
  },
  {
    firstName: 'Sara',
    lastName: 'Soe',
    email: 'Sara@gmail.com',
    phone: '444-444-4444',
    age: 19,
  },
  {
    firstName: 'Jose',
    lastName: 'Koe',
    email: 'jose@gmail.com',
    phone: '555-555-5555',
    age: 23,
  },
];

const youngPeople = people
.filter((objc) => objc.age <= 25)
.map((obj) => {
    return {
        name: `${obj.firstName} ${obj.lastName}`,
        email: obj.email
    }
});


console.log(youngPeople);

/**
 * ## Challenge 2

**Instructions:**

Add all of the positive numbers in the array.

 */
const nums = [2, -30, 50, 20, -12, -9, 7];
const positiveNums = nums
.filter((num) => num > 0)
