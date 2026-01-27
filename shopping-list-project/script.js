const inputItem = document.querySelector('.form-input')
const itemList = document.querySelector('.items-list')
const itemForm = document.querySelector('.form')

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
    inputItem.value = ''
    
}
itemForm.addEventListener('submit', submitItem)
