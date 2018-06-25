$(document).ready(function(){
  // ageVerif();
  btns();
  cookies();
  logIn();
  shopbtn();
  shopbtn2();
  submit();
});


console.log(typeof Fname);

//vérif de l'age
function ageVerif() {
  let age = prompt("Please enter your age !");
  age = parseInt(age);
  while(isNaN(age) || age < 18) {

      if(isNaN(age)){
          age = prompt("Please enter your age !");
      }

      if(age < 18){
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

function logIn(){
  $('#login').click(function(){
    $('.login').removeClass('hidden');
    $('body').css('oveflow', 'hidden');
    $('#cancel').click(function(){
      $('.login').addClass('hidden');
    });
    $('#createAcc').click(function(){
        $('.login').addClass('hidden');
        $('.register').removeClass('hidden');
        $('#cancelReg').click(function(){
          $('.register').addClass('hidden');
        });
    });
    $('totalScreen').click(function(){
      $('.login').addClass('hidden');
    })
  })
  $('#register').click(function(){
    $('.register').removeClass('hidden');
    $('body').css('oveflow', 'hidden');
    $('#cancelReg').click(function(){
      $('.register').addClass('hidden');
    });
  })
}

// fonction pour les boutons du shop
var x=1;
var y=2;
function shopbtn() {
  $('#btnRight').click(function(){
    if (x < 6) {
      $('.iframe'+ x).addClass('hidden');
      console.log(x);
      console.log(y);
      $('.iframe'+ y).removeClass('hidden');
      console.log('test');
      x++;
      y++;
    }else if (x >6) {
      $('.iframe6').addClass('hidden');
      $('.iframe1').remmoveClass('hidden');
      x=1;
      y=2;
      console.log('maybe');
    }

  });
}
function shopbtn2() {
  $('#btnLeft').click(function(){
    if (x > 0) {
      x--;
      y--;
      console.log(x);
      console.log(y);
      $('.iframe' + y).addClass('hidden');
      $('.iframe' + x).removeClass('hidden');
      console.log('test-1');
    }else {
      console.log('raté');
    }

  });
}


// $('#LOTR').click(function(){
//   $('.modalLOTR').removeClass('hidden');
//   console.log('test');
// })
