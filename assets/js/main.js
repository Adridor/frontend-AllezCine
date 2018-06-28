var nbre="";
var x=1;
var y=2;
var indexOfShop = 1;


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

//shop
function ajaxShop(){
  $.getJSON("./assets/js/series.json",function(data){
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
      var entry = '<div id="jsp' + nbre +'" class="col clickframeShop b'+ Genre +'"><a href="#" "><img src="assets/img/' + image + '" alt="Movie - Poster"><h3 class="Finfo">'+ name +'</h3><p class="Finfo">'+ year +'<span class="textRight"> '+ Genre + '</span></p></a></div>'
      var y = data.indexOf(data[i]);
      if (y < 4) {
        $(entry).appendTo($('.addImageToShop2'));
      }else if (y < 8) {
        $(entry).appendTo($('.addImageToShop'));
      }
    }
  });
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
//mettre a jour le iframe du shop
$(document).on("click",".clickframeShop", function(){
  event.preventDefault();
  let source = $(this).attr('id');
  let index2 = (Number(source.slice(3))-1);
  $.getJSON( "./assets/js/movies.json", function(data) {
    var name = data[index2].name
    var trailer = data[index2].trailer
    var synop = data[index2].synop
    var Genre = data[index2].Genre
    var year = data[index2].year
    var price = data[index2].price
    $('#iframeTitre').html(name);
    $('#iframeTrail').prop('src', trailer)
    $('#iframeSynop').html('<span> '+ synop +'</span>');
    $('#iframeYear').html('<span>'+year+'</span>');
    $('#iframeGenre').html('<span>'+ Genre +'</span>');
    $('#iframeprice').html('<span>'+ price+'</span>');
  });
})
// fonction pour les boutons du shop
function shopDefil() {
  $.getJSON( "./assets/js/movies.json", function(data) {
    $(document).on("click","#btnRight", function(){
      indexOfShop ++;
      var name = data[indexOfShop].name
      var trailer = data[indexOfShop].trailer
      var synop = data[indexOfShop].synop
      var Genre = data[indexOfShop].Genre
      var year = data[indexOfShop].year
      var price = data[indexOfShop].price
      $('#iframeTitre').html(name);
      $('#iframeTrail').prop('src', trailer)
      $('#iframeSynop').html('<span> '+ synop +'</span>');
      $('#iframeYear').html('<span>'+year+'</span>');
      $('#iframeGenre').html('<span>'+ Genre +'</span>');
      $('#iframeprice').html('<span>'+ price+'</span>');
      $('#btnLeft').removeAttr('disabled');
      if (indexOfShop >= 10) {
        $('#btnRight').attr('disabled', 'true');
      };
    });
    $(document).on("click","#btnLeft", function(){
          indexOfShop --;
          var name = data[indexOfShop].name
          var trailer = data[indexOfShop].trailer
          var synop = data[indexOfShop].synop
          var Genre = data[indexOfShop].Genre
          var year = data[indexOfShop].year
          var price = data[indexOfShop].price
          $('#iframeTitre').html(name);
          $('#iframeTrail').prop('src', trailer)
          $('#iframeSynop').html('<span> '+ synop +'</span>');
          $('#iframeYear').html('<span>'+year+'</span>');
          $('#iframeGenre').html('<span>'+ Genre +'</span>');
          $('#iframeprice').html('<span>'+ price+'</span>');
          $('#btnRight').removeAttr('disabled');
          if (indexOfShop == 0) {
            $('#btnLeft').attr('disabled', 'true');
          }
      });
    });
}
//verif de l'age
function ageVerif() {
  let age = prompt("Please enter your age !");
  age = parseInt(age);

  while(isNaN(age) || age < 18) {

      if(isNaN(age)){
          age = prompt("Please enter your age !");
      }

      else if(age < 18){
          window.location.href = "https://www.imdb.com";
          break;
      }
  }
}

// boutons plus moins series
  $('#moreMov').click(function(){
    $('.addImage3').toggle();
    $('.chooseMore').toggle();
  })
  $('#moreSer').click(function(){
    $('.hiddenSer').toggle();
    $('.chooseMoreSer').toggle();
  })
// Hide cookies alert
  $('#btnAcceptCookies').on('click', function() {
    $('#cookiesAlert').css('display', 'none');
  });
// Login et register
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
  //SF
  $('#FeatMov').on("click","#btnSF", function(){
    $('.Comedie').hide();
    $('.Adventure').hide();
    $('.Dramatique').hide();
    $('.Thriller').hide();
    $('.Horreur').hide();
    $('.Dramatique').hide();
    $('.Science-fiction').appendTo($('.addImage1'));
    $('#moreMov').addClass('hidden');
  });

$(document).ready(function(){
  // ageVerif();
  ajax();
  ajax2();
  ajaxShop();
  shopDefil();
});
