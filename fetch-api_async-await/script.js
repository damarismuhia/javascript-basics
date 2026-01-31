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



//MARK: Fetch Options - Method, body, headers

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