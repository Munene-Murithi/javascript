const body = document.body;
// body.append('Hello world!');

const div = document.createElement('div')


// Different ways of adding text to a page
div.textContent = 'Another div'
// innerText checks the css while you inspect
div.innerText = 'This will be inside a div element'
// To add HTML
div.innerHTML = '<strong>Hello world 2</strong>'

// appendChild can append elements but not strings
body.appendChild(div);

// remove an element from the page
const spanHi = document.querySelector('#hi')
// spanHi.remove()

// dataset
console.log(spanHi.dataset.test)
spanHi.dataset.title = 'newTitle'

// adding or removing classes
spanHi.classList.add('hi2')
spanHi.classList.remove('hi2')
// use boolean with toggle to add or remove 
spanHi.classList.toggle('hi3', false)

// manipulating styles
spanHi.style.color = 'red'