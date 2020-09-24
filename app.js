// == document model ==== //

// let val;

// val = document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;


// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList[0];

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function (script) {
//   console.log(script.getAttribute('src'));
// });

// console.log(val);


// Dom Selectors for Single elements //

// ====document.getElementById()====
// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling 
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// // using const taskTitle.style.display = 'none';
// // not this way document.getElementById('task-title').style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task list';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style = "color:red">Task List</span>';

// ===== document.querySelector(); ====

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc';
// document.querySelector('li:nth-child(even)').style.background = 'grey';

// ==== DOM Selectors For Multiple Elements ==== //

//document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// console.log(listItems);

//  document.getElementsByTagName
// let lis = document.getElementsByTagName('li')
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Convert HTML Collection into array
// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function (li, index) {
//   console.log(li.className);
//   li.textContent = `${index}: Hello`;
// })

// console.log(lis);

// document.querySelectorAll

// const items = document.querySelectorAll('ul.collection li.collection-item');

// items.forEach(function (item, index) {
//   item.textContent = `${index}: Hello`;
// })

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function (li, index) {
//   li.style.background = '#ccc';
// })

// for (let i = 0; i < liEven.length; i++) {
//   liEven[i].style.background = '#f4f4f4';
// }


// console.log(items);

//===== Traversing The Dom ======//
// move up and down parents and children

// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');


// val = listItem;
// val = list;

// // Get child nodes
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// 1 - Elements
// 2 - Attribute (deprecated)
// 3 - Text node
// 8 - Comment 
// 9 - Document itself
// 10 - Doctype


// // Get children elements nodes 
// val = list.children;
// val = list.children[1];
// val = list.children[1].textContent = 'Hello';

// // Children of children
// list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];

// //First Child
// val = list.firstChild;
// val = list.firstElementChild;

// // Last Child
// val = list.lastChild;
// val = list.lastElementChild;

// // Count child elements
// val = list.childElementCount;

// // Get parents node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// // Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// console.log(val);

// ====== Creating Elements ===== //

// Create element 

// const li = document.createElement('li');

// // Add class

// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title', 'New Item');

// // Create Text node
// li.appendChild(document.createTextNode('Hello world'));

// // Create new link element
// const link = document.createElement('a')
// //Add classes
// link.className = 'delete-item secondary-content';

// // add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// // append link into li
// li.appendChild(link);


// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);



// ===== Removing and replacing elements ==== //
// // REPLACE ELEMENTS 
// const newHeading = document.createElement('h2');
// // Add ID
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));
// // Get the old heading 
// const oldHeading = document.getElementById('task-title');
// // Parent
// const cardAction = document.querySelector('.card-action');
// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // REMOVE ELEMENT

// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // REMOVE
// lis[0].remove();

// // REMOVE CHILD ELEMENT
// list.removeChild(lis[3]);

// // CLASSES & ATTR
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// // Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// // Attribute
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http//google.com');
// link.setAttribute('title', 'Google');
// val = link.hasAttribute('href');
// link.removeAttribute('title');
// val = link;

// console.log(val);



// ===== Event Listeners & Event Objects ==== //

// document.querySelector('.clear-tasks').addEventListener('click', function (e){
//   console.log('Hello world');
//   // e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('mouseover', onclick);

// function onclick(e) {
//   // console.log('Clicked');

//   let val;

//   val = e;

//   // Event target elements
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;

//   e.target.innerText = 'Hello';

//   // event type
//   val = e.type;

//   //Timestamp
//   val = e.timeStamp;

//   // Coords event relative to the window
//   val = e.clientY;
//   val = e.clientX;

//   // Coords event relative to itself
//   val = e.offsetY;
//   val = e.offsetX;

//   console.log(val);
// }


// ==== Mouse Events ===== //

// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// Click 
// clearBtn.addEventListener('click', runEvent);
// Double Click
// clearBtn.addEventListener('dblclick', runEvent);
//Mouse Down
// clearBtn.addEventListener('mousedown', runEvent);
//Mouse up
// clearBtn.addEventListener('mouseup', runEvent);
//Mouse Enter
// card.addEventListener('mouseenter', runEvent);
//Mouse Leave
// card.addEventListener('mouseleave', runEvent);
//Mouse over
// card.addEventListener('mouseover', runEvent);
//Mouse out
// card.addEventListener('mouseout', runEvent);
// Mouse move
// card.addEventListener('mousemove', runEvent);



// Event Handler
// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);
//   heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
// };

// Keyboard & Input events

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// Clear input
// taskInput.value = '';

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);

// Keyup
// taskInput.addEventListener('keyup', runEvent);

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// focus 
// taskInput.addEventListener('focus', runEvent);

// Blur
// taskInput.addEventListener('blur', runEvent);

//cut
// taskInput.addEventListener('cut', runEvent);

//paste
// taskInput.addEventListener('paste', runEvent);

// Input Event 
// taskInput.addEventListener('input', runEvent);

// change
// select.addEventListener('change', runEvent);


// function runEvent(e) {
//   console.log(`EVENT TYPE: ${e.type}`);

//   console.log(e.target.value);

//   // heading.innerText = e.target.value;

//   // Get input value
//   // console.log(taskInput.value)

//   // e.preventDefault();
// }

// Event Bubbling & Delegation

// EVENT BUBBLING

// document.querySelector('.card-title').addEventListener('click',
//   function () {
//     console.log('card-title');
//   });

// document.querySelector('.card-content').addEventListener('click',
//   function () {
//     console.log('card content');
//   });

// document.querySelector('.card').addEventListener('click',
//   function () {
//     console.log('card');
//   });

// document.querySelector('.col').addEventListener('click',
//   function () {
//     console.log('col');
//   });

// EVENT DELEGATION 

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

function deleteItem(e) {
  // if (e.target.parentElement.className === 'delete-item secondary-content') {
  //   console.log('delete item');
  // }

  if (e.target.parentElement.classList.contains('delete-item')) {
    console.log('delete item');
    e.target.parentElement.parentElement.remove();
  }
}