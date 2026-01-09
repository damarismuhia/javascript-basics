/** ARRAYS
 * 
 */

/*------------------------MARK 1: Arrays----------------------------------------------*/
//1: Creating Arrays
let arrOutput;

    /*i. Array Literal */
const customer = ["Brooks",3,456.89,true,null];

    /*ii. Array Constructor */
const fruits = new Array('apple', 'grape', 'Ovacado', 'Banana', 'Orange');

console.log('Array', customer, fruits);

//2. Accessing Array
arrOutput = fruits[1];
console.log(`Accessed Item at given Index is: ${arrOutput}, 
    \nTotal count of items in array is accessed using .length:`, fruits.length);

//3. Append Item into Array - push()
fruits.push('Peach', 'strawberries')
console.log('Append Item into array using push(): ', fruits);

//4. Append item at index 0
fruits.unshift('Mango')
console.log('Add Item at index 0 using unshift: ', fruits);

//5. Remove the last item in the array - pop()
fruits.pop()
console.log('Remove last item: ', fruits);

//6. Remove the first item in the array - shift()
fruits.shift()
console.log('Remove last item: ', fruits);

//7. check if a specific value is in array - includes 
arrOutput = fruits.includes('Peach')
console.log('Includes returns true or false when checking if the item is available:', arrOutput);

//8. Get index of an item - indexOf()
console.log('Index of Peach is:', fruits.indexOf('Peach'));

//9. Return selected element in array using slice(specify start and end index(end index is exclusive)) and it doesnt modify the original array (fruits)
arrOutput = fruits.slice(1, 5)
console.log('Selected elements using slice: ', arrOutput, '\nOriginal Array:', fruits);

//10. Spice removes items at a given index and modify the original array
arrOutput = fruits.splice(1, 3)
console.log('Number of item to removed - splice: ', arrOutput, '\nOriginal Array:', fruits);

//11. Convert array to string
arrOutput = customer.toString()
console.log('\nArray to String: ', arrOutput,`String at index 0: ${arrOutput.charAt(0)}`, '\n\nOriginal Array:', customer);

//12. Nesting Arrays
let outputX;
const berries = ['Raspberry', 'Blueberry']
fruits.push(berries)
console.log('\nNest an Array inside another: ', fruits );

outputX = [berries, fruits]
console.log('\nNest two Array: ', outputX );

 /**Access element in a nested array */
 outputX = fruits[3][1]
console.log('\nAccess element in a nested array using: fruits[index of main element][index of element in 2nd array]: ', outputX);

//13 Concat Arrays - combining items from different array into 1 array: concat, spread(used more with object)

    /*Concat*/
    let no = [1,2,3]
    const names = ['Dams', 'Brook']
    outputX = no.concat(names)
    console.log('\nCombine two array into one single array using concat:', outputX);


    /**Spread Operator(...) ; NB: If dont use the spread operator on the second array, it will result to a nested array*/
    outputX = [...no, ...customer]
    console.log('\nCombine two array into one single array using spread:', outputX );

    /**Flatten - for nested array */
    outputX = fruits.flat()
    console.log('We can flatten a nested array using .flat()', outputX);

//14. Static Method on Array Object

    /*i. isArray - Check if an object is array*/
    outputX = Array.isArray(fruits)
    console.log('check if smth is Array using isArray(testObj): ', outputX);

    /*ii. from - Creates an array from a given value*/
    outputX = Array.from('56KMLy78')
    console.log('Creates an array from a given value, from(values): ', outputX);
    console.log('check if smth is Array using isArray(testObj): ', outputX);

    /*iii. from - Creates an array from a given value*/
    outputX = Array.from('56KMLy78')
    console.log('Creates an array from a given value, from(values): ', outputX);

// Mark: Array Challenges 1

/**
**Instructions:**
Use some of the array methods that we looked at to mutate the following array to = the expected result below:
const arr = [1, 2, 3, 4, 5];
Expected Result: [6, 5, 4, 3, 2, 1, 0];

*/

const arr = [1,2,3,4,5];
arr.reverse().unshift(6)
arr.push(0)

console.log(arr);

// Mark: Array Challenges 2:

/**
 * Combine `arr1` and `arr2` into a new array called `arr3` with the following elements:

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

Notice that both `arr1` and `arr2` include the number 5. You will have to find a way to get rid of the extra 5.

Expected Result: [1,2,3,4,5,6,7,8,9,10]
*/
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

const sliceArray = arr1.slice(0,4).concat(arr2)


const combinedArr = [...arr1, ...arr2]
combinedArr.splice(4, 1) // remove 1 item a given index 4


console.log(combinedArr, 'using slice: ', sliceArray);


