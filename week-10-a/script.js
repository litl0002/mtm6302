// local/session storage > client side only
const $nameInput = document.getElementById('name-input')
const $courseCode = document.getElementById('course-code')
const $courseTitle = document.getElementById('course-title')
const $courseSection = document.getElementById('course-section')

const $storeName = document.getElementById('name')
const $storeCourseInfo = document.getElementById('course-info')
const $retrieve = document.getElementById('retrieve')
const $clear = document.getElementById('clear')

// as we can see, we don't actually need to use a form when working with input, However for Midterm use a for to handle input
$storeName.addEventListener('click', function() {
    localStorage.setItem('name', $nameInput.value)
})

$storeCourseInfo.addEventListener('click', function() {
    const objectDataToStore = {
        code: $courseCode.value,
        title: $courseTitle.value,
        section: $courseSection.value
    }

    // console.log(objectDataToStore)
    // console.log(JSON.stringify(objectDataToStore))
    localStorage.setItem('course-info', JSON.stringify(objectDataToStore))
})

$retrieve.addEventListener('click', function() {
    console.log(localStorage.getItem('name'))
    console.log('string', localStorage.getItem('course-info'))
    console.log('object', JSON.parse(localStorage.getItem('course-info')))
})

$clear.addEventListener('click', function(){
    localStorage.clear()
})