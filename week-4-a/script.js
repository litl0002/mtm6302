// Data
const $button1 = document.getElementById('button1')
const $button2 = document.getElementById('button2')
const $hover = document.getElementById('hover')
const $left = document.getElementById('left')
const $right = document.getElementById('right')

// Code
function predefinedHandler() {
    console.log('Predefined function - Event Handler')
}

// Run
$button1.addEventListener('click', function(event){
    console.log('Anonymus Event Handler')

    console.log(event.target) // notice the output
    // use this event interface for traversal, future
})

$button2.addEventListener('dblclick', predefinedHandler) // dblclick is double click

$hover.addEventListener('mouseover', function() {
    $hover.setAttribute('style', 'background-color: pink')
})

$hover.addEventListener('mouseout', function() {
    $hover.setAttribute('style', 'background-color: lightgrey')
})

// keypress - add to document so it always worjs (otherwise need html element in focus)
document.addEventListener('keydown', function(event) {
    console.log(event.key)

    if (event.key === 'ArrowLeft') {
        $left.setAttribute('style', 'background-color: orange')
    }
    else if (event.key === 'ArrowRight') {
        $right.setAttribute('style', 'background-color: cyan')
    }
})

document.addEventListener('keyup', function(event) {
    $left.setAttribute('style', 'background-color: white')
    $right.setAttribute('style', 'background-color: white')
})

document.querySelector('select').addEventListener('change', function(event) {
    console.log(event.target.value)
})

// ---- Example ----

// Data 
const $item1 = document.getElementById('item1')
const $item2 = document.getElementById('item2')
const $item3 = document.getElementById('item3')
const $contents = document.getElementById('contents')

// Run
$item1.children[2].addEventListener('click', function() {
    $contents.textContent += ' Cute Animal 1'
})

$item2.children[2].addEventListener('click', function() {
    $contents.textContent += ' Cute Animal 2'
})

$item3.children[2].addEventListener('click', function() {
    $contents.textContent += ' Cute Animal 3'
})