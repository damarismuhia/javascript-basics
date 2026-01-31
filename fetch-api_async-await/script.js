//MARK: 1. Fetch Basics
/**
 * - Fetch Api returns a promise unlike AJAX & its a method available on window object.
 */

//Fetching a JSON File with Fetch Api
fetch('./movies.json')
.then((response => { //unlike ajax the first value retuned is a res with things like status, statusText headers etc
    console.log('Response Object: ', response);
    return response.json() //if it was a text file, we couls have use .text()
}))
.then(data => console.log('Now Data Comes second: ', data));

 

//MARK: 2. Post request- Method, body, headers

function createPost(post){
    fetch('https://jsonplaceholder.typicode.com/posts', 
        {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then(res => res.json())
    .then((data) => {
        console.log('POST METHOD DATA: ', data);
    })
}

createPost({
    title: 'Hello from Javascript',
    body: 'It has been an awesome journey to learn js'
})

//MARK: Async-await
/**
 * 
 * 
 *
 */


//MARK: 1. Error handing
async function getUsers(){
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users') 
        if(!res.ok){
            throw new Error('Request failed')
        }
        const data = await res.json()
        console.log('\n\nAsync-await has two promise: response & actual data => ', data);
        
    } catch (error) {
        console.error('getUsers Error: ', error);
    }
    
}

setTimeout(getUsers, 3000);
//If you not using try-catch u can just call the .call on the func eg getUsers().catch(error => console.log('err: ', error));


//MARK: 2. Multiple Promises
// Code inside async func is runs in a serial manner
const getAllData = async () => {
    const usersRes = await fetch('https://jsonplaceholder.typicode.com/users')
    const userData = await usersRes.json()

    const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const postData = await postsRes.json()

    console.log('Multiple Promises: ',
        '\n\nUSERS: ', userData, '\n\nPOSTS: ', postData );
    console.log('This will run after the above func execute\n ');
}
setTimeout(getAllData, 4000);
console.log('But code outside the async-await func will continue to run- non-blocking');

//MARK: Promise.all([])

const getAllDataWithPromiseAll = async () => {
    const [usersRes, postsRes] = await Promise.all([
        fetch('https://jsonplaceholder.typicode.com/users'),
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    ])


    const userData = await usersRes.json()
    const postData = await postsRes.json()

    console.log('With Promises.all : ',
        '\n\nUSERS: ', userData, '\n\nPOSTS: ', postData );
}

setTimeout(getAllDataWithPromiseAll, 4000);