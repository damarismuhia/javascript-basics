/**Objects are ds that holds a key-value pair 
 * Syntax for object creation thru literals: 
const objectName = {
    key: Value
}
*/
const user = {
    name: 'Dams Brook',
    isAdmin: true,
//Object within an object
    address: { 
        city: 'Kampala',
        userLocation: 'Kiwatule'
    },
// Array within an object
accounts: [
   {accountNo: 1256798065675,accountName: 'Current Account'},
   {accountNo: 5679806567500,accountName: 'Fixed Account'}
]    
    
};
// thru constructor
const todo = new Object()
todo.item1 = 'Learn Javascript'
todo.item2 = 'Build Portfolio Website'
console.log('\nobject creation thru construcror: ', todo);

let objOutput;

//1. access using .notation
objOutput = user.name 
console.log(
    objOutput,
    '\nAccesing Nested Object:', user.address.city,
'\nAccessing array items nested in object user: ', user.accounts[0].accountName);

    //1b. access using bracket notation with keys wrapped in quotes
objOutput = user['name']
console.log(objOutput);

//2. Add properties to an Object
user.userName = 'Muhia Bianca'

//3. Add a function to an Object 
user.validateAccount = function() {
    if (user.accounts[0].accountNo < 5) {
        console.log(`${this.accounts[0].accountNo} is invalid Account Number`);
    }else {
        console.log(`${this.accounts[0].accountNo} is a Valid Account Number`);
    }
}

//call a func
user.validateAccount()


//4. remove a property from object using delete
delete user.isAdmin;
console.log(user);

//5. nesting objects
const nestedObj = {user, todo}
console.log('Nested objects:', nestedObj);

//5. combine two objects into one - Spread operator & assign
const obj3 = {...user, ...todo}
console.log('two objects into 1 objects using Spread', obj3);

const obj4 = Object.assign({}, todo, user)
console.log('two objects into 1 objects using assign', obj4);

//6. Get the Object Keys and put them in an  Arrays
objOutput = Object.keys(user)
const objValues = Object.values(user)
console.log('Object keys into an array: ', objOutput, '\n Values in to array', objValues);
console.log('length of items in an object: ', objOutput.length); //possible thru getting the object keys then using .length property of an array

//7. Convert an object into arrays of key values using entries
objOutput = Object.entries(todo)
console.log('object to arrays', objOutput);

//8. Check if object has a particular property
console.log('To do has name property?: ', todo.hasOwnProperty('name'));


//**********************Destructuring Objects****************** */
//you can use curry braces to list object properties for easier access
const {
    name: custName, //rename name to custName
    isAdmin,
    address: { city, userLocation},
} = user;

console.log('Now You can easily access the object properties without .notations:', custName, userLocation);

//**********************JSON Objects****************** */

// Convert object to json string
objOutput = JSON.stringify(todo)
console.log('object to json using stringify:\n\n',objOutput);

// Parse JSON to object
objOutput = JSON.parse(objOutput)
console.log('Parse JSON to object using parse:\n\n',objOutput);


//**********************Objects Challenge****************** */

/**
 * ### Step 1

Create an array of objects called `library`. Add 3 objects with a property of `title`, `author`, `status`. 
Title and author should be strings (whatever value you want) and status should be another object with the properties of `own`, `reading` and `read`.
 Which should all be boolean values. For all status, set `own` to `true` and `reading` and `read` to false.

### Step 2

You finished reading all of the books. Set the `read` value for all of them to `true`. 
Do not edit the initial object. Set the values using dot notation.

### Step 3

Destructure the title from the first book and rename the variable to `firstBook`

### Step 4

Turn the library object into a JSON string. There is a specific function that we looked at in the last section that we can use to do this.
 */

const library = [
    {
    title: "Atomic Habits",
    author: "James Clear",
    status: {
        own: true,
        reading: false,
        read: false
    }
},
{
    title: "English Grammar in Use",
    author: "Canergie",
    status: {
        own: true,
        reading: false,
        read: false
    }
},
{
    title: "JavaScript Basica",
    author: "Udemy",
    status: {
        own: true,
        reading: false,
        read: false
    }
}
]

//Set the `read` value for all of them to `true`
library[0].status.read = true 
library[1].status.read = true 
library[2].status.read = true 

console.log(library);

//Destructure the title from the first book and rename the variable to `firstBook`
const {
    title: firstBook
} = library[0]
console.log('FirstBook is:', firstBook);

//Turn the library object into a JSON string.
const libJson = JSON.stringify(library)
console.log(libJson);