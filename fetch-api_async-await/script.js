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
