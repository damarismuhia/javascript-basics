/** 
 <div class="key">
  s
  <small>e.key</small>
</div>
 */
const insertDiv = document.getElementById('insert')

function createElement(innerTxt, value){
    const keyDiv = document.createElement('div')
    keyDiv.className = "key"
    keyDiv.appendChild(document.createTextNode(value))
    console.log(keyDiv);
    

    const small = document.createElement('small')
    const smllTextNode = document.createTextNode(innerTxt)
    small.className = 'small'
    small.appendChild(smllTextNode)

    keyDiv.appendChild(small)

    return keyDiv
}



function updateKey(e){
    insertDiv.innerHTML = ''
    const keyCode = {
        'e.key': e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code,
    } 
    
    for(const key in keyCode){
        const itemToInser = createElement(key, keyCode[key])
        insertDiv.clea
        insertDiv.appendChild(itemToInser)
    }
    
}


window.addEventListener('keydown', updateKey)

