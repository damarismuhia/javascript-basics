# Cmds
1. sft+alt/alr+arrow - dub
2. alt/ctl + up/down - move line of code


# 1. JavaScript
JS is dynamically-typed language. We don't explicitly define the types for our variables
- JS is synchronous but events are asynchronous. But we can achieve asynchronous with callbacks & promises, AJAX(old)


# 2. Operators

1. Spread Operator
- we use the ...spread operator to take in the values from the array. eg [1,2,3] results to 1,2,3
- Usedto concatenate arrays or objects

2. Strict operator(===)
- It checks the type as well 

### logical assignment

3. ||=  check if falsy
- assigns the right side value only if the left is a false value 

    ```javascript
    let valueIn = 0;
    valueIn ||= 30 
    also can use:  valueIn = valueIn || 20 - if valueIn is false returns 20(right side)
    ```

4. &&= - check for truthy value
- assigns the right side value only if the left is a truthy value 

    ```javascript
        let valueTruty = [];
        //valueTruty = valueTruty && 'I am to be returned if left is true'
        valueTruty &&= 'I am right side'
    ```

5. ??= checks if left is null or undefined
- assigns the right side value only if the left is a null or undefined

### Logical Operator
6. && - returns the first falsy value or the last value in: 

    ```javascript
    let f;
    f = 10 && 0 && 30; //this will return 0(falsy value)
   ```
   NB: U can use && operator as if -  block eg conditionisTrue && executethis
   
    ```javascript
        true && console.log('&& as if block')
    ```
7. || - returns the first truty value or the last value in: 

    ```javascript
    let f;
    f = 10 && 0 && 30; //this will return 10(truthy value)
    ```





## Function 
1. Delarations

```javascript
function methodName() {
    return 'whateva wanna return'
}

```

2. Using expression

```javascript
const myFunction = function () {
    //body
}
```

3. Arrow funcion

```javascript
const functionName = () => {
    function body
} 

or 

const functionName = (params) => params

```

4. IIFE

```javascript
(function (params){
    //body
})(params)

or

((params)=> {body})(params)

```

# Loops
- Starndard loops - for , while, do while loops
- for-of cleaner way to iterate thru an array compared to above 3. It gives the actual value
- for-in - gives the index/key of a given array & object respectively


