//console log  to confirm our files have been linked
console.log('Hello World')
//this is how you access the document variable
console.log(document)
// for a more javascripty description
// console.dir(document)
//* Use document.querySelector to select the DOM node (HTML.element) with a class of 'title'
// when you reference a piece of the DOM it is known as a DOM Node
const title = document.querySelector('.title')
console.log(title)
//* Use the .innerText property to change the title of the website
title.innerText = 'Your To Do List'

//* Use the .style property to change how the title looks
title.style = "color: red ; text-decoration: underline;"

const header = document.querySelector('header')

//* You can also dig into the .style property to set specific styles. Change the fontSize of our title

//* They are seen as inline styles so they override anything in your linked .css file
title.style.fontSize = '60px';

//* You can  access .classList to receive a list of all the classes assigned to a specific element
//* .classList has built in .add. remove, and .toggle methods to modify this list 
//* Add the class 'dark-mode' to the header text
title.classList.add('dark-mode')

title.addEventListener('mouseover', (e)=>{
    title.classList.toggle('dark-mode')
    
})
//* Use document.getElementsByTagName to grab the form with an id of 'color-form' (Remember that this method returns a node list which you'll need to access with an index)
const form = document.getElementsByTagName('form')[0]


//* Write a function to change the background color of the div with a class of 'content-hold' to whatever is typed in to the color input.
function changeColor (e){
    e.preventDefault()

    const colorInput = document.getElementById('color-input')

    const contentHold = document.querySelector('.content-hold')

    contentHold.style.backgroundColor = colorInput.value  
    
}
//* Use .addEventListener to attach the color change function to the submit event of the color-form.

form.addEventListener('submit', changeColor)


// * Demonstrate event bubbling by attaching an event listener to the "todo-hold" div
header.addEventListener('click' ,(e)=>{
 console.log('Header is clicked')
})
 
function logEvent(e){
    e.stopPropagation() // this stops the event from bubbling up the DOM

    console.log(e)
}
title.addEventListener('click', logEvent)

//* Complete the functionality of our todo list
/*
TODO capture the value of the todo input
TODO create new <li> element</li> 
TODO attach the new element to my todo list
*/
const todoButton = document.getElementById('todo-button')

function addTodo (e){
    // We grab the input box to type or todos
    const todoInput = document.getElementById('todo-input')
    // We create an new <li></li> element 
    const newLi = document.createElement('li')
    // We assign the value of our input to as inner text to our newly created <li></li> element
    newLi.innerText = todoInput.value
    // We tell the new <li>element</li> to remove it self if double clicked
    newLi.addEventListener('dblclick', (e)=>{
        newLi.remove()
    })

    // We grab the todo-list and save as a variable 
    const todoList = document.getElementById('todo-list')
     // We add the the <li>inner text</li> and attach it to the todo list using appendChild 
    todoList.appendChild(newLi)

    
    console.log('todo button click')
}

todoButton.addEventListener('click', addTodo)
//* included a warning if the user attempts to submit an empty todo.