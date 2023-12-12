$(function(){
    $('.toggle-menu').click(function(e){
      e.preventDefault();
      $('.sidebar').toggleClass('toggled');
    });
  });