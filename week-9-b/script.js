// Data
const $container = document.getElementById('container')

const $dayOfWeek = document.getElementById('dayOfWeek')
const $year = document.getElementById('year')
const $month = document.getElementById('month')
const $date = document.getElementById('date')
const $hours = document.getElementById('hours')
const $minutes = document.getElementById('minutes')

const $holidays = document.getElementById('holidays')
const $countdown = document.getElementById('countdown')

const currentDate = new Date()
const unixEpoch = new Date(0) // EST > dec 31 1969
const canadaDay = new Date('July 1, 2022 08:00')
const newYearsEve = new Date(2021, 11, 31, 23, 59, 59)
const halloween = new Date(2022, 9, 31, 00, 01)
const xmas = new Date(2021, 11, 25, 00, 01)

const dayOfTheWeekStrings = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

const monthStrings = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
]

// Code
function updateTime() {
    $dayOfWeek.textContent = dayOfTheWeekStrings[currentDate.getDay()]
    $month.textContent = monthStrings[currentDate.getMonth()]
    $date.textContent = currentDate.getDate()
    $year.textContent = currentDate.getFullYear()
    $hours.textContent = currentDate.getHours()
    $minutes.textContent = currentDate.getMinutes()
}

// calculate the hours remaining before holiday
function countdownToHoliday(holiday) {// expecting Date object
    console.log(holiday.getTime())
    console.log(currentDate.getTime())

    let difference = holiday.getTime() - currentDate.getTime() // millisecinds
    console.log(difference + 'ms')
    difference = difference / 3600000 // milliseconds to hours
    $countdown.textContent = '~' + parseInt(difference) + ' hours away!'
}

// Run
// $container.textContent = currentDate
// $container.textContent = unixEpoch
// $container.textContent = canadaDay
// $container.textContent = newYearsEve

// change dates/times 
currentDate.setMonth(9)
currentDate.setDate(31)
currentDate.setHours(23)
currentDate.setMinutes(59)

updateTime()

// $container.textContent = currentDate.toDateString()

// console.log(currentDate.getTime())

// holiday switch > proper date parameter to funtion
$holidays.addEventListener('change', function(event){
    console.log(event.target.value)

    switch (event.target.value){
        case 'halloween':
            console.log('SPOOKY')
            countdownToHoliday(halloween)
            break
        case 'xmas':
            console.log('FESTIVE')
            countdownToHoliday(xmas)
            break
        case 'newYearsEve':
            console.log('CELEBRATION')
            countdownToHoliday(newYearsEve)
            break
        case 'canadaDay':
            console.log('EH')
            countdownToHoliday(canadaDay)
            break
        default:
            break
    }
    
})