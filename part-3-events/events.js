



$('button').on('click', function(e){
  e.preventDefault()
  }
)

$('#clear-btn').on('click', function() {
  $('input').val('')
})

$(':input[type="number"]').on('change', function() {
  for (var i = 0; i < ($(':input[type="number"]').length); i++) {
    localStorage.setItem('phone'+i, $(':input[type="number"]').eq(i).val())
  }
})

$(':input[type="number"]').on('change', function() {
  for (var i = 0; i < ($(':input[type="number"]').length); i++) {
    localStorage.setItem('phone'+i, $(':input[type="number"]').eq(i).val())
  }
})



$(':input').val(localStorage.getItem(this.id))


$("label[for='deny']").on('click', function () {
  console.log($(this))
  console.log(this)
})



$(document).ready(function() {
  for (var i = 0; i < ($(':input[type="number"]').length); i++) {
    $(':input[type="number"]').eq(i).val(localStorage.getItem('phone'+i))
  }
})

