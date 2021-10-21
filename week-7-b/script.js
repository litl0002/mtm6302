const $list = document.getElementById('list')
// console.log('list')

$list.addEventListener('click', function(event){
    console.log(event.target)

    if (event.target.classList.contains('item')) {
        console.log('List Element')
    }
})