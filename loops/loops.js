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

//MARK: 3. 
console.log('\n\nContinue Statement ', '\n ');
for (let i = 0; i <= 7; i++) {
    if(i === 3){
        console.log('the condition is if i == 3, the code here wil be skipped, meaning i wont be assigned to 3. and code will continue to the next loop and assign i ...');
        continue;
    }
    console.log(i);
}


//MARK: 2. While & do While Loop (old school of doing iterations prefers for each, for in, for which)

/**
 i) while - we put the condition inside the parethesis only, the initialization is done outside the parethesis. The 
    incrementExpression is done inside the {} braces. while loop gives same results as for loop
 */
// console.log('\n\nwhile & do-while ', '\n ');
// let w = 0;
// while(w <= 9) {
//     console.log(w);
//     w++;
// }

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
        continue;
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
        continue;
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