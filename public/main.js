console.log('Thank you for visiting my site!');

$(document).ready(function(){

  $('.special.cards .image').dimmer({
    on: 'hover'
  });

  $(window).scroll(function(){
    // console.log($(window).scrollTop())
    if ($(window).scrollTop() > 375) {
      $('#nav-bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 375) {
      $('#nav-bar').removeClass('navbar-fixed');
    }
  });

})