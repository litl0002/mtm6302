// ----- example 1
/* fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        // return console.log(JSON.stringify(json))
        console.log(json)
        return json
    }) */

/* document.getElementById('fetch-data').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(function (response) {
            return response.json()
        })
        .then(function (json) {
            console.log(json)
            return json
        })
}) */

// ----- example 2
/*
async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const json = await response.json()
    console.log(json)
}

document.getElementById('fetch-data').addEventListener('click', function() {
    fetchData()
})


// ---- example 3
const $fetchData = document.getElementById('fetch-data')
const $readData = document.getElementById('read-data')
const $dataDisplay = document.getElementById('data-display')

// store the data from fetch for use outside click event
let userData = {} 

$fetchData.addEventListener('click', function () [
    fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(function (response) {
            return response
        })
])

*/

// ---- example 4
const $buttonContainer = document.getElementById('button-container')
const $readData = document.getElementById('read-data')
const $readAllData = document.getElementById('read-all-data')
const $dataDisplay = document.getElementById('data-display')

// store the data for use outside the click event handler
let userData = {}
let allUserData = []

$buttonContainer.addEventListener('click', function(event) 
{
    if (event.target.getAttribute('id') === 'fetch-all-data') {
        console.log('fetch all')
    }
    else {
        const userSelection = event.target.dataset.userData

        fetch(`https://jsonplaceholder.typicode.com/users/${userSelection}`)
            .then(function (response){
                return response.json()
            })
            .then(function(json) {
                console.log('Single data fetched and stored!')
                userData = json
            })
            .catch(function (error) {
                console.log.warn(error.name, error.message)
            }) 
    }
})

$readData.addEventListener('click', function () {
    $dataDisplay.children[0].firstElementChild.textContent = userData.name
    $dataDisplay.children[1].firstElementChild.textContent = userData.phone
    $dataDisplay.children[2].firstElementChild.textContent = userData.website
})

// continue fetch next class