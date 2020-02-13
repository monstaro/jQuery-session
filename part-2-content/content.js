// const $ = require('jquery');
let btn = document.querySelector('button');
btn.addEventListener('click', function(e){
  e.preventDefault();
})

let clearBtn = document.querySelector('#clear-btn');
clearBtn.addEventListener('click', function(){
  document.querySelectorAll('input').forEach(input => {
    input.value = "";
  })
})


console.log($('p').text())

console.log($('.phone-wrapper').html())

console.log(document.querySelector('.phone-wrapper'))


// $('#name').val('hi')
// $('.phone').eq(1).addClass('hi')

$('button[type="submit"]').text('Add New Buddy')
$('label[for="confirm"]').text(' Yassss !!! ')
$('label[for="deny"]').text('Noooooooo!!!!')
$('input').val('Default')
$('h1, h2').text('Contact Form')
