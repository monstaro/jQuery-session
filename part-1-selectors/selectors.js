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


$(document).ready(function() {
  $('label').addClass('green')
  $('.phone').addClass('yellow')
  $('label[for="email"]').addClass('blue')
  console.log($('input:checked').attr('id'))
  //if we add a 'checked' to the tag in the deny checkbox, it still only logs the first instance ^^. 
  $('p').find('label').addClass('purple')
  $('#clear-btn').addClass('red')
})
