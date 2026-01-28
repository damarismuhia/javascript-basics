const inputItem = document.querySelector('.form-input')
const itemList = document.querySelector('.items-list')

const itemForm = document.querySelector('.form')
const filterInput = document.querySelector('.filter')



//MARK: Add Item - we add the eventLister on the form
function addItemToDOM(value){
    const li = document.createElement('li')
    li.className = 'item'
    li.appendChild(document.createTextNode(value))

    const btn = createBtn('remove-item btn-link text-red')
    li.appendChild(btn)
    itemList.appendChild(li)
}
function createBtn(classes){
    const btn = document.createElement('button')
    btn.className = classes
    const icon = createIcon('fa-solid fa-xmark')
    btn.appendChild(icon)
    return btn
}
function createIcon(classes){
    const icon = document.createElement('i')
    icon.className = classes
    return icon
}

function submitItem(e){
    e.preventDefault();
    console.log('Called? ');

    const newItem = inputItem.value.trim()
    if(newItem === ''){
        alert('Add an Item to proceed')
        return;
    }
    addItemToDOM(newItem)
    addItemToLocalStorage(newItem)
    setUpUI()
    inputItem.value = ''
    
}
itemForm.addEventListener('submit', submitItem)

//MARK: Remove Item 
const btnClear = document.getElementById('clear-btn-id')

function deleteItem(item){
    //delete Item from dom
    if(window.confirm('Are you sure you want to delete')){
        item.remove() //frm dom
        deleteItemFromLocal(item.textContent)
        setUpUI()
    }
}
function onItemClicked(e) {
    if(e.target.parentElement.classList.contains('remove-item')){
        const li = e.target.parentElement.parentElement
        deleteItem(li) //target is icon, icon parent's is button, btn's parent is li item.
        
    }

}
itemList.addEventListener('click', onItemClicked)

//MARK:  Clear All Items
function clearAllItems(e){
    while(itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
    }
    localStorage.removeItem('items')
    setUpUI()
    //itemList.innerHTML = ''
}
btnClear.addEventListener('click', clearAllItems)





//MARK: Filter Items - when working with dom, remember to access the actual content thru child/paremt instead of direct access

function filterItem(e){
    const text = e.target.value.toLowerCase();
    const items = itemList.querySelectorAll('li')
    items.forEach((itemName) => {
        console.log("Item :::", itemName.firstChild.textContent);
        if(itemName.firstChild.textContent.toLowerCase().indexOf(text) != -1){ /**indexOf - returns true if the txt that is typed in matches the item name else it returns -1*/
            itemName.style.display = 'flex'
        }else {
            itemName.style.display = 'none'
        }
    })


}
filterInput.addEventListener('input',filterItem)

//MARK: Local Storage - Under Application
/**
 * - localStorage & sessionStorage are properties on window object that allow us to access a Storage object,
 * - Data is stored in the browser as akey-value pairs, and values are strings - cant store objects directly unless u stringfy them
 * - Both have the same apo but localStorage doesnt expire, while sessionStorage only lasts untill the page is closed
 
    localStorage methods
    ---------------
    1. .setItem('key', 'value')
    2. .getItem('key')
    3. .removeItem('key')
    4. .clear()
 */

//MARK: -- Add Item to LocalStrorage
function addItemToLocalStorage(item){
    const itemsFromStorage = getItemsFromLocalStorage('items')

    itemsFromStorage.push(item)

    localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

//MARK: -- Display Items From LocalStrorage
function getItemsFromLocalStorage(){
    let itemsFromStorage;

    if(localStorage.getItem('items') === null){
        itemsFromStorage = [];
    }else {
        itemsFromStorage = JSON.parse(localStorage.getItem('items')); 
    }
    return itemsFromStorage
}
function displayItems(){
    const items = getItemsFromLocalStorage('items');
    items.forEach(item => {
        addItemToDOM(item)
    })
    setUpUI()
}

//MARK: -- Remove Items From LocalStrorage
function deleteItemFromLocal(item){
    let itemsFromStorage = getItemsFromLocalStorage('items')

    //filter out items to be removed
    itemsFromStorage = itemsFromStorage.filter(it => it !== item)

    //Update local Storage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage))

}










function setUpUI(){
    const item = itemList.querySelectorAll('li') //should be here instead at the global level
    if(item.length === 0){
        btnClear.style.display = 'none'
        filterInput.style.display = 'none'
    }else {
       btnClear.style.display = 'block'
        filterInput.style.display = 'block' 
    }
}

function init() { //initialize the app -  the func below aint on the global scope
    document.addEventListener('DOMContentLoaded', displayItems) //when page loads
    setUpUI()
}
init()
