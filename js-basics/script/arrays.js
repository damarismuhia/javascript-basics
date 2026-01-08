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

//10. Spice is same as slice but it Does manipulate the original array, arguments(startindex,The number of elements to remove inclusive of start index)
arrOutput = fruits.splice(1, 3)
console.log('Number of item to removed - splice: ', arrOutput, '\nOriginal Array:', fruits);

//11. Convert array to string
arrOutput = customer.toString()
console.log('\nArray to String: ', arrOutput,`String at index 0: ${arrOutput.charAt(0)}`, '\n\nOriginal Array:', customer);

// reverse,
