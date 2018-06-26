$(document).ready(function(){
  // ageVerif();
  btns();
  cookies();
  logIn();
  shopbtn();
  shopbtn2();
  ajax();
});

var nbre="";


// recuperer le json
function ajax(){
  var json = $.getJSON( "./assets/js/movies.json", function(data) {
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
    var entry = '<div id="jsp' + nbre +'" class="col-2 clickImage"><a href="#" data-toggle="modal" data-target="#myModal"><img src="assets/img/' + image + '" alt="Movie - Poster"><h3 class="Finfo">'+ name +'</h3><p class="Finfo">'+ year +'<span class="textRight"> '+ Genre + '</span></p></a></div>'
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

//v�rif de l'age
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

// boutons
function btns(){
  $('#moreMov').click(function(){
    $('.addImage3').toggle();
    $('.chooseMore').toggle();
  })

  $('#moreSer').click(function(){
    $('.hiddenSer').toggle();
    $('.chooseMore').toggle();
  })
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

// $('#btnAventure').click(function(){
//   $.getJSON( "./assets/js/movies.json", function(data) {
//     for(i in data) {
//       var name = data[i].name
//       var trailer = data[i].trailer
//       var synop = data[i].synop
//       var Genre = data[i].Genre
//       var year = data[i].year
//       var real = data[i].real
//       var actor = data[i].actor
//       var price = data[i].price
//       var image = data[i].image
//       nbre = Number(data[i].nbr)
//     }
//       $.grep("./assets/js/movies.json", function(i){
//         return i ='Adventure';
//
//       }, true);
//     });
// });


//load des images dans featured movies

// function imagesLoad(){
//   $('.addImage').
// }
