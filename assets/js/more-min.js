$( "#moreMov" ).click(function(){
  $('.hiddenMov').fadeIn(1000);
  $('#moreMov').addClass('hidden')
  $('#lessMov').removeClass('hidden')
});

$("#lessMov").click(function(){
  $('.hiddenMov').fadeOut();
  $('#moreMov').removeClass('hidden')
  $('#lessMov').addClass('hidden')
})

$( "#moreSer" ).click(function(){
  $('.hiddenSer').fadeIn(1000);
  $('#moreSer').addClass('hidden')
  $('#lessSer').removeClass('hidden')
});

$("#lessSer").click(function(){
  $('.hiddenSer').fadeOut();
  $('#moreSer').removeClass('hidden')
  $('#lessSer').addClass('hidden')
})
