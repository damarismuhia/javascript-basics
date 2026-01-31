/**
 * - Mimic post request 
 * - Add & Display the todo item
 * - Update item
 */

const baseURL = 'https://jsonplaceholder.typicode.com/';

function fetchTodos(limit) {
    fetch(baseURL + `todos?_limit=${limit}`)
    .then( res=> res.json())
    .then(data => {
        data.forEach(todo => {
            addTodoToDOM(todo)
        });
    });
}

function addTodoToDOM(todo){
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(todo.title));
    div.setAttribute('data-id', todo.id); //prefix a custom attribute with 'data-'
    div.setAttribute('data-completed', todo.completed)
    div.classList.add('item-todo')

    if(todo.completed) {
        div.classList.add('done')
    }
    document.getElementById('todo-list').appendChild(div);

}


//create todo
const createTodo = (e) =>{
    e.preventDefault() 
    let input = document.querySelector('.input-item').value
    
    if(input === ''){
        alert('Enter a todo item to proceed')
        return
    }else {
        const todo = {
            title: input,
            completed: true
        }
        mimicCreatePostReq(todo)
        
    }
}

//MARK: Post request
function mimicCreatePostReq(todo) {
    fetch(baseURL + 'todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json()) //handle error
    .then( data => {
        addTodoToDOM(data)
    }).catch(err => {
        console.log('Something went wrong: ', err);
    })
}

// MARK: Update completed 
const toggleCompleted = (e) => {
    
    const item = e.target
    if(item.classList.contains('item-todo')) { //check the actual item click to avoid toggling the outer div bg
        item.classList.toggle('done')
    }
    console.log('clicked', e.target);
    const userId = item.dataset.id //use .dataset to access custom attribute that u set instead of getAttribute('data-id')
    const isCompleted = item.classList.contains('done')

    const updateTodo = {
        title: item.innerText,
        completed: isCompleted
    }

    fetch(baseURL + `posts/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(updateTodo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res=> res.json())
    .then(data => {
        if(data.completed) {
            // item.classList.add('done')
             item.setAttribute('data-completed', data.completed)
        }
        console.log('Data Updated', data);
    })

}



const init = () => {
    document.addEventListener('DOMContentLoaded', fetchTodos(5))
    document.querySelector('.form').addEventListener('submit', createTodo)
    document.querySelector('#todo-list').addEventListener('click', toggleCompleted)
}

init()