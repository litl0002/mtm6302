console.log($) // with jQuery linked '$' becomes our general access to jQuery

// vanila JS
// document.querySelector('.first').setAttribute('style', 'color: red')

// jQuery
// $('.first').css('color', 'blue')

// vanila JS
// for (const $element of document.querySelectorAll('main p')) {
//    $element.setAttribute('style', 'color: brown')
// }

// jQuery
// $('main p').css('color', 'black')

// jQuery
// $('.first').removeClass('first')
// $('.first').addClass('active')
$('p').addClass('active')

// jQuery
// $('.first').before('<p>Potato</p>')
// vanila
// document.querySelector('.first').insertAdjacentHTML('beforebegin', '<p>Potato</p>')

// $('.first').on('click', function () {
//    console.log('click')
// })
$('.first').click(function () {
    console.log('this function works too')
})