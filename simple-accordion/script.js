$('.accordion h2').click(function(e) {
  if(!$(this).parent().hasClass('open')){
  $('.accordion .open article').slideUp(); 
  $('.accordion .item').removeClass('open');
  $(this).parent().addClass('open');
  $(this).next().slideDown();
  }
});