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