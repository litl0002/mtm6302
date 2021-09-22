console.log(window)     // notice the output
console.log(document)   // notice the console output
console.log(window.document.getElementById('container'))    // we will be using this shortcut later in course to access other window properties

const $container = document.getElementById('container')    // is naming convention for HTML ref
console.log($container)

//$countainer.textContent = 'I am a container'
// Override existing nested elements of modifies component

const $name = document.getElementById('name')
$name.textContent = 'Adam Litle'

const $studentNumber = document.querySelector('.student-number')
// '.' is used for class selection / '#' for Id selection
$studentNumber.textContent += ' 123456' // concatenation

const $enrollment = document.querySelector('p:nth-child(3)')
$enrollment.textContent = 'FULL TIME'

console.log(document.querySelectorAll('p')) // in the future, we will use this to select all elements matching a certain slector (for ex. <p>)


// Traversal
// we will figure out our traversal path using cnsole.log
console.log($container.children) // children is read-only
console.log($container.children[3]) // this is to figure out the path
const $active = $container.children[3]
$active.textContent = 'Active'

// Temporary update to the student card as an examples of how to use firstElementChild and nextElementSibling
$container.firstElementChild.textContent = 'New Name'
$name.nextElementSibling.textContent = 'New Student Number'

// Attributes
// attributes are a value / elements are a reference
console.log($name.getAttribute('id'))
console.log($studentNumber.getAttribute('class'))
console.log($name.id)

// we wont use this <a> again
document.querySelector('a').setAttribute('href', 'http://google.com')
// when accessing attribute - only use get/setAttribute

// CSS
$container.classList.add('grey')
$name.classList.add('red')
// you can remove a class using .remove ex... $name.classList.remove(..

$name.classList.add('red')
$name.classList.toggle('red') // toggle .red off
$name.classList.toggle('red') // toggle .red on

// Inline Style
$name.style.color = 'green' // we wont do this but its valid

// because setting an inline style is setting the HTML 'style' attribute, we will stay consistent  and use attribute manipulation to do inline style

// notice how we use template literals to make this super easy
$name.setAttribute('style',`
background-color: #ddd;
color: orange;
font-size: 40px;
`)

console.log($name.getAttribute('style'))