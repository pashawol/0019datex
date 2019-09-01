var $ = jQuery;
var btnToggle = $(".toggle-menu-mobile--js"),
	menu = $(".menu-mobile--js")
	body = $('body')
html = $('html')
var parent = $(".s-segments  ")

// Pace.on('start', function () {
// 	document.documentElement.className += " loading-proccessing";
// });

// Pace.on('hide', function () {
	 
// 	body.removeClass('prld-on');
// });

jQuery(document).ready(function ($) {
	var wow = new WOW({
		mobile: false
	});
	wow.init();
	setTimeout(function () {
	
		// JSCCommon.mobileMenu();
	}, 100); 

	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/Landing2.0.jpg);"></div>')
	parent.on('mouseenter', 'li', function () {
		// $(".s-segments picture  ").html($(this).find("picture").html)
		// $(this).find("picture").removeClass('active');
		$(this).parents(".tabs__content2").find("picture").eq($(this).index()).addClass('active').siblings().removeClass('active')
	})


	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});


	JSCCommon.magnificPopupCall();

	JSCCommon.tabscostume('tabs');
	JSCCommon.tabscostume('tabs2');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();
	
	var $d3 = $(".input-range-js");
		 

	$d3.ionRangeSlider({
		skin: "round",
		hide_min_max: 'true',
		// hide_from_to: 'true',
		grid: true,         // default false (enable grid)
		// grid_num: 100,        // default 4 (set number of grid cells)
		step: 1,    
		grid_snap: false   // default false (snap grid to step)
	});

	$d3.on("change", function () {
		var $inp = $(this);
		var from = $inp.prop("value"); // reading input value
		// var from2 = $inp.data("from"); // reading input data-from attribute

		$('.counter-js').text(from); // FROM value
	});


	// $(".main-wrapper").after('<div class="screen" style="background-image: url(screen/psd.png);"></div>')

	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню

	function heightses() {
		var topH = $(".header-block").height();

		function fixedMenu() {
			var topNav = $('.top-line--js  ');
			if ($(this).scrollTop() > topNav.height()) {
				setTimeout(function () {
					topNav.addClass('top-ready');

				}, .6);
				// topNav.addClass('top-top');
			} else {
			 
				topNav.removeClass('top-ready');
			}
			
			if ($(this).scrollTop() > (topH / 4)) {
				setTimeout(function () {
					topNav.addClass('fixed-ready');

				}, .6);
				// topNav.addClass('fixed-top');
			} else {
			 
				topNav.removeClass('fixed-ready');
			}



			if ($(this).scrollTop() > (topH * .8)) {
				topNav.addClass('fixed').removeClass('fixed-top');
			} else {
				if (topNav.hasClass('fixed')) {

					topNav.removeClass('fixed').addClass('fixed-top');
				}
			}
			
			if ($(this).scrollTop() > (topH )) {
				$(".top-line__tel--mob").addClass('active');
			} else {
				$(".top-line__tel--mob").removeClass('active');
			}

		}
		fixedMenu();
		$(window).scroll(function () {
			fixedMenu();
		});
		var w = $(window).width();
 
		$(window).scroll(function () {
			if ($(this).scrollTop() > topH) {
				$('.top-nav  ').addClass('fixed');
			} else {
				$('.top-nav  ').removeClass('fixed');
			}
		});
 
	}

	$(window).resize(function () {
		heightses();

	});
	
	
	heightses();


	// $(".page-top-block").css("margin-top": $('.top-line').height());
		

	
	// листалка по стр
	$(" .menu-mobile ul a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
	 
				var destination = $(elementClick).offset().top;
				// console.log(elementClick.replace( '/'));

				$('html, body').animate({ scrollTop: destination }, 800);
				
				return false;
				
	});


	$(" .toggle-menu-mobile--js").click(function () {
		$(".top-line-search").toggleClass("search-disable")
	});
	
	
	$(" .menu-item-has-children").click(function (e) {
		e.preventDefault();
		$(".top-line-search").toggleClass("search-disable");
		$(".top-submenu--js").slideToggle(1000);
		$(this).toggleClass("active")
	});

	// slider
	$(".section").each(function () {
		var slider = {
			slidesPerView: 1, 
			spaceBetween: 0,
			lazy: {
				loadPrevNext: true,
			},
			pagination: {
				el: $(this).find('.swiper-pagination'),
				clickable: true,
			},

			navigation: {
				nextEl: $(this).find('.swiper-button-next'),
				prevEl: $(this).find('.swiper-button-prev'),
			},
			loop: true,
		}
		var swiper2 = new Swiper($(this).find('.slider--js'), slider);
		var swiper3 = new Swiper($(this).find('.slider--js2'), slider);
	});


	var swiper = new Swiper('#catalog-slider--js', {
		slidesPerView: 1,
		spaceBetween: 10,
		breakpointsInverse: true,
		speed: 400,
		loop: true,
		pagination: {
			el: $(this).find('.swiper-pagination'),
			clickable: true,
		},
		navigation: {
			nextEl: ('.s-catalog-slider__slider-next'),
			prevEl: ('.s-catalog-slider__slider-prev'),
		},
		breakpoints: {

			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},

			768: {
				slidesPerView: 2,
				spaceBetween: 30
			},

			1100: {
				slidesPerView: 3,
				spaceBetween: 20
			}
		}
	})




	// $(".section").each(function () {
	// 	var slider = {
	// 		slidesPerView: 1, 
	// 		spaceBetween: 0,
	// 		lazy: {
	// 			loadPrevNext: true,
	// 		},
	// 		pagination: {
	// 			el: $(this).find('.swiper-pagination'),
	// 			clickable: true,
	// 		},

	// 		navigation: {
	// 			nextEl: $(this).find('.swiper-button-next'),
	// 			prevEl: $(this).find('.swiper-button-prev'),
	// 		},
	// 		loop: true,
	// 	}
	// 	var swiper2 = new Swiper($(this).find('#catalog-slider--js'), slider);
	// 	// var swiper3 = new Swiper($(this).find('.slider--js2'), slider);
	// });


	$('.popup-with-move-anim').click(function () {
		var th = $(this);
		$(th.attr('href')).find(".order").val(th.data('order'));
 
		
		$(th.attr('href')).find(".form-wrap__title--js").html(th.data('title')); 
		$(th.attr('href')).find(".form-wrap__title-sub--js").html('Заполните форму и&nbsp;мы&nbsp;свяжемся с&nbsp;Вами в&nbsp;течение 15&nbsp;минут'); 
		$(th.attr('href')).find(".form-wrap__btn").text(th.data('btn'));
		if ($(this).hasClass("s-doc__btn")) {

			$(th.attr('href')).find(".form-wrap__title-sub--js").html('Заполните форму, и&nbsp;мы&nbsp;пришлем на&nbsp;ваш e-mail презентацию'); 
		}
			// $(th.attr('href')).find(".btn-name").text(th.data('btn'));
	})
	$(".s-team__btn").click(function(){
		var th = $(this);
		var modal = $(th.attr('href'));
		modal.find("h3").html(th.data('title')); 
		modal.find(".modal-team__small-text").html(th.data('prof')); 
		modal.find("p").html(th.data('text')); 
		order  =  th.data('btn');
		modal.find(".modal-team__btn").attr('data-order', order) ; 
		modal.find("picture").html(th.parent().find('picture').html())

	})


	$(".accordion__head").click(function(){
		$(this).next().slideToggle().parent().toggleClass('active');
	})

	$(".s-ways__btn ").click(function(){
		$(this).parents(".s-ways__page").hide().removeClass("active").next().fadeIn().addClass("active");
		$('html, body').animate({ scrollTop: $(".s-ways__wrapper").offset().top - 100}, 500);
		 
		
	})
	
	$(" .form-wrap__btn-back").click(function(){
		$(this).parents(".s-ways__page").hide().removeClass("active").prev().fadeIn().addClass("active");
		$('html, body').animate({ scrollTop: $(".s-ways__wrapper").offset().top - 100}, 500);
	})
	
});
JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX

	// функции для запуска lazy
	// функции для запуска lazy
	// LazyFunction: function () {
	// 	// Для лэзи загрузки 

	// 	document.addEventListener("DOMContentLoaded", function () {
	// 		var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
	// 		var active = false;

	// 		const lazyLoad = function () {
	// 			if (active === false) {
	// 				active = true;

	// 				setTimeout(function () {
	// 					lazyImages.forEach(function (lazyImage) {
	// 						var imgWrapper = lazyImage.parentNode.clientHeight + 500;
	// 						if (((lazyImage.getBoundingClientRect().top - imgWrapper) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + imgWrapper) >= 0) && getComputedStyle(lazyImage).display !== "none") {
	// 							lazyImage.src = lazyImage.dataset.src;
	// 							// lazyImage.srcset = lazyImage.dataset.srcset;
	// 							lazyImage.classList.remove("lazy");

	// 							lazyImages = lazyImages.filter(function (image) {
	// 								return image !== lazyImage;
	// 							});

	// 							if (lazyImages.length === 0) {
	// 								document.removeEventListener("scroll", lazyLoad);
	// 								window.removeEventListener("resize", lazyLoad);
	// 								window.removeEventListener("orientationchange", lazyLoad);
	// 								window.addEventListener("DOMContentLoaded", lazyLoad);
	// 							}
	// 						}
	// 					});

	// 					active = false;
	// 				}, 200);
	// 			}
	// 		};

	// 		document.addEventListener("scroll", lazyLoad);
	// 		window.addEventListener("resize", lazyLoad);
	// 		window.addEventListener("orientationchange", lazyLoad);
	// 		window.addEventListener("DOMContentLoaded", lazyLoad);
	// 	});


	// 	// лэзи 
	// 	document.addEventListener("DOMContentLoaded", function () {
	// 		var lazyImages = [].slice.call(document.querySelectorAll(".lazy-sourse"));
	// 		var active = false;

	// 		const lazyLoad = function () {
	// 			if (active === false) {
	// 				active = true;

	// 				setTimeout(function () {
	// 					lazyImages.forEach(function (lazyImage) {
	// 						var imgWrapper = lazyImage.parentNode.clientHeight + 500;
	// 						if (((lazyImage.getBoundingClientRect().top - imgWrapper) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + imgWrapper) >= 0) && getComputedStyle(lazyImage).display !== "none") {
	// 							// lazyImage.parentElement.style.backgroundImage = 'url(' + lazyImage.dataset.src + ')';
	// 							// lazyImage.src = lazyImage.dataset.src;
	// 							lazyImage.srcset = lazyImage.dataset.srcset;
	// 							// lazyImage.classList.remove("lazy");

	// 							lazyImages = lazyImages.filter(function (image) {
	// 								return image !== lazyImage;
	// 							});

	// 							if (lazyImages.length === 0) {
	// 								document.removeEventListener("scroll", lazyLoad);
	// 								window.removeEventListener("resize", lazyLoad);
	// 								window.removeEventListener("orientationchange", lazyLoad);
	// 								window.addEventListener("DOMContentLoaded", lazyLoad);
	// 							}
	// 						}
	// 					});

	// 					active = false;
	// 				}, 200);
	// 			}
	// 		};

	// 		document.addEventListener("scroll", lazyLoad);
	// 		window.addEventListener("resize", lazyLoad);
	// 		window.addEventListener("orientationchange", lazyLoad);
	// 		window.addEventListener("DOMContentLoaded", lazyLoad);
	// 	});

	// },

	// /LazyFunction

	magnificPopupCall: function () {
		$('.popup-with-move-anim').magnificPopup({
			type: 'inline',

			fixedContentPos: true,
			fixedBgPos: true,

			overflowY: 'auto',

			closeBtnInside: true,
			preloader: false,

			midClick: true,
			removalDelay: 300,
			mainClass: 'my-mfp-zoom-in',
			tClose: 'Закрыть (Esc)',
		});

		// / modal window

		// modal галерея
		$(".gal").each(function () {

			$(this).find("a").magnificPopup({
				type: 'image',
				closeOnContentClick: false,
				closeBtnInside: false,
				mainClass: 'mfp-with-zoom mfp-img-mobile',
				tClose: 'Закрыть (Esc)',
				image: {
					verticalFit: true,
					// titleSrc: function(item) {
					//   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
					// }

				},
				gallery: {
					enabled: true,
					tPrev: 'Назад (Кнопка влева)', // title for left button
					tNext: 'Вперед (Кнопка вправа)', // title for right button
					tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
				}
			});
		})
		// /modal галерея
		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		 
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			closeBtnInside: false,
			fixedContentPos: false, 
			tClose: 'Закрыть (Esc)',
		});
	},
	// /magnificPopupCall
	mobileMenu: function () {
		// закрыть/открыть мобильное меню

		btnToggle.click(function () {

			btnToggle.toggleClass("on");
			// $("body").toggleClass("fixed");
			menu.toggleClass("active");
			$("body, html").toggleClass("fixed");
			return false;
		});
		$('.menu-item a').on('click', function (e) {
			// e.preventDefault();
			btnToggle.removeClass("on");
			menu.removeClass("active");
			$("body, html").removeClass("fixed");
		});
 
	},
	// /mobileMenu

	// табы  . 
	tabscostume: function (tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			// parent.find("picture").removeClass('active');
			// setTimeout
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__content2').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');
		});
	},
 
	// /табы  . 


	// /CustomYoutubeBlock
	inputMask: function () {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	},
 
	// /inputMask

};

// JSCCommon.LazyFunction();
/***/



