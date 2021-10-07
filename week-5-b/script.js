const $container = document.getElementById('container')
$container.innerHTML += '<h1>Student Timetable</h1>'

// week view for timetable
/* const days = `<div>Sunday</div>
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Saturday</div>
                ` */

const daysOfTheWeek = ['Sunday', 
                        'Monday', 
                        'Tuesday', 
                        'Wednesday', 
                        'Thursday', 
                        'Friday', 
                        'Saturday',]

const days = `<div>${daysOfTheWeek[0]}</div>
                <div>${daysOfTheWeek[1]}</div>
                <div>${daysOfTheWeek[2]}</div>
                <div>${daysOfTheWeek[3]}</div>
                <div>${daysOfTheWeek[4]}</div>
                <div>${daysOfTheWeek[5]}</div>
                <div>${daysOfTheWeek[6]}</div>`

// $container.innerHTML += '<div id="week">' + days + '</div>'

let dayElements = []
for (let i=0; i < daysOfTheWeek.length; i++) {
    dayElements.push(`  <div class='day'>
                            <div>${daysOfTheWeek[i]}</div>
                        </div>`)
}

dayElements.unshift('<div id="week">')    // add open tag
dayElements.push('</div>')              // add close tag

const htmlElement = dayElements.join('')
$container.innerHTML += htmlElement

// when using a loop to prepare elements, push them into an array, then join them, and only use innerhtml as few times as possible - After loop is finished (compututaional Heavy)

const $listOfDayElements = document.querySelectorAll('.day')
// console.log($listOfDayElements)

const classTimeElement = '<div class="class-time">No Classes Today</div>'

for (const $element of $listOfDayElements) {
    $element.insertAdjacentHTML('beforeend', classTimeElement)
}

// nested array
const listOfClassTime = [
    ['Wednesday', 12, 14],
    ['Thursday', 14, 16]
]
// console.log(listOfClassTime)

for (const $element of $listOfDayElements) { // day of the week
    for (const classTime of listOfClassTime) {// class day
        console.log($element.children[0].textContent)
        console.log(classTime[0])

        if (classTime[0] === $element.children[0].textContent) {
            console.log('Match for the day!!', classTime)
            $element.children[1].textContent = `Classtime: ${classTime[1]} - ${classTime[2]}`
            $element.children[1].classList.add('highlight')
        }
    }
}