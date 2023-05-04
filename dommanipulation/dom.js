// Traversing the DOM

// let itemList=document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode);

//parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes

// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='yellow';

//firstchild 
// console.log(itemList.firstChild);
// //  // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent='hello 1';

// lastchild 
// console.log(itemList.lastChild);
// //  // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent='hello 4';

//nextSiblings
// console.log(itemList.nextSibling);
// //nextElementSiblings
// console.log(itemList.previousElementSibling);

//previousSiblings
// console.log(itemList.previousSibling);
// //previousElementSiblings
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

// Create a Div

var newDiv=document.createElement('div');

// Add class
newDiv.className='hello';

// Add id
newDiv.id='hello1';

//Add attribute
newDiv.setAttribute('title','Hello Div');

//Create text node
var newDivText=document.createTextNode('Hello World');

//Add text to dev
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);


//add hellow world befor item 1
//add li
var newLi=document.createElement('li');
// add class name to li
newLi.className='list-group-item';
//add text
var newLitext=document.createTextNode('hello world');
//add text to li
newLi.appendChild(newLitext);

var divClass=document.querySelector('div .list-group');
var li=document.querySelector('div li');

console.log(newLi);

newLi.style.fontSize='20px'
divClass.insertBefore(newLi,li);


