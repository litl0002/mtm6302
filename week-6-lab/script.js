// Data
const $petStore = document.getElementById('petstore')
const $petBasket = document.getElementById('petBasket')
const $total = document.getElementById('total')
const $discount = document.getElementById('discount')

const animalOne = {     // pug 1
    id: 'a1',
    name: 'Arwen',
    image: 'https://picsum.photos/id/1025/81/81',
    description: 'Blah Blah Blah',
    price: '420'
}
const animalTwo = {     // pug 2
    id: 'a2',
    name: 'Mike',
    image: 'https://picsum.photos/id/1062/81/81',
    description: 'Blah Blah Blah',
    price: '420'
}
const animalThree = {     // black lab
    id: 'a3',
    name: 'Trigger',
    image: 'https://picsum.photos/id/237/81/81',
    description: 'Blah Blah Blah',
    price: '420'
}
const animalFour = {     // bear
    id: 'a4',
    name: 'Smoky',
    image: 'https://picsum.photos/id/433/81/81',
    description: 'Blah Blah Blah',
    price: '420'
}
const animalFive = {     // wolf
    id: 'a5',
    name: 'Ranga',
    image: 'https://picsum.photos/id/582/81/81',
    description: 'Blah Blah Blah',
    price: '420'
}
const animalSix = {     // husky
    id: 'a6',
    name: 'Steve',
    image: 'https://picsum.photos/id/659/81/81',
    description: 'Blah Blah Blah',
    price: '420'
}


const listOfAnimals = [animalOne, animalTwo, animalThree, animalFour, animalFive, animalSix]
const animalsDisplayed = 6

const discountStart = 1000
let totalAmount = 0

// Code
function addToCart(event) {
    // can no longer select after selecting once
    event.target.parentElement.classList.add('disabled')
    event.target.removeEventListener('click', addToCart)

    // add names to basket
    if ($petBasket.textContent !== '') {
        $petBasket.textContent += ' & '
    }
    $petBasket.textContent += event.target.previousElementSibling.textContent
    console.log(event.target.previousElementSibling)
    console.log(event.target)
    console.log(event)

    // calculate $ total
    totalAmount += parseInt(event.target.nextElementSibling.textContent)
    $total.textContent = totalAmount

    // check discount
    $discount.textContent = checkDiscount($total.textContent)
}


function setAnimals(animalsArray, numberOfAnimals) {
    // inner html to ass animals to html
    let petstoreHTML = ''

    for (let i=0; i < numberOfAnimals; i++) {
        const animStruct = `
        <div id='${animalsArray[i].id}' class='animal'>
            <img src=${animalsArray[i].image}>
            <p>${animalsArray[i].name}</p>
            <button>ADD</button>
            <p>${animalsArray[i].price}</p>
            <p>${animalsArray[i].description}</p>
        </div>`

        petstoreHTML += animStruct
    }

    $petStore.innerHTML += petstoreHTML

    // get / set buttons
    const $buttons = document.querySelectorAll('button')
    for (let $button of $buttons) {
        $button.addEventListener('click', addToCart)
    }
}

function checkDiscount(amount) {
    // dicount starts at 1000$
    if (amount >= discountStart) {
        return (amount - (amount * 0.1))
    }
    else {
        return amount
    }
}

// Run
setAnimals(listOfAnimals, animalsDisplayed)