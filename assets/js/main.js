var nbre="";
var x=1;
var y=2;


// recuperer le json des films
function ajax(){
  $.getJSON( "./assets/js/movies.json", function(data) {
  for(i in data) {
    var name = data[i].name
    var trailer = data[i].trailer
    var synop = data[i].synop
    var Genre = data[i].Genre
    var year = data[i].year
    var real = data[i].real
    var actor = data[i].actor
    var price = data[i].price
    var image = data[i].image
    nbre = Number(data[i].nbr)
    var entry = '<div id="jsp' + nbre +'" class="col clickImage '+ Genre +'"><a href="#" data-toggle="modal" data-target="#myModal"><img src="assets/img/' + image + '" alt="Movie - Poster"><h3 class="Finfo">'+ name +'</h3><p class="Finfo">'+ year +'<span class="textRight"> '+ Genre + '</span></p></a></div>'
    var y = data.indexOf(data[i]);
    if ( y > 11) {
      $(entry).appendTo($('.addImage3'));

    }else if (y > 5) {
      $(entry).appendTo($('.addImage2'));
    }else {
      $(entry).appendTo($('.addImage1'));
    }
  }
})
}
// recuperer le json des films
function ajax2(){
  $.getJSON( "./assets/js/series.json", function(data) {
  for(i in data) {
    var name = data[i].name
    var trailer = data[i].trailer
    var synop = data[i].synop
    var Genre = data[i].Genre
    var year = data[i].year
    var real = data[i].real
    var actor = data[i].actor
    var price = data[i].price
    var image = data[i].image
    nbre = Number(data[i].nbr)
    var entry = '<div id="jsp' + nbre +'" class="col clickImage a'+ Genre +'"><a href="#" data-toggle="modal" data-target="#myModal"><img src="assets/img/' + image + '" alt="Movie - Poster"><h3 class="Finfo">'+ name +'</h3><p class="Finfo">'+ year +'<span class="textRight"> '+ Genre + '</span></p></a></div>'
    var y = data.indexOf(data[i]);
    if ( y > 11) {
      $(entry).appendTo($('.addImage6'));

    }else if (y > 5) {
      $(entry).appendTo($('.addImage5'));
    }else {
      $(entry).appendTo($('.addImage4'));
    }
  }
})
}

// completer le modal
$(document).on("click", ".clickImage", function (){
  let source = $(this).attr('id');
  let index2 = (Number(source.slice(3))-1);
  $.getJSON( "./assets/js/movies.json", function(data) {
        var name = data[index2].name
        var trailer = data[index2].trailer
        var synop = data[index2].synop
        var Genre = data[index2].Genre
        var year = data[index2].year
        var real = data[index2].real
        var actor = data[index2].actor
        var price = data[index2].price
        var image = data[index2].image
        nbre = Number(data[index2].nbr)

        $('#modTitre').html(name);
        $('#modFrame').prop('src', trailer)
        $('#modSynop').html('<h4 class="RR">Synopsis:</h4>'+ synop);
        $('#modReal').html('<h4 class="RR">Realisateur:</h4>' + real);
        $('#modYear').html('<h4 class="RR">Annee:</h4>' + year);
        $('#modGenre').html('<h4 class="RR"> Genre:</h4>' + Genre);
        $('#modActor').html('<h4 class="RR">Acteurs:</h4>' + actor);
      }
    );
});

//verif de l'age
function ageVerif() {
  let age = prompt("Please enter your age !");
  age = parseInt(age);

  while(isNaN(age) || age < 18) {

      if(isNaN(age)){
        console.log('bit');
          age = prompt("Please enter your age !");
      }

      else if(age < 18){
          // window.location.href = "https://www.imdb.com";
          console.log('moins de 18');
          break;
      }
  }
}

// boutons plus moins series
function btns(){
  $('#moreMov').click(function(){
    $('.addImage3').toggle();
    $('.chooseMore').toggle();
  })

  $('#moreSer').click(function(){
    $('.hiddenSer').toggle();
    $('.chooseMoreSer').toggle();
  })
}

// Hide cookies alert
function cookies(){
  $('#btnAcceptCookies').on('click', function() {
    $('#cookiesAlert').css('display', 'none');
  });
}
// Login et register

function logIn(){
  $('#login').click(function(){
    $('#loginForm').removeClass('hidden');
    $('#cancel').click(function(){
      $('.login').hide();
    });
    $('#createAcc').click(function(){
        $('#loginForm').addClass('hidden');
        $('.register').removeClass('hidden');
        $('#cancelReg').click(function(){
          $('.register').addClass('hidden');
        });
    });
  })
  $('#register').click(function(){
    $('#registerForm').removeClass('hidden');
    $('#cancelReg').click(function(){
      $('#loginForm').hide();
      $('#registerForm').addClass('hidden');
    });
  })
}

// fonction pour les boutons du shop

function shopbtn() {
  $('#btnRight').click(function(){
    if (x < 6) {
      $('.iframe'+ x).addClass('hidden');
      // console.log(x);
      // console.log(y);
      $('.iframe'+ y).removeClass('hidden');
      // console.log('test');
      x++;
      y++;
    }else if (x >6) {
      $('.iframe6').addClass('hidden');
      $('.iframe1').remmoveClass('hidden');
      x=1;
      y=2;
      // console.log('maybe');
    }

  });
}
function shopbtn2() {
  $('#btnLeft').click(function(){
    if (x > 0) {
      x--;
      y--;
      // console.log(x);
      // console.log(y);
      $('.iframe' + y).addClass('hidden');
      $('.iframe' + x).removeClass('hidden');
      // console.log('test-1');
    }else {
      // console.log('rat�');
    }

  });
}

//tri par genre
  //aventrue
$('#FeatMov').on("click","#btnAventure", function(){
  $('.Comedie').hide();
  $('.Science-fiction').hide();
  $('.Dramatique').hide();
  $('.Thriller').hide();
  $('.Horreur').hide();
  $('.Dramatique').hide();
  $('.Adventure').appendTo($('.addImage1'));
  $('#moreMov').addClass('hidden');
});
  //comédie
  $('#FeatMov').on("click","#btnComedie", function(){
    $('.Adventure').hide();
    $('.Science-fiction').hide();
    $('.Dramatique').hide();
    $('.Thriller').hide();
    $('.Horreur').hide();
    $('.Dramatique').hide();
    $('.Comedie').appendTo($('.addImage1'));
    $('#moreMov').addClass('hidden');
  });

$(document).ready(function(){
  // ageVerif();
  ajax();
  ajax2();
  btns();
  logIn();
});
