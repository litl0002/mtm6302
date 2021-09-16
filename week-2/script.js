// Single line comment

/* 
Multi Line Comment 
*/

const testVariable = 'test' // inline comment

/*

const courseCode = 'mtm6302'    //dont just use a letter, name everything properly ex. coursecode good! cc bad!
console.log(courseCode)    //can have multiple but need to change at least a letter

*/

// declaration statement
// var > wont use in this course
// let
// const

// variable value will/can change
let dateToday = 210915
// console.log(dateToday)
dateToday = 210916
// console.log(dateToday)

// values that wont change
const firstName = 'Adam'
const earthGravity = 9.8

// array
const testArray = ['first', 'second', 'third']
console.log(testArray)
//console.log(testArray[1])

// objects
const testObject = {
    // key - value pairs
    firstProperty: 'firstValue',
    currentYear: 2021
}
// console.log(testObject)
// console.log(testObject.firstProperty)
console.log(testObject.currentYear)

// math operators
// add +
// subt -
// multi *
// div /

// arithmetic op
let count = 1
console.log(count)
count++
console.log(count)
count--
console.log(count)

// assignment
let addAssignment = 'string'
addAssignment += 'string2'
console.log(addAssignment)

// comparison Operators
// console.log( 1 == 1 ) // true
// console.log( 1 === '1' ) // false > different data type

let boolTest = false
// console.log(boolTest != true) // true

// logical operator
// console.log( 1 === 1 && 1 === 2 ) // and > we want both to b ... 
// console.log( 1 === 3 || 1 === 1 ) // or >we only need one

// expressions
const value = 1 + 1 // 1+1 = 2
// console.log(value)

// booleans
const isActive = true
const isAdmin = false

// numbers
const integer = 42
const float = 3.14

// strings
const animal = 'dog'

const stringYear = '2021'
const numberYear = 2021
// console.log(stringYear)
// console.log(numberYear)

// concatenation
const lastName = 'Litle'
const fullName = firstName + ' ' + lastName
console.log(fullName)

console.log(2 + 3) // 5
console.log(2 + '3') // ??

console.log('what is this newline \ncharacter')

// Template Literals
console.log(`Hi there, my name is ${firstName} ${lastName}`)

const longStory = `
template literals are actully great because we can write multiple stings and even math! ${4 * 4 / 2}`

console.log(longStory)