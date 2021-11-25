// ----- example 1
fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        // return console.log(JSON.stringify(json))
        console.log(json)
        return json
    }) 

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

        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(function (response) {
                return response.json()
            })
            .then(function (json) {
                console.log('all data fetched and stored')
                allUserData = json
                console.log(json)
            })
            .catch(function (error) {
                console.warn(error.name, error.message)
            })
    }
    else {
        const userSelection = event.target.dataset.user

        fetch(`https://jsonplaceholder.typicode.com/users/${userSelection}`)
            .then(function (response){
                return response.json()
            })
            .then(function(json) {
                console.log('Single data fetched and stored!')
                userData = json

                // throw new Error('Something went wrong!')
            })
            .catch(function (error) {
                console.warn(error.name, error.message)
            }) 
    }
})

$readData.addEventListener('click', function () {
    $dataDisplay.children[1].firstElementChild.textContent = userData.name
    $dataDisplay.children[2].firstElementChild.textContent = userData.phone
    $dataDisplay.children[3].firstElementChild.textContent = userData.website
})

$readAllData.addEventListener('click', function() {
    let newElements = []
    for(let user of allUserData) {
        newElements.push(`
        <div id='user-${user.id}' class='item'>
            <p>Name: ${user.name}</p>
            <p>Username: ${user.username}</p>
            <p>Email: ${user.phone}</p>
            <p>Website: ${user.website}</p>
        </div>
        `)
    }

    $dataDisplay.innerHTML = newElements.join('')
})