$(document).ready(function () {
  "use strict";

  // NAV
  $('.button-collapse').sideNav({
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  }
  );

  /**************************************************************************
          Style demo
  **************************************************************************/

  $('.cv-style-switch').click(function () {
    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $('#switch-style').animate({ 'right': '0' });
    } else {
      $(this).addClass('open');
      $('#switch-style').animate({ 'right': '-300' });
    }
  });


  // Portfolio fancybox
  $(".single_image").fancybox({
    padding: 4,
  });

  //Portfolio 
  $('#portfolio-item').mixItUp();

  // Sticky nav
  $("#sticky-nav").sticky({ topSpacing: 0 });

  //Skills
  $(".determinate").each(function () {
    var width = $(this).text();
    $(this).css("width", width)
      .empty()
      .append('<i class="fa fa-circle"></i>');
  });

  //Conatct
  $('select').material_select();

  // Smooth Scroll
  $(function () {
    $('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // Blog
  jQuery(window).on('load', function () {
    var $ = jQuery;
    $('.blog').masonry({
      itemSelector: '.blog-post',
      columnWidth: '.blog-post',
      percentPosition: true
    });
  });


  //Tooltip
  $('.tooltipped').tooltip({ delay: 50 });

  //wow
  new WOW().init();

});