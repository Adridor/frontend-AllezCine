$( "#moreMov" ).click(function(){
  $('.hiddenMov').fadeIn(3000);
  $('#moreMov').replaceWith($('#lessMov'))
  $('#moreMov').hide
});

$("#lessMov").click(function(){
  $('.hiddenMov').fadeOut();
  $('#lessMov').replaceWith($('#moreMov'))
})
