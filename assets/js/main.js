$(document).ready(function(){
  // ageVerif();
  btns();
  cookies();
});




//vérif de l'age
function ageVerif() {
  let age = prompt("Please enter your age !");
  age = parseInt(age);
  while(isNaN(age) || age < 18) {

      if(isNaN(age)){
          age = prompt("Please enter your age !");
      }

      if(0 < age < 18){
          // window.location.href = "https://www.imdb.com";
          console.log('test');
          break;
      }
  }
}



// boutons
function btns(){
$( '#moreMov' ).click(function(){
  $('.hiddenMov').fadeIn(1000);
  $('#moreMov').addClass('hidden');
  $('#lessMov').removeClass('hidden');
});

$('#lessMov').click(function(){
  $('.hiddenMov').fadeOut();
  $('#moreMov').removeClass('hidden');
  $('#lessMov').addClass('hidden');
});

$( '#moreSer' ).click(function(){
  $('.hiddenSer').fadeIn(1000);
  $('#moreSer').addClass('hidden');
  $('#lessSer').removeClass('hidden');
});

$('#lessSer').click(function(){
  $('.hiddenSer').fadeOut();
  $('#moreSer').removeClass('hidden');
  $('#lessSer').addClass('hidden');
});
}

// Hide cookies alert
function cookies(){
$('#btnAcceptCookies').on('click', function() {
    $('#cookiesAlert').css('display', 'none');
});
}
