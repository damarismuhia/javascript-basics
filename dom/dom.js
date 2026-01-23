//console.log(window);

//MARK: 1. Document Element Properties

let output;

//1. .documentElement - returns everything in html tags
output = document.documentElement;
console.log('documentElement :',output);

//2 .head - returns the head contents
output = document.head

console.log('head: ', output);

//3. .body - returns the head contents
output = document.body

console.log('body: ', output);

//4. .body.children - Gets the children inside the head or body
output = document.body.children 
console.log('head/body.children: ', output);

/**
 * - document.doctype 
 * - document.URL - return full url of a webpage
 *  
 */
output = document.URL
console.log('Page URL: ', output);

//MARK: FORMS
/** 
 * - document.forms[0].id - Get attributes such as id
 * - document.forms[0].method - returns form's method - Post or get
 * - document.forms[0].action - represents the action of the form element.
 * - document.forms[0].id = 'new-id' - update the form ID
 *  */ 
output = document.forms
console.log('Page/\'s Form : ', output, 
    "\n\nFirst Form: ",document.forms[0], 
    `\n\nFirst Form ID: ${document.forms[0].action}`);

//MARK: Links <a href='https://facebook.com" id="facebook-link"> Facebook </a>
/**
 * - .links - Returns an HTMLCollection of the hyperlinks in the document.
 * - 
 */
output = document.links;
let linkUrl = document.links[0].href;
let updateLinkId = document.links[0].href = 'https://google.com';
let upsertClass = document.links[0].className = 'google-class';
let getAllClassList = document.links[0].classList

console.log('\nLinks: ',output,`
    \n\nLink 1: ${document.links[0]}
    \n\nLink href: ${linkUrl}
    \n\nUpdate link id to: ${updateLinkId}
    \n\nSet Class name: ${upsertClass}
    \n\nDisplay Class List: ${getAllClassList}`
);

//MARK: Images

output = document.images
let imgsrc = document.images[0]
console.log(
    `\nImages: `, output ,
    '\n\n Image : ', imgsrc,
    `\n\n Image src: ${imgsrc.src}`);



/*******************************************-DOM Selectors- ************************************************************************* */

//MARK: 2. DOM Selectors - Single Elements

/**
 * 1. .getElementById('id')
 * 
 * - Returns an object reference to the identified element.
 * - If two or more elements in a document have the same ID, this method returns the first element found.
 * - You can also use .getElementById('app-title').getAttribute('class or id') to get the id or the class of a given tag

*/
console.log('\n\n 1. .getElementById(\'id\')')

let titleObj = document.getElementById('app-title')
console.log(
    '\ngetElementById: ', titleObj, 
    `\n\nGet id: ${titleObj.id}`);

let withAttribute = titleObj.getAttribute('class')
console.log('\nUsing .getAttribute(class or id) to get the class: ',withAttribute);    

//set attributes - id,class
titleObj.id = 'new-app-title-id' //or .setAttribute('class', 'updated-class name')

// Get/Change Content - .textContent/innerText
console.log('\n\nGet/Change Content:');
console.log('\nGet Content with .textContent/innerText: ', titleObj.textContent);
console.log('\nUpdate Content with: ', titleObj.textContent = 'New Shopping List');
console.log('\nUpdate Content with html .innerHTML: ', titleObj.innerHTML = '<strong>My Shopping List</strong>');

// Change styles - using .style.color = 'red' etc
console.log('\n\nChange styles: using .style.color = \'red\'; etc')
titleObj.style.color = 'white';
titleObj.style.backgroundColor = 'grey';
titleObj.style.padding = '10px';
titleObj.style.borderRadius = '8px';


/**
 * 2. document.querySelector() - Returns the first Element node within the document, in document order, that matches the specified selectors
 * - gives full control over HTML, you can select anything without using getelementbyId()- this was done using JQuery before - 2015
 * */
console.log('\n\n 2. document.querySelector() - ')
console.log('\nselect first elemt with given tag: ', document.querySelector('h1')); //selects a single element unlike jQuery it would select all H1's
console.log('\nor select by id: ', document.querySelector('#new-app-title-id'));
console.log('\nselect by class: ', document.querySelector('.container'));
console.log('\nselect by attribute: ', document.querySelector('input[type="text"]')); // using attributes type, name, placeholder etc

//Select the nth Items -sudo selectors
const secondItem = document.querySelector('li:nth-child(2)') //2nd item in the list
console.log('\nSelect the nth Items: ',secondItem);



//MARK: 3. DOM Selectors - Multiple Elements eg all items in the li
console.log('\n\n3. document.querySelectorAll() - Returns a nodelist rather than HTMLCollection and u can perform the array operation')
const listItems = document.querySelectorAll('li') //  u can use li
console.log(listItems);

// i) style all the element in nodelist
listItems.forEach((item, index) => {
    item.style.color = 'red'
    if(index === 0){
        item.style.color = 'green'
        item.innerText = 'Updated Apple Juice' //the delete icon is gone to solve this we can use innerhtml
        item.innerHTML = `New Apples
            <button class="remove-item btn-link text-red">
                <i class="fa-solid fa-xmark"></i>
            </button>`
    }
})
//listItems.style.color = 'red' - this is possible with jQuery but not with query selector nodelist

//ii) Other method u can use to achieve the same(Least Used) - returns HTMLCollection rather than a nodelist
/**
 * NB: HTMLCollection cant be used with array operations, you first need to convert it to array using Array.from
 */
const listItem2 = document.getElementsByClassName('item')
console.log('With: ',listItem2);

const listByTagName = document.getElementsByTagName('li');
console.log('By Tag name: ', listByTagName);
console.log('With: ',listItem2);

/*******************************************-Traversing the DOM- ************************************************************************* */

//MARK: 4. Traversing the DOM -  Elements : Relationships btwn element nodes
/**
 * Any HTML tag in a page is a node 
 * - .firstElementChild - access the first element
 * - .lastElementChild - last element in a parent node
 * - console.dir(parent.children[1]); - display all the method and properties
*/

    //MARK: i) Get Child elements from the parent
    console.log('\n\n-- MARK: Traversing the DOM --')
    const parent = document.querySelector('.parent'); 
    console.log('\nNode Element parent: ',parent);

    console.log(
        'Child element in the parent: ', parent.children,
        '\nChild at position 1: ', parent.children[1].innerText,
        '\nClass Name: ', parent.children[1].className, 
        '\nNode Name: ', parent.children[1].nodeName //div, h1 etc
    );

    parent.children[1].innerText = 'Update from Child 2 to Child Two'

    parent.firstElementChild.style.color = 'red'
    parent.lastElementChild.style.color = 'green'

    //MARK: ii) get parent elelment from a child 
    let child = document.querySelector('.child')
    console.log(
        '\nGet parent from child: ', child.parentElement,
        '\n Add border to the parent div from the child: ', child.parentElement.style.border = '3px solid #ccc',
        '\n Add padding to the parent div from the child: ', child.parentElement.style.padding = '10px'
    );
    //MARK: iii) Sibling Elements
    const secItem = document.querySelector('.child:nth-child(2)')
    console.log(
        '\nSibling Elements at nth position: ',secItem,
        '\nPreviuos Sibling Elements: ',secItem.previousElementSibling.innerText,
        '\nNext Sibling Elements: ',secItem.nextElementSibling.innerText,
    );


//MARK: 5. Traversing the DOM -  Nodes
// 