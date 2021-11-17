// Data
// html references
const $clocks = document.getElementById('clocks')
const $clockDisplay = document.getElementById('clock-display')

// internal variables
const offsets = {
    ottawa: -5,
    tokyo: 9,
    london: 0,
    hawaii: -10
}

// Code
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1)
}

function getLocalTime(city) {
    const offset = offsets[city]
    let UTCTime = new Date()
    UTCTime = UTCTime.toUTCString().split(' ')[4]

    let hours = parseInt(UTCTime.slice(0, 2)) + offset

    // 24 hour clock > over 24?? under 0??
    if (hours >= 24) {
        hours -= 24
    } 
    else if (hours < 0) {
        hours += 24
    }

    const localTime = hours + UTCTime.slice(2)
    return localTime
}

function createClock(city) {
    $clockDisplay.innerHTML = `
    <h2>Local Time in : ${capitalize(city)}</h2>
    <p id='time-display'>${getLocalTime(city)}</p>
    <button id='update'>Update</button>
    <button id='close'>Close</button>`

    document.getElementById('update').addEventListener('click', function () {
        document.getElementById('time-display').textContent  = getLocalTime(city)
    })

    document.getElementById('close').addEventListener('click', function() {
        $clockDisplay.textContent = ''
    })

    localStorage.setItem('timeZoneCity', city)
}

function initialize() {
    const storedCity = localStorage.getItem('timeZoneCity')

    // NULL Check
    if (storedCity) {
        createClock(storedCity)
    }
    else {
        createClock($clocks.value)
    }
}

// Run
$clocks.addEventListener('change', function () {
    // console.log($clocks.value)
    createClock($clocks.value)
})

// initialize
initialize()