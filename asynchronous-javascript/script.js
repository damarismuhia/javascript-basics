//MARK:1 setTimeout & clearTimeout

function chnageText(){
    document.querySelector('h1').textContent = "Hello from callback"
}
const timerId = setTimeout(chnageText, 3000) // so even if we dont use this variable, the setTimeout will still run

const btnCancel = document.querySelector('.btn')

btnCancel.addEventListener('click', () => {
    console.log("Timer ID is: ", timerId);
    clearTimeout(timerId)
    console.log('Timer cancled');
})

//MARK: 2.  setInterval & clearInterval
/**
 * - setInterval - will repeatedly call a function with a fixed time delay btwn each call.
 */

// const myIntervalId = setInterval(myIntervalCallback, 1000, 'You can also pass a string')
// function stopIntervalCallback() {
//     clearInterval(myIntervalId)
// }
// document.getElementById('stop-interval').addEventListener('click', stopIntervalCallback)


let intervalId;
function startColorChange(){
    if(!intervalId) { //if isnt running...
        intervalId = setInterval(changeColor, 1000)
    }

}
function changeColor(){
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randomColor);
    document.body.style.backgroundColor = `#${randomColor}`
}

function stopColorChange() {
    clearInterval(intervalId)
}

document.getElementById('start-interval').addEventListener('click', startColorChange)
document.getElementById('stop-interval').addEventListener('click', stopColorChange)




//MARK: 3. AJAX(Asynchronous Javascript & XML) & XHR(XMLHttpRequest) Object
/**
 * 1. This is a built-in browser object that allow us make requests to the servers without having to refresh the page
 * 2. readyState has 5 possible values
        - 0: request not initialized 
        - 1: server connection established / opened
        - 2: request received / headers received
        - 3: processing request / loading
        - 4: request finished & server is ready

 * 3. .open - to configure the https request: url, method, async(runs in bg, default is true) etc
 * 4. .onreadystatechange - Listen for changes, This runs every time the request status changes.
 * 
 *     
 */


  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

  xhr.onreadystatechange = function () { // we cant use arrow function here as thry dont have thier own this(xhr obj)
    
    if(this.readyState === 4 && this.status === 200) {
        console.log(this);
        const response = JSON.parse(this.responseText);
        console.log("response: ", response);

        response.forEach(item => {
            const li = document.createElement('li')
            
            li.classList.add('li-item');

            li.innerHTML = `<strong> ${item.name}</strong> - ${item.company.catchPhrase}`
            document.querySelector('.display-list').appendChild(li)
        });
    } 
  };

  xhr.send();
