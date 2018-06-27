$(function(){
var numberOfIframe = $('.movShop .iframe').length;
console.log(numberOfIframe);
$('.iframe:gt(0)').hide();
$('#btnRight').on('click', function() {
  var currentPage = $('.iframe').index();
  console.log('Tu cliques sur ' + currentPage);
    if ($(this).hasClass('active')) {
      return false;
    } else {S
      currentPage++;
      $('#btnRight').removeClass('active');
      $('.iframe').hide();
      for (var i = 1; i < numberOfIframe; i++){
         $('iframe:eq(' + i + ')').show();
       }
      $('#btnRight:eq(' + (currentPage - 1) + ')').addClass('active');
    }
})
});