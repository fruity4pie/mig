$(document).ready(function() {
  $('#nav-tab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  $('#nav-tab2 a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  })

  if( $(window).width() < 481 ) {
    showCarousels();
  } else {
    $('.mob-c-1').removeClass('owl-carousel');
  }

  $(window).resize(function() {
    if ( $(window).width() < 481 ) {
      showCarousels();
      $('.mob-c-1').addClass('owl-carousel');
    } else {
      stopCarousel();
    }
  });

  function stopCarousel() {
    var owl = $('.mob-c-1');
    owl.trigger('destroy.owl.carousel');
    owl.removeClass('owl-carousel');
  }

  $('.owlc1').owlCarousel({
    loop:true,
    responsiveClass:true,
    margin: 0,
    responsive:{
      0:{
        items:2,
      },
      600:{
        items:3,
      },
      1000:{
        items:4,
      },
    }
  })

  $('.owlc2').owlCarousel({
    loop:true,
    margin: 0,
    responsive:{
      0:{
        items:2,
      },
      600:{
        items:3,
      },
      1000:{
        items:4,
      }
    }
  })

  $('.owlc3').owlCarousel({
    loop:true,
    margin: 0,
    responsive:{
      0:{
        items:2,
      },
      600:{
        items:3,
      },
      1000:{
        items:4,
      }
    }
  })

  let headerPopUp = $('.js-cons');
  let popUp = $('.popup');
  let closePopUp = $('.free-c__close');

  headerPopUp.on('click', function(e){
    e.preventDefault();
    popUp.addClass('active');
  })

  closePopUp.on('click', function(e){
    e.preventDefault();
    popUp.removeClass('active');
  })

  function showCarousels() {
    $('.mob-c-1').owlCarousel({
      loop: true,
      responsiveClass: true,
      nav: false,
      dots: true,
      autoHeight:true,
      responsive:{
        0:{
          items:1,
        }
      }
    })

    $('.mob-c-2').owlCarousel({
      loop: true,
      responsiveClass: true,
      center: true,
      margin: 10,
      nav: false,
      dots: true,
      responsive:{
        0:{
          items:1,
        }
      }
    })

    $('.mob-c-3').owlCarousel({
      loop: true,
      responsiveClass: true,
      center: true,
      margin: 10,
      nav: false,
      dots: true,
      responsive:{
        0:{
          items:1,
        }
      }
    })
  }


})