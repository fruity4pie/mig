$(document).ready(function() {
	$('#nav-tab a').on('click', function(e) {
		e.preventDefault()
		$(this).tab('show')
	})

	//VideoDelay
	let videoBg = $('.header-video video');
	if(videoBg.length) {
		videoBg[0].playbackRate = 0.5;
	}

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
	let mobSub = $('.m-burg__sub');
	let dBody = $('body');

	mobSub.on('click', function(e) {
		if($(e.target).hasClass('m-burg__sub')) {
			$(this).removeClass('active');
			dBody.removeClass('active');
		} else {
			e.stopImmediatePropagation();
		}
	})
	mobHamb.on('click', function(){
		$(this).parent().find('.m-burg__sub').addClass('active').find('.m-burg__wrap').addClass('active');
		dBody.addClass('active');
	})
	mobHambClose.on('click', function() {
		mobHamb.parent().find('.m-burg__sub').removeClass('active');
		dBody.removeClass('active');
	})

	let mobPhone = $('.m-phone__open');
	let mClose = $('.m-close');
	let mSub = $('.m-phone__sub');
	mSub.on('click', function(e) {
		$(e.target).hasClass('m-phone__sub') ? $(this).removeClass('active') : e.stopImmediatePropagation();
	})
	mobPhone.on('click', function(){
		$(this).parent().find('.m-phone__sub').addClass('active');
	})
	mClose.on('click', function(){
		mobPhone.parent().find('.m-phone__sub').removeClass('active');
	})

	let mobAnch = $('.m-burg__c > li > a');
	mobAnch.on('click', function(e){
		e.preventDefault();
		let url = $(this).attr('href');
		if($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else if (url) {
			window.location.href = url;
		} else {
				mobAnch.removeClass('active');
				$(this).addClass('active');
		}
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
		loop: false,
		items: 4,
		responsiveClass: true,
		nav: false,
		dots: false,
		margin: 0,
		responsive:{
			0:{
				items:2,
			},
			600:{
				items:3,
			},
			1280:{
				items:4,
				nav: true,
			},
		}
	})

	$('.owlc2').owlCarousel({
		loop: false,
		items: 4,
		responsiveClass: true,
		nav: false,
		dots: false,
		margin: 0,
		center:false,
		responsive:{
			0:{
				items:1,
			},
			600:{
				items:2,
			},
			1280:{
				items:3,
				nav: true,
			},
		}
	})

	//PageNavigation
	let pageAnch = $('.content-list-ul a');
	pageAnch.on("click", function (event) {
		event.preventDefault();
		let id = $(this).attr('href');
		let tp = $(id).offset().top;
		$('body,html').animate({scrollTop: tp}, 1500);
	});

	//MainPageAnchor
	let mainAnch = $('.view-programms');
	let targetBlock = $('.freedom');

	mainAnch.on("click", function (event) {
		event.preventDefault();
		let id = $(this).attr('href');
		let tp = $(id).offset().top;
		let blockHeight = targetBlock.outerHeight();
		let tarHeight = tp + blockHeight / 2;
		$('body,html').animate({scrollTop: tarHeight}, 1500);
		targetBlock.find('.hidden-block').addClass('active');
	});

	//HiddenBlocks
	let fadeList = $('.freedom .hidden-block');
	let btnShowList = $('.freedom .btn');
	btnShowList.on('click', function(e){
		e.preventDefault();
		fadeList.toggleClass('active');
	})

	//Map
	let mapLinks = $('.world__nav-h a');
	let markers = $('.markers__item');
	mapLinks.on('click', function(e) {
		e.preventDefault();
		let data = $(this).data('info');
		markers.find('.markers__hidden').removeClass('active').parent().removeClass('active').find('svg path').css({'fill': '#000'});
		markers.filter(function(item, index) {
			return $(this).data('info') == data;
		}).find('.markers__hidden').addClass('active').parent().addClass('active').find('svg path').css({'fill': '#3468e8'});
	})

	let mapMarkers = $('.map .markers > div');
	mapMarkers.each(function(index, item) {
		let leftPos = $(this).data('left');
		let topPos = $(this).data('top');
		let targetElem = $(this).find('.markers__hidden');
		let elemWidth = $(this).find('.markers__hidden').outerWidth();
		if(leftPos > 65 && topPos > 60 ) {
			targetElem.css({
				"left": `${-elemWidth}px`,
				"top": `${-5}px`
			})
		}
	})

	let headerPopUp = $('.js-cons');
	let popUp = $('.popup');
	let closePopUp = $('.free-c__close');
	headerPopUp.on('click', function(e){
		e.preventDefault();
		let anchId = $(this).attr('href');
		let target = popUp.find(anchId);
		popUp.addClass('active');
		target.addClass('active');
	})

	closePopUp.on('click', function(e){
		e.preventDefault();
		popUp.removeClass('active');
		$(this).parent().removeClass('active');
	})

	popUp.on('click', function(e){
		$(e.target).hasClass('popup') ? $(this).removeClass('active').find('.free-c').removeClass('active') : e.stopImmediatePropagation();
	})

	let factsTabs = $('.facts-t__i');

	factsTabs.on('click', function(){
		if($(this).hasClass('active')) {
			$(this).removeClass('active').find('h4').removeClass('active').parent().parent().find('.facts-t__c').removeClass('active');
		}
		else {
			factsTabs.removeClass('active').find('h4').removeClass('active').parent().parent().find('.facts-t__c').removeClass('active');;
			$(this).addClass('active').find('h4').addClass('active').parent().parent().find('.facts-t__c').addClass('active');
		}
	})

	//Uslugi Anchors
	let uslugiAnch = $('.header-uslugi-anch a');
	let headerAnch = $('.header-uslugi .btn');
	let fixedBlock = $('.header-uslugi-anch');

	uslugiAnch.on("click", function (event) {
		event.preventDefault();
		let id = $(this).attr('href');
		let tp = $(id).offset().top;
		$('body,html').animate({scrollTop: tp - 90}, 1500);
	});

	headerAnch.on("click", function (event) {
		event.preventDefault();
		let id = $(this).attr('href');
		let tp = $(id).offset().top;
		$('body,html').animate({scrollTop: tp - 90}, 1500);
	});

	//UslugiFixedAnchorsMenu
	if(fixedBlock.length) {
		let fixedBlockTop = fixedBlock.offset().top;
		$(window).scroll(function() {
			if($(this).scrollTop() <= fixedBlockTop){
				fixedBlock.removeClass('fixed');
			}
			else {
				fixedBlock.addClass('fixed');
			}
		});
	}

	//Rubric
	let rubAnch = $('.rubric-a');
	let rubHidden = $('.rubric-h');

	rubAnch.on('click', function(){
		rubHidden.toggleClass('active');
	})

	let propNavAnch = $('.build-nav a');
	propNavAnch.on('click', function(e){
		e.preventDefault();
		propNavAnch.removeClass('active');
		$(this).addClass('active');
	})

	let listOfDoc = $('.stage-doc-drop');
	listOfDoc.on('click', function(){
		listOfDoc.find('.stage-doc-drop-hidden').toggleClass('active');
	})

	//Rating
	let ratAnch = $('.vote-post a');
	ratAnch.on('click', function(e){
		e.preventDefault();
		$(this).next().toggleClass('hidden');
	})

	//TabletComparision
	let compAnch = $('.comp-h-rub__i > a');
	if( $(window).width() < 768 ) {
		compAnch.on('click', function(e){
			e.preventDefault();
			if($(this).next().hasClass('active')) {
				$(this).next().removeClass('active');
			} else {
				$(this).parent().parent().find('.childs-list').removeClass('active');
				$(this).next().addClass('active');
			}
		})
	}

	//ShowMoreReviews
	let reviewsAnch = $('.reviews .show-more');
	reviewsAnch.on('click', function(e){
		e.preventDefault();
		$(this).parent().find('.reviews-b__wrap').toggleClass('active');
		$(this).text() == vb_libs.vb_read_more ? $(this).text(vb_libs.vb_hide) : $(this).text(vb_libs.vb_read_more);
	})
});
