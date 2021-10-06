const colours = ['red', 'green', 'blue', 'pink']
console.log(colours)

// array index starts at 0 NOT 1
console.log(colours[0])
console.log(colours[1])
console.log(colours[2])
console.log(colours[4]) // 5th item is undefined

colours[2] = 'orange'
console.log(colours)

// push - at to end
colours.unshift('yellow')
console.log(colours)

// pop - remove from end
// colours.pop()
console.log(colours)

// shift - remove from beginning
colours.shift()
console.log(colours)

//unshift - add to beginning
colours.unshift('purple')
console.log(colours)

// add/remove/replace - anywhere in array
colours.splice(1, 1, 'teal')
console.log(colours)

// boolean check to see if array 
console.log(Array.isArray(colours)) // useful but not used often

// concatenate all elements into string
console.log(colours.join())
console.log(colours.join(''))

const elements = ['<div></div>', '<p>stuff</p>', '<p>more stuff</p>']
console.log(elements.join(''))

console.log(colours.indexOf('pink'))
console.log(colours.includes('blue'))

// querryselectorall review
const $listOfParagraphs = document.querySelectorAll('p')
console.log($listOfParagraphs)

console.log($listOfParagraphs[0])
console.log($listOfParagraphs[1])
console.log($listOfParagraphs[2])

// $listOfParagraphs[1].setAttribute('style', 'background-color: grey')
// $listOfParagraphs[2].setAttribute('style', `background-color: ${colours[2]}`)

// iteration / loops
for (let i = 0; i < 10; i++) {
    console.log(i) // iterator "counter"
}

// apply colour (fromm array) to our p tags
for (let i = 0; i < colours.length; i++){
    console.log(colours[i])
    $listOfParagraphs[i].setAttribute('style', `background-color: ${colours[i]}`)
}

let counter = 0
for (const colour of colours) {
    console.log(colour)
    $listOfParagraphs[counter].setAttribute('style', `background-color: ${colour}`)
    counter++
}

const studentCard = {
    name: 'Adam Litle',
    studentNumber: '1234567',
    active: true
}

for (const item in studentCard) {
    console.log(item) // iterator gives you the key
    console.log(studentCard[item]) // use brackt in this kind of stange way to get the value
}

let count = 0
while (count < 13) { // same behaviour as for loop, however as we can see with the expression, we can test for arbitrary exit cases
    console.log(count)
    count++
}

let flag = false
let num = 0
while (flag === false) {
    console.log(num)

    if (num === 42) {
        flag = true
    }

    num++
}