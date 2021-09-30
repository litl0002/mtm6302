// pseudocode calculator
/*
//data
const $clear = get element
const $clearEntry           // later in course
const $delete               // later in course
const $addition
const $subtraction
const $multiplication
const $division
const $one
const $two
const $three
const $four
const $five
const $six
const $seven
const $eight
const $nine
const $zero
const $negative             // later in course
const $decimal              // later in course
const $equals
const $display

let leftOperand
let rightOperand
let operation

// code
using calculator
    select a number
    select an operation
    select another number
continue or equals

one event handler for all numbers (openads)
function setOperand (event)
    if (operation === nothing)
        leftOperand = button value
    else
        rightoperand = event.target.value


    log(lftop, op, rgtOP) // whole.calculator

// new calculation -> operation === undefined
function setOperation (event)
    if operation === undefined
        leftoperand = nutton value
    
        rightoperand = event.target.value / tectContent
        $display textContent += operation
    
    log(lftop, op, rgtOP)
    

// run
$addition.addeventlistener 'click' setOperation
$subtraction.addeventlistener 'click' setOperation
$multiplication.addeventlistener 'click' setOperation
$division.addeventlistener 'click' setOperation

$one.addeventlistener 'click' setOperand
$two.addeventlistener 'click' setOperand
$three.addeventlistener 'click' setOperand
$four.addeventlistener 'click' setOperand
$five.addeventlistener 'click' setOperand
$six.addeventlistener 'click' setOperand
$seven.addeventlistener 'click' setOperand
$eight.addeventlistener 'click' setOperand
$nine.addeventlistener 'click' setOperand
$zero.addeventlistener 'click' setOperand

$equals.addEventListener 'click' function {
    let result

    lftOperand
    rghOpernand

    switch operation {
        case +
            result = leftOperand + rightOperand
            break
        case -
            result = leftOperand - rightOperand
            break
        case *
            result = leftOperand * rightOperand
            break
        case /
            result = leftOperand / rightOperand
            break
    }

    $display.textContent = result

    console.log(left, operation, right)
}
*/


// Data
const $clear = document.getElementById('clear')
const $clearEntry = document.getElementById('clearEntry')
const $delete = document.getElementById('delete')

const $addition = document.getElementById('addition')
const $subtraction = document.getElementById('subtraction')
const $multiplication = document.getElementById('multiplictaion')
const $division = document.getElementById('division')

const $one = document.getElementById('one')
const $two = document.getElementById('two')
const $three = document.getElementById('three')
const $four = document.getElementById('four')
const $five = document.getElementById('five')
const $six = document.getElementById('six')
const $seven = document.getElementById('seven')
const $eight = document.getElementById('eight')
const $nine = document.getElementById('nine')
const $zero = document.getElementById('zero')
const $negative = document.getElementById('negate')                
const $decimal = document.getElementById('decimal')             
const $equals = document.getElementById('equals')
const $display = document.getElementById('display')

let leftOperand = ''
let rightOperand = ''
let operation


// Code
/*using calculator
    select a number
    select an operation
    select another number
continue or equals*/

//one event handler for all numbers (openads)
function setOperand(event) {
    if (operation === undefined) {
        leftOperand = event.target.textContent
    }
    else {
        rightoperand = event.target.value

    }
    console.log(leftOperand, operation, rightOperand) // whole.calculator
    
}
// new calculation -> operation === undefined
function setOperation(event) {
    if (operation === undefined) {
   
        operation = event.target.textContent
        $display.textContent += operation
    }
    console.log(leftOperand, operation, rightOperand)    
}
    
// Run
$addition.addEventListener('click', setOperation)
$subtraction.addEventListener('click', setOperation)
$multiplication.addEventListener('click', setOperation)
$division.addEventListener('click', setOperation)
$one.addEventListener('click', setOperation)
$two.addEventListener('click', setOperation)
$three.addEventListener('click', setOperation)
$four.addEventListener('click', setOperation)
$five.addEventListener('click', setOperation)
$six.addEventListener('click', setOperation)
$seven.addEventListener('click', setOperation)
$eight.addEventListener('click', setOperation)
$nine.addEventListener('click', setOperation)
$zero.addEventListener('click', setOperation)

$equals.addEventListener('click', function() {
    let result

    leftOperand = parseInt(leftOperand)
    righOpernand = parseInt(rightOperand)

    switch(operation) {
        case '+':
            result = leftOperand + rightOperand
            break
        case '-':
            result = leftOperand - rightOperand
            break
        case '*':
            result = leftOperand * rightOperand
            break
        case '/':
            result = leftOperand / rightOperand
            break
    }

    $display.textContent = result

    console.log(left, operation, right)
})