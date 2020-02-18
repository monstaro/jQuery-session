// const $ = require('jquery');

$('.cheese').click(function() {
	$('.cheeses').children().css('background-color', 'pink')
})

$('.tomato-sauce').click(function() {
  $('.tomato-sauce').parent().css('background-color', 'red')
})

$('.lettuce').click(() => {
  $('.lettuce').siblings().css('background-color', 'green')
  $('.lettuce').siblings().css('color', 'white')
})


$('li').click((event) => {
  // console.log(event.target)
  $(event.target).toggleClass('strikeout')
})

$('.pizza-ingredients').children('.cheeses').css('color', 'blue')

$('li').not('.dough').css('background-color', 'lightgrey')