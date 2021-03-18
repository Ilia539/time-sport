// ..........SLIDER section.......
$(document).ready(function(){
    $('.slider').slick({
      autoplay: false,
      autoplaySpeed: 4500,
      speed: 1000,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            arrows: false,
            infinite: true
          }
        }
      ]
    });
  });
// ..............SLIDER WELCOME section....
  $(document).ready(function(){
    $('.welcome__row').slick({
      infinite: true,
      adaptiveHeight: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 965,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: true,
            dots: true,
            arrows: false,
            infinite: true
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false,
            infinite: true,
            adaptiveHeight: true,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
// .............SLIDER TEAM section
  $(document).ready(function(){
    $('.team__inner').slick({
      infinite: true,
      adaptiveHeight: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1053.5,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            adaptiveHeight: true,
            dots: true,
            arrows: false,
            infinite: true
          }
        },
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 2,
            dots: true,
            arrows: false,
            infinite: true,
            adaptiveHeight: true,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 624,
          settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false,
            infinite: true,
            adaptiveHeight: true,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

  // ..................PARTNERS SLIDER..........

  $(document).ready(function(){
    $('.partners__slider').slick({
      autoplay: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      autoplaySpeed: 5500,
      responsive: [
        {
          breakpoint: 1030,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: true,
            infinite: true
          }
        },
        {
          breakpoint: 840,
          settings: {
            slidesToShow: 3,
            arrows: true,
            infinite: true,
            adaptiveHeight: true,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 705,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            adaptiveHeight: true,
            infinite: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            adaptiveHeight: false,
            infinite: true
          }
        }
      ]
    });
  });
  // ...........BURGER MENU...........
  $(document).ready(function() {
    $('.header__burger').click(function(event) {
      $('.header__burger,.header__nav').toggleClass('active');
      $('body').toggleClass('lock');
    });
  });
  // .......SCROLL EASY...
  $(document).ready(function() {
    $('.header-link').click(function() {
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top + 'px'
      }, {
        duration: 1000,
        easing: 'swing'
      });
      return false;
      });
    });

    $(document).ready(function() {
  $('.overlay-link').magnificPopup({type:'image'});
  
});
// ........MODAL WINDOW..........
$('a.overlay-link').click(function(event) {
  $(this).modal({
    fadeDuration: 300,
    fadeDelay: 1.5
  });
  return false;
});
 
