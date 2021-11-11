const $delayedEvent = document.getElementById('delayed-event')
const $delayedEventDisplay = document.getElementById('delayed-event-display')

const $start = document.getElementById('start')
const $stop = document.getElementById('stop')
const $timer = document.getElementById('timer')

setTimeout(function() {
    console.log('3 seconds have passed!!')
}, 3000)

$delayedEvent.addEventListener('click', function() {
    console.log('button clicked')
    setTimeout(function () {
        $delayedEventDisplay.textContent = '1.5 second delay'
    }, 1500)
})

let timerID = 0

$start.addEventListener('click', function() {
    let timerSec = 0

    timerID = setInterval(function() {
        timerSec++
        $timer.textContent = timerSec
    }, 1000)
})

$stop.addEventListener('click', function() {
    clearInterval(timerID)
    $timer.textContent = 0
})

// ------ Conversion functions

const futureDate = new  Date(2022, 9, 31, 0, 1)
const nowDate = new Date()

const difference = futureDate.getTime() - nowDate.getTime()
console.log('difference: ', difference)

function toDays(ms) {
    return Math.floor(ms / 1000 / 60 / 60/ 24)
}

function toHours(ms) {
    let days = toDays(ms)
    let hours = Math.floor(ms / 1000/ 60/ 60)
    
    let remainingHours = hours - (days * 24)
    return remainingHours
}

function toMinutes(ms) {
    let days = toDays(ms)
    let hours = toHours(ms)
    let minutes = Math.floor(ms / 1000/ 60)

    let remainingMinutes = minutes - (hours * 60) - (days * 24 * 60)
    return remainingMinutes
}

console.log('days: ', toDays(difference))
console.log('hours: ', toHours(difference))
console.log('minutes: ', toMinutes(difference))