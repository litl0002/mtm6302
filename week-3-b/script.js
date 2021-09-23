// calculator

function add(a, b) { return a + b } // can look like this to use less space

function subtract(a, b)
{
    return a - b
}

function multiply(a, b)
{
    return a * b
}

function divide(a, b)
{
    return a / b
}


function calculator(a, b, operation)
{
    let result

    // determine operation
    // addition
    if (operation === '+'){
        console.log('addition')
        result = add(a, b)
    }
    // subtraction
    else if (operation === '-'){
        console.log('subtraction')
        if (b > a){
            console.log('Result is negative, input values are reversed')
            result = subtract(b,a)
        }
        else {
            result = subtract(a, b)
        }
    }
    // multiplication
    else if (operation === '*'){
        console.log('multiplication')
        result = multiply(a, b)
    }
    // dividision
    else if (operation === '/'){
        console.log('dividision')
        result = divide(a,b)
    }
    else {
        console.log('Unkown Operation')
        return
    }

    console.log(result)

    // modulus operator
    if (result % 2 === 0){
        console.log(`Result: ${result} is EVEN!`)
    }
    else {
        console.log(`Result ${result} is ODD!`)
    }
}

// run
calculator(3, 2, '+')
calculator(8, 15, '-')
calculator(3, 7, '*')
calculator(81, 9, '/')

calculator(1, 2, '&')

const $divCalculator = document.getElementById('calculator')
const $firstValue = document.getElementById('firstName')
const $operation = document.getElementById('operation')
const $secondValue = document.getElementById('secondValue')

const $result = document.getElementById('result')

// calculator with switch
function calcSwitch(a, b, operation) {
    let result
    
    $firstValue.textContent = a
    $secondValue.textContent = b
    $operation.textContent = operation

    switch (operation) {
        case '+':
            $divCalculator.classList.add('addition')
            result = add(a, b)
            break
        case '-':
            $divCalculator.classList.add('subtraction')
            result = subtract(a, b)
            break
        case '*':
            $divCalculator.classList.add('multiplication')
            result = multiply(a, b)
            break
        case '/':
            $divCalculator.classList.add('division')
            result = divide(a, b)
            break
        default:
            $divCalculator.classList.add('default')
            console.log('Unknown Operator')
            break
    }

    $result.textContent += result

    // modulus operator
    if (result % 2 === 0){
        console.log(`Result: ${result} is EVEN!`)
        $result.classList.add('even')
    }
    else {
        console.log(`Result ${result} is ODD!`)
        $result.classList.add('odd')
    }
}

console.log('\n---- Switch Calculator ----')
calcSwitch(8, 5, '+')
// calcSwitch(8, 24, '-')


