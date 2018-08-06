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
    showCarousels('.mob-c-1', '.mob-c-2', '.mob-c-3');
  } else {
    stopCarousel('.mob-c-1', '.mob-c-2', '.mob-c-3');
  }

  $(window).resize(function() {
    if ( $(window).width() < 481 ) {
      showCarousels('.mob-c-1', '.mob-c-2', '.mob-c-3');
    } else {
      stopCarousel('.mob-c-1', '.mob-c-2', '.mob-c-3');
    }
  });

  function showCarousels(...args) {
    for(let i = 0; i < args.length; i++) {
      let c = $(`${args[i]}`).owlCarousel({
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
      c.addClass('owl-carousel');
    }
  }

  function stopCarousel(...args) {
    for(let i = 0; i < args.length; i++) {
      let c = $(`${args[i]}`);
      c.trigger('destroy.owl.carousel');
      c.removeClass('owl-carousel');
    }
  }

  //MobileMenu
  let mobHamb = $('.m-burg-btn');
  let mobHambClose = $('.m-burg__h > span');

  mobHamb.on('click', function(){
    $(this).parent().find('.m-burg__wrap').addClass('active');
  })
  mobHambClose.on('click', function() {
    mobHamb.parent().find('.m-burg__wrap').removeClass('active');
  })

  //MobileTabs
  let tabsAnch = $('.mob-tabs-a a');
  let prev;
  tabsAnch.on('click', function(e){
    e.preventDefault();
    $(this).parent().parent().parent().find('a').removeClass('active');
    $(this).toggleClass('active');
    $(this).parent().parent().parent().find('.mob-tabs-c').has('active') ? $(this).toggleClass('active').parent().siblings('.mob-tabs-c').toggleClass('active') : $(this).parent().siblings('.mob-tabs-c').toggleClass('active');
  })

  let mapAnch = $('.mob-tabs2-a a');

  mapAnch.on('click', function(e){
    e.preventDefault();
    if($(this).parent().hasClass('active')) {
      $(this).parent().removeClass('active').siblings().removeClass('active');
    } else {
      $(this).parent().parent().parent().find('.mob-tabs2-a').removeClass('active').siblings().removeClass('active');
      $(this).parent().toggleClass('active').siblings().toggleClass('active');
    }
  })

  $('.owlc1').owlCarousel({
    loop:true,
    responsiveClass:true,
    dots: false,
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

})