var $ = jQuery;
var btnToggle = $(".toggle-menu-mobile--js"),
	menu = $(".menu-mobile--js")
var parent = $(".s-segments ")
jQuery(document).ready(function ($) {

	objectFitImages();
	// Picture element HTML5 shiv
	document.createElement("picture");
	// для свг
	svg4everybody({});


	JSCCommon.magnificPopupCall();

	JSCCommon.tabscostume('tabs');

	JSCCommon.mobileMenu();

	JSCCommon.inputMask();


	// $(".main-wrapper").after('<div class="screen" style="background-image: url(screen/main.jpg);"></div>')

	// / закрыть меню при горизонтальном свайпе
	// /закрыть/открыть мобильное меню

	function heightses() {
		var topH = $(".header-block").innerHeight();

		function fixedMenu() {
			var topNav = $('.top-line--js  ');
			if ($(this).scrollTop() > (topH / 4)) {
				setTimeout(function () {
					topNav.addClass('fixed-ready');

				}, .6);
				topNav.addClass('fixed-top');
			} else {
				if (!topNav.hasClass('fixed')) {

					setTimeout(function () {
						topNav.removeClass('fixed-top');

					}, .6);
				}
				topNav.removeClass('fixed-ready');
			}


			if ($(this).scrollTop() > (topH * .8)) {
				topNav.addClass('fixed');
			} else {
				topNav.removeClass('fixed');
			}

		}
		fixedMenu();
		$(window).scroll(function () {
			fixedMenu();
		});
		var w = $(window).width();

		// $(".main-wrapper").css("margin-bottom", $('footer').height())
		// $(".otz__item .text-wrap ").height('auto').equalHeights();
		// 
		// скрывает моб меню
 

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
	$(window).on("load", function () {
		heightses();

	})

	heightses();

	// листалка по стр
	$(" .top-nav ul a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		var destinationMinus =  elementClick.replay('/','');
		if(destinationMinus) {

			$('html, body').animate({
				scrollTop: destinationMinus
			}, 1100);
	
			return false;
		}

	});

	// slider
	$(".section").each(function () {
		var slider = {
			slidesPerView: 1,
			watchOverflow: true,
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

	parent.on('mouseenter', 'li', function () {
		parent.find("picture").removeClass('active');
		$(this).find("picture").addClass('active')
	})


	$('.popup-with-move-anim').click(function () {
		var th = $(this);
		$(th.attr('href')).find(".order").val(th.data('order'));
 
		
		$(th.attr('href')).find(".form-wrap__title--js").html(th.data('title')); 
		$(th.attr('href')).find(".form-wrap__btn").text(th.data('btn'));
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
});
JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX

	// функции для запуска lazy
	// функции для запуска lazy
	LazyFunction: function () {
		// Для лэзи загрузки 

		document.addEventListener("DOMContentLoaded", function () {
			var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));
			var active = false;

			const lazyLoad = function () {
				if (active === false) {
					active = true;

					setTimeout(function () {
						lazyImages.forEach(function (lazyImage) {
							var imgWrapper = lazyImage.parentNode.clientHeight + 500;
							if (((lazyImage.getBoundingClientRect().top - imgWrapper) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + imgWrapper) >= 0) && getComputedStyle(lazyImage).display !== "none") {
								lazyImage.src = lazyImage.dataset.src;
								// lazyImage.srcset = lazyImage.dataset.srcset;
								lazyImage.classList.remove("lazy");

								lazyImages = lazyImages.filter(function (image) {
									return image !== lazyImage;
								});

								if (lazyImages.length === 0) {
									document.removeEventListener("scroll", lazyLoad);
									window.removeEventListener("resize", lazyLoad);
									window.removeEventListener("orientationchange", lazyLoad);
									window.addEventListener("DOMContentLoaded", lazyLoad);
								}
							}
						});

						active = false;
					}, 200);
				}
			};

			document.addEventListener("scroll", lazyLoad);
			window.addEventListener("resize", lazyLoad);
			window.addEventListener("orientationchange", lazyLoad);
			window.addEventListener("DOMContentLoaded", lazyLoad);
		});


		// лэзи 
		document.addEventListener("DOMContentLoaded", function () {
			var lazyImages = [].slice.call(document.querySelectorAll(".lazy-sourse"));
			var active = false;

			const lazyLoad = function () {
				if (active === false) {
					active = true;

					setTimeout(function () {
						lazyImages.forEach(function (lazyImage) {
							var imgWrapper = lazyImage.parentNode.clientHeight + 500;
							if (((lazyImage.getBoundingClientRect().top - imgWrapper) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + imgWrapper) >= 0) && getComputedStyle(lazyImage).display !== "none") {
								// lazyImage.parentElement.style.backgroundImage = 'url(' + lazyImage.dataset.src + ')';
								// lazyImage.src = lazyImage.dataset.src;
								lazyImage.srcset = lazyImage.dataset.srcset;
								// lazyImage.classList.remove("lazy");

								lazyImages = lazyImages.filter(function (image) {
									return image !== lazyImage;
								});

								if (lazyImages.length === 0) {
									document.removeEventListener("scroll", lazyLoad);
									window.removeEventListener("resize", lazyLoad);
									window.removeEventListener("orientationchange", lazyLoad);
									window.addEventListener("DOMContentLoaded", lazyLoad);
								}
							}
						});

						active = false;
					}, 200);
				}
			};

			document.addEventListener("scroll", lazyLoad);
			window.addEventListener("resize", lazyLoad);
			window.addEventListener("orientationchange", lazyLoad);
			window.addEventListener("DOMContentLoaded", lazyLoad);
		});

	},

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
		$('.menu-item a').on('click', function () {
			btnToggle.click();
		});
 
	},
	// /mobileMenu

	// табы  . 
	tabscostume: function (tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			parent.find("picture").removeClass('active');
			$(this)
				.addClass('active').siblings().removeClass('active')
				.closest('.' + tab).find('.' + tab + '__wrap').find('.' + tab + '__content').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');

			$(this).closest('.' + tab).find('.' + tab + '__wrap').find('.' + tab + '__content2').hide().removeClass('active')
				.eq($(this).index()).fadeIn().addClass('active');
		});
	},
	// /табы  . 


	// /CustomYoutubeBlock
	inputMask: function () {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+]7[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7(999)999-99-99");
	}
	// /inputMask

};

JSCCommon.LazyFunction();
/***/