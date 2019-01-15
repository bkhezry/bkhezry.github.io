$(function () {
  "use strict";
  var window_width = $(window).width();
  /*Preloader*/
  $(window).load(function () {
    setTimeout(function () {
      $('body').addClass('loaded');
      setActiveStyleSheet('black');
    }, 500);
  });
}); // end of document ready