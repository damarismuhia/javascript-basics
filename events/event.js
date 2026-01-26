const clearBtn = document.querySelector('.btn-clear');
const clearAllBtn = document.querySelector('.btn-clear-all');
const continueBtn = document.querySelector('.btn-continue');
//MARK: Event Listener 
/**
 * - onclick,
 * - addEventListener(eventType, callbackFnc),
 * - removeEventListener*/

console.log('\n--------------- MARK: Event Listener ---------------\n');

//MARK: a) .onclick
clearBtn.onclick = function () {
    alert('onclick isn\'t the recommeded way' )
}

//MARK: b) .addEventListener
console.log('Recommended way: .addEventListener() that takes in the "eventType" & "callback func" ');
clearBtn.addEventListener('click', function () {
    alert('Clear Item with .addEventListener()')
})

//clear all items 
clearAllBtn.addEventListener('click', function () {
    console.log('Called');
    const ul = document.querySelector('ul');

     //ul.innerHTML = '';  //mst performant

     //or check for the first li using while loop, still performant
     while(ul.firstChild){
        ul.removeChild(ul.firstChild) // this will run when ul.firstChild is true
     }

    
})

//Using a named function - nb you dont pass the () koz the func will get executed directly, 
function onClear(){
    alert('Named Function ack')
    console.log('Named Function on btn click');
}
continueBtn.addEventListener('click', onClear);

//MARK: c) .removeEventListener - used mostly after removing an items from the dom  
setTimeout(function () {
    console.log('.removeEventListener - used mostly after removing an items from the dom ');
    continueBtn.removeEventListener('click', onClear)
},5000); //eg on page load, we disable click event after 5sec



//MARK: 1. Mouse(btn) Events Listener 
/** 
 * - click,
 * - dblclick
 * - contextmenu - right click
 * - mouseup
 * - mousedown
 * - wheel
 */

console.log('\n--------------- MARK: Mouse Events Listener: click, dblclick etc ---------------\n');

const logo = document.querySelector('#logo')

//MARK: a) dblclick
const onDoubleClick = () => {
    if(document.body.style.background ==! 'maroon'){
        document.body.style.background = 'maroon'
        document.body.style.color = 'white'
    }else {
        document.body.style.background = 'grey'
        document.body.style.color = '#333'
    }
}

logo.addEventListener('dblclick', onDoubleClick)

//MARK: b) contextmenu - right click
const onRightClick = () => {
    document.querySelector('#app-title').style.background = 'green'
}
logo.addEventListener('contextmenu', onRightClick)


//MARK: c) mouseup, mouse down
const onMouseUp = () => console.log('\n Click + Mouse Up trigger');
logo.addEventListener('mouseup', onMouseUp)


//MARK: d) wheel - action to trigger when the cursor is on the item while scrolling
const onMouseWheel = () => console.log('\n Scrooling in action while on logo');
logo.addEventListener('wheel', onMouseWheel)




//MARK: e) Hover Events: mouseover, mouseout
const onMouseOver = () => console.log('\n Mouse Over the logo');
const onMouseOut = () => console.log('\n Mouse Out');

logo.addEventListener('mouseover', onMouseOver)
logo.addEventListener('mouseout', onMouseOut)

//MARK: f) Drag & Drop 
const onDragStart = () => console.log('\n Click drag - fires once ');
const onDragEnd = () => console.log('\n Fired after you Release an item after drag');
const onDrag = () => console.log('\n Click & Drag - fires all the times even onhold');


logo.addEventListener('dragstart', onDragStart)
logo.addEventListener('dragend', onDragEnd)
logo.addEventListener('drag', onDrag)










//MARK: --Event object--
console.log('\n--------------- MARK: Event object etc ---------------\n');
const appTitle = document.querySelector('#app-title')

appTitle.addEventListener('dblclick', (e) => console.log('Event Object properties: ', e));


function onTextClick(e) {
    /**
     * target - mostly the same as currentTarget - item clicked
     * currentTarget - item that click event is attached to
     * type - type of event that was triggered
     * timeStamp - time the event that was triggered
     * 
     -- UI positioning -- 
     * clientX - The x position of mouse click relative to the window viewpoint(visible part) -(x-cordinate)
     * clientY - The y position of mouse click relative to the window -(y-cordinate)
     * 
     -- Element-relative logic --
     * offsetX - The x position of mouse click relative to the element -(within)
     * offsetY - vertical distance (in pixels) from the TOP of the target element to where the mouse event happened.
     *
     -- Page logic / scrolling effects --
     * pageX - The x position of mouse click relative to the page - even the invisible part. Scrooling changes the value
     * pageY - The y position of mouse click relative to the window -(y-cordinate)
     * screenX - is the mouse position relative to your entire physical screen, not the browser and not the webpage
     * screenY - is the mouse position relative to your entire physical screen, not the browser and not the webpage
     * 
     * use .preventDefault() - to disable default action such as on clicking links, form submit etc
     */
    console.log('Target: ', e.target);
    console.log('Current Target: ', e.currentTarget);
    e.target.style.background = 'green'
    console.log('\n clientY from parent to mouse click: ', e.clientY, '\n Margin Left(clientX): ', e.clientX);
    console.log('\n offsetY from elelment itself to mouse click: ', e.offsetY, '\n offsetX: ', e.offsetX);

    console.log('\n pageY: ', e.pageY, '\n pageX: ', e.pageX);
    console.log('\n screenY: ', e.screenY, '\n screenX: ', e.screenX);
    
}
document.body.addEventListener('click', onTextClick)
//appTitle.addEventListener('click', onTextClick)










//MARK: 2 --Keyboard Event & Key Properties-- keypress, keyup, keydown
const itemInput = document.querySelector('#item-input')

//keypress
const onKeyPress = (e) => {
    console.log('\nkeypress - fired once when u tap on any key, or hold the key down')
    
}
itemInput.addEventListener('keypress', onKeyPress)

//keyup
const onKeyUp = (e) => {
    console.log('\nkeyup - fired when u release the key after holding or tapping')
}
itemInput.addEventListener('keyup', onKeyUp)



//keydown
const onKeyDown = (e) => {
    console.log('\nkeydown - keeps firing as far as you are holding the tapped key')
    /* Key properties
        1. key
        2. keyCode - gives the actual keycode ref: https://www.toptal.com/developers/keycode/table
        3. code - return KeyH, Digit1, for special char it still returns the key on keyboard eg for @ returns  Digit2 etc
    */
    console.log(
        '\n key returns the pressed key: ', e.key,
        `\n KeyCode for ${e.key} is: `, e.keyCode,
        '\n Code is: ' , e.code,
        
    );

    //4. repeat - returns true if the user is holding the keydown
    if(e.repeat){
        console.log('\n\n User is holding key: ', e.key);
    }
    console.log(
        '\n Shift Key pressed: ', e.shiftKey,
        '\n Ctrl Key pressed: ', e.ctrlKey,
        '\n Alt Key pressed: ', e.altKey,
    );
}

itemInput.addEventListener('keydown', onKeyDown)


//MARK: 3.  -- Input Events ---
const enterItem = document.getElementById('item-input-two');
const selectItem = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');

function onInput(e) {
    /**
     * - e.target.value - to get the value keyed-in
     * - 
     */
    console.log('------Input items:: ', e.target.value);
}
function onChecked(e){
    const isChacked = e.target.checked //for checkbox we use checked to get the value
    appTitle.textContent = isChacked ? 'Checked' : "Not Checked"
 }

 function onFocus(){
    enterItem.style.outlineStyle = 'solid'
    enterItem.style.outlineColor = 'red'
    enterItem.style.outlineWidth = '1px'
 }

 function onBlur(){
    enterItem.style.outlineStyle = 'none'
 }
/**
 * 
 * 1. input - we could use keydown, but it doesnt work with dropdown. can be used with any input type, checkbox etc
 * 2. change - u can use input event for dropdowns, but change works as well
 * 3. focus - used when the input field is active
 * 3. blur - used when the input field is inactive
 */

enterItem.addEventListener('input', onInput)
selectItem.addEventListener('change', onInput)
checkbox.addEventListener('input', onChecked)
enterItem.addEventListener('focus', onFocus)
enterItem.addEventListener('blur', onBlur)





//MARK: 4.  -- Form Submission & Form Data Object ---
const form = document.getElementById('form-layout');

function onSubmit(e){
    /**
     * By Default a form submits to the same page if there is no action specified on the html, preventDefault() stops that behaviour
     * You can use FormData to get the input values(modern), or just e.target.value.. 
     */
    e.preventDefault(); 

    const formData = new FormData(form)
    const itemTwo = formData.get('item-two') //what we pass in here is the name attribute specified in the html
    const selectedItem = formData.get('priority') 
    console.log('On submitting Form Data:: ', itemTwo, selectedItem);
}

form.addEventListener('submit', onSubmit)




//MARK: 5.  -- Event Bubbling ---
/**
 * The event is first captured and handled by the innermost element & then propagated to outer element
 * 
 * 
   (event target)Button => Div => body => html => document
  
 * if lets say the div has a click listener and we click on the the btn which has a click listener, 
   the div event listener will get fired as well, to stop that you can use e.stopPropagation()
 */
const addBtn = document.querySelector('form button')
const btnDiv = document.getElementById('submit-div')

addBtn.addEventListener('click', (e) => {
    alert('Button was clicked')
    e.stopPropagation()
})

btnDiv.addEventListener('click', () => {
    console.log('stopPropagation was called on target');
    alert('Button Div was clicked - no firing')
})

form.addEventListener('click', () => {
    alert('Form was clicked')
})

document.body.addEventListener('click', () => {
    alert('Body was clicked')
})


//MARK: 6.  -- Event Delegation & Multiple Elements Event listener ---

// Method 1: add event listener on every Item using foreach - not efficient

const liItems = document.querySelectorAll('li')
liItems.forEach(item => {
    // item.addEventListener('click', (e) => {
    //     e.target.remove() //clicked item
    // })
})


// Method 2: Event Delegation - add single event listener to the parent & target whichever element we want to delete
const ulItems =document.querySelector('ul')
ulItems.addEventListener('mouseover', (e)=> {
    console.log("Tag name is: ", e.target.tagName);
    if(e.target.tagName === 'LI') {
        e.target.style.color = 'red'
       // e.target.remove()
    }
})


//MARK: 4.  -- Page Loading & Window Event ---
/**
 * - resize - listen for page resize
 * - scroll - eg ui effects 
 * - focus - click inside the window
 * - blur - outside the window
 */
window.addEventListener('resize', ()=> {
    appTitle.innerText = `Resized to: ${window.innerWidth} * ${window.innerHeight}`
})
 
window.addEventListener('scroll', ()=> {
    console.log('SCROLL:', `Resized to: ${window.scrollX} * ${window.scrollY}`);
    if(window.scrollY > 70) {
        document.body.style.backgroundColor = 'black'
        document.body.style.color = 'white'
    }else {
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
    }
})





//MARK: Styling
function styleBtn(bgColor, btn){
    btn.style.color = bgColor
    btn.style.padding = '8px'
    btn.style.marginTop = '20px'
    btn.style.width = '100px'
    btn.style.borderRadius = '8px'
    btn.style.border = '2px solid'

}
styleBtn('red', clearBtn)
styleBtn('red', clearAllBtn)
styleBtn('green', continueBtn)











