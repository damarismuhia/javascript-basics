function calculator(num1, num2, operator) {
    switch(operator) {
        case '+':
            return num1 + num2
        case '-': 
            return num1 - num2 
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return 'Not recognized'
    }
}

console.log('Switch Statement results:', calculator(40, 8, '*'));

/** Falsy Values
 * 1. false
 * 2. 0
 * 3. '' (empty string)
 * 4. null
 * 5. undefined
 * 6. Nan
 * 
 */
const testValue = null
if (testValue) {
    console.log('This is truthy');
}else {
    console.log('This is falsy');
}

/**
 * Truthy Values
 * 1. true
 * 2. '0' (0 in a string)
 * 3. 'false' (false in a string)
 * 4. ' ' (space in a string)
 * 5. [] - empty array
 * 6. {} - empty obj
 * 7. function () {} - empty function
 * 
 */

//Mark: Truthy and falsy caveats
const children = 0; //0 is falsy value

if(!isNaN(children)){
    console.log(`You have ${children} children`); //to get here when children is 0, we can use children != undefined, !isNaN(children)
}else {
    console.log('Please enter number of children, the current no of children is: ', children);
}

//Mark: Checking for empty arrays - rem empty array is truthy, to check for empty array we can use array.lenghh

const posts = []
if(posts.length > 0) {
    console.log('List Posts');
}else {
    console.log('No Posts to List');
}

//Mark:: Check for empty object - use object keys(gives array) then access the .lenght property
const userObj = {}
if(Object.keys(userObj).length > 0) {
    console.log('object is not empty');
}else {
     console.log('object is empty');
}

//Mark: Loose equality (==), eg comparing empty scape to 0, false to 0, null to undefined gives u true ; so better use (===)
console.log('compare false to 0 gives us:', false == 0, '\nbut if we use strict operator(===) as it will check the type as well we get the expected results :: ', false ===0);
console.log('compare empty spae to 0 gives us:', '' == 0);
console.log('compare undefined to null gives us:', undefined == null);


//Mark: --------------- LOGICAL OPERATORS ------------------------------------------

//1. && - will return first falsy value or the last value
let f;
f = 10 && 0 && 30;
console.log('the value of f in this case(f = 10 && 0 && 30;) is will return the falsy value 0,', f);
f =  10 && 50 && 30;
console.log('the value of f in this case(f =  10 && 50 && 30;) is will return the last value 30,', f);
//common use case is when u access the value of an array at given index and u dont wanna display undefined, eg
posts.length > 0 && console.log(posts[0]); //nothing will get displayed in this case (Example of if block with add)

true && console.log('U can use && operator as if -  block eg conditionisTrue && executethis')

//2. || - returns the first truthy value or last value
f = 10 || 20
console.log('f = 10 || 20 will return the first truth value =>', f);
f = 0 || '' || undefined
console.log('0 || undefined  -> will return the last value: =>', f);

//3. ?? - returns the right side operand when the left is null or undefined
console.log('?? - returns the right side operand when the left is null or undefined: null ?? 20 returns:  ',null ?? 20);
console.log('?? - else it returns the left if it has value, even if is falsy: 0 ?? 20 returns:  ',0 ?? 20);


/********************** - Logical Assignment - ******************** */

//1. ||= assigns the right side value only if the left is a false value - check if falsy
let valueIn = 0;
// valueIn = valueIn || 20 
valueIn ||= 30
    
console.log(valueIn);

//2. &&= assigns the right side value only if the left is a truthy value 
let valueTruty = [];
//valueTruty = valueTruty && 'I am to be returned '
valueTruty &&= 'I am right side'
console.log('&&= returns right side when left side is truthy: => ', valueTruty);

//3. ??= assigns the right side value only if the left is a null or undefined

let nullity = null
console.log('return right when left is  null or defined:: ', nullity ??= 'nullity value is null, so i am to be retuned');