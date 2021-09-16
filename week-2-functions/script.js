// Data 
const quantityA = 2
const quantityB = 3

// Code 
function add(a, b) {
    // console.log('here is the results: ')
    console.log(`addition of ${a} + ${b}`)
    return a + b
}

// invoking the add fraction 
//let addResult = add(21, 13) // 34
//console.log(addResult)

console.log( add(quantityA, quantityB) )

// First Attempt by myself
function subtract(a, b) {
    console.log(`subtraction of ${a} - ${b}`)
    const result = a - b
    return result
}

function multiplication(a, b) {
    console.log(`multiplication of ${a} * ${b}`)
    const result = a * b
    return result
}

function division(a, b) {
    console.log(`division of ${a} / ${b}`)
    const result = a / b
    return result
}

console.log( subtract(15, 8))


// Calculator

function calculator(addA, addB, subA, subB, multiA, multiB, divA, divB) {
    const addResult = add(addA, addB)

    const subResult = subtract(subA, subB)

    const multiResult = multiplication(multiA, multiB)

    const divResult = division(divA, divB)

    return `add result: ${addResult}
    subtraction result: ${subResult}
    multiplication result: ${multiResult}
    division result: ${divResult}
    `
}

/*
let subResult = subtract(8, 3)
console.log(subResult)

let addResult = add(8, 3)
console.log(addResult) */

console.log( calculator(0, 0, 0, 0, 1, 1, 8, 4) )


// Declaration statement Review
function scopeTest() {
    var varYear = 2021
    let letYear = 1999

    { // block
        var varYear = 1952
        console.log(`inside code block 'VAR' > ${varYear}`)

    // avoid var cause it makes little sense the redeclartion of this variable 'thisYear' should impact the version defind in 'higher' scope    

        let letYear = 2999
        console.log(`inside code block 'LET' > ${letYear}`)
    }

    console.log(`at function scope code block 'VAR' > ${varYear}`)
    console.log(`at function scope code block 'LET' > ${letYear}`)
}

scopeTest()
// VAR  variable has been overhidden > LET variable has not been overridden