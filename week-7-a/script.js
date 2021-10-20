// Data
const $form = document.getElementById('form')
console.log($form.length)

// Code


// Run
$form.addEventListener('submit', function (event) {
    event.preventDefault() // disalbe auto refresh
    // console.log(event)

    // console.log($form.elements)
    /* console.log('username: ' + $form.elements.username.value)
    console.log('password: ' + $form.elements.password.value)

    console.log($form.elements['security-question'].value)
    console.log($form.elements['account-type'].value) */

    for (let i=0; i < $form.elements.length; i++) {
        console.log($form.elements[i].name, $form.elements[i].value)
    }

    console.log($form.elements['theme'].value)
})

console.log($form.elements)