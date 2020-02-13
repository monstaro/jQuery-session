



$('button').on('click', function(e){
  e.preventDefault()
  }
)

$('#clear-btn').on('click', function() {
  $('input').val('')
})

$(':input').on('change', function() {
  for (var i = 0; i < ($(':input').length); i++) {
    localStorage.setItem('input'+i, $(':input').eq(i).val())
  }
})

$(document).ready(function() {
  for (var i = 0; i < ($(':input').length); i++) {
    $(':input').eq(i).val(localStorage.getItem('input'+i))
  }
})

