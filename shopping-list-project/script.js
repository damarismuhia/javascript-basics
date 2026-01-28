const inputItem = document.querySelector('.form-input')
const itemList = document.querySelector('.items-list')

const itemForm = document.querySelector('.form')
const formBtn = itemForm.querySelector('button')
const filterInput = document.querySelector('.filter')
let isEditMode = false;



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

function chekIfItemExists(item){
    const itemsFromStorage = getItemsFromLocalStorage('items')
    return itemsFromStorage.includes(item) //check if item is among the items in array
}

function submitItem(e){
    e.preventDefault();
    console.log('Called? ');

    const newItem = inputItem.value.trim()
    if(newItem === ''){
        alert('Add an Item to proceed')
        return;
    }
    //check for edit mode
    if(isEditMode){ //remove the item and add it again since we cant update the item directery
        const itemToEdit = itemList.querySelector('.edit-mode') //we previously set this class to distiguish the item being isEditMode
        deleteItemFromLocal(itemToEdit.textContent)
        itemToEdit.classList.remove('edit-mode') //reset to default class updateFormBtnStyling
        itemToEdit.remove()
        isEditMode = false
    }else {
        if(chekIfItemExists(newItem)){
            alert('That item already exists!')
        }
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
//MARK: Edit Item
function setItemToEdit(item){
    isEditMode = true

    itemList.querySelectorAll('li').forEach(i => i.classList.remove('edit-mode')) //deselect other element when u click on an item(reset the previously assigned class)
    item.classList.add('edit-mode')
    updateFormBtnStyling('fa-solid fa-pen', 'Update Item', '#228B22')
    inputItem.value = item.textContent
}
 
function updateFormBtnStyling(iconClassName, btnName, btnColor){
    formBtn.innerHTML = `<i class="${iconClassName}"></i> ${btnName}`
    formBtn.style.backgroundColor = btnColor
}
function onItemClicked(e) {
    if(e.target.parentElement.classList.contains('remove-item')){
        const li = e.target.parentElement.parentElement
        deleteItem(li) //target is icon, icon parent's is button, btn's parent is li item.
    }else { //edit
        setItemToEdit(e.target)
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
    inputItem.value = ''; 
    const item = itemList.querySelectorAll('li') //should be here instead at the global level
    if(item.length === 0){
        btnClear.style.display = 'none'
        filterInput.style.display = 'none'
    }else {
       btnClear.style.display = 'block'
        filterInput.style.display = 'block' 
    }
    updateFormBtnStyling('fa-solid fa-plus', 'Add Item', '#333') /**with react or other frwrk u dont have to update this mannually */
    isEditMode = false
}

function init() { //initialize the app -  the func below aint on the global scope
    document.addEventListener('DOMContentLoaded', displayItems) //when page loads
    setUpUI()
}
init()
