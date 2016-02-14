console.log('It does not do to dwell on dreams and forget to live');

$(document).ready(function(){

  $('.special.cards .image').dimmer({
    on: 'hover'
  });

  $(window).scroll(function(){
    // console.log($(window).scrollTop())
    if ($(window).scrollTop() > 20) {
      $('#scroll').addClass('hidden');
    }
    if ($(window).scrollTop() < 20) {
      $('#scroll').removeClass('hidden');
    }
    if ($(window).scrollTop() > 645) {
      $('#nav-bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 645) {
      $('#nav-bar').removeClass('navbar-fixed');
    }
  });

})