const inputItem = document.querySelector('.form-input')
const itemList = document.querySelector('.items-list')

const itemForm = document.querySelector('.form')
const filterInput = document.querySelector('.filter')



//MARK: Add Item - we add the eventLister on the form
function addItem(value){
    const li = document.createElement('li')
    li.className = 'item'
    li.appendChild(document.createTextNode(value))

    const btn = createBtn('remove-item btn-link text-red')
    li.appendChild(btn)
    return li
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
    itemList.appendChild(addItem(newItem))
    setUpUI()
    inputItem.value = ''
    
}
itemForm.addEventListener('submit', submitItem)

//MARK: Remove Item 
const btnClear = document.getElementById('clear-btn-id')

function deleteItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){
        if(window.confirm('Are you sure you want to delete')){
            e.target.parentElement.parentElement.remove() //target is icon, icon parent's is button, btn's parent is li item.
            setUpUI()
        }
    }
}
itemList.addEventListener('click', deleteItem)

//MARK:  Clear All Items
function clearAllItems(e){
    while(itemList.firstChild) {
        itemList.removeChild(itemList.firstChild)
    }
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
setUpUI()