//console.log(window);

//MARK: Document Element Properties

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