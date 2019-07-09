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


	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/main.jpg);"></div>')

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
		// конец добавил
		if (window.matchMedia("(min-width: 992px)").matches) {

			btnToggle.removeClass("on");
			// $("body").removeClass("fixed");
			menu.removeClass("active");
			$("body").removeClass("fixed");
		}
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

		$('html, body').animate({
			scrollTop: destination
		}, 1100);

		return false;
	});

	// slider
	$(".section").each(function () {
		var swiper2 = new Swiper($(this).find('.slider--js'), {
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
		});
	});

	parent.on('mouseenter', 'li', function () {
		parent.find("picture").removeClass('active');
		$(this).find("picture").addClass('active')
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
			var lazyImages = [].slice.call(document.querySelectorAll(".lazy-bg"));
			var active = false;

			const lazyLoad = function () {
				if (active === false) {
					active = true;

					setTimeout(function () {
						lazyImages.forEach(function (lazyImage) {
							var imgWrapper = lazyImage.parentNode.clientHeight + 500;
							if (((lazyImage.getBoundingClientRect().top - imgWrapper) <= window.innerHeight && (lazyImage.getBoundingClientRect().bottom + imgWrapper) >= 0) && getComputedStyle(lazyImage).display !== "none") {
								lazyImage.parentElement.style.backgroundImage = 'url(' + lazyImage.dataset.src + ')';
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
		// $('.menu-mobile--js ul li a').on('click', function () {
		// 	$(".menu-mobile--js .toggle-mnu").click();
		// });

		$(document).mouseup(function (e) {
			var container = $(".menu-mobile--js.active");
			if (container.has(e.target).length === 0) {
				btnToggle.removeClass("on");
				// $("body").toggleClass("fixed");
				menu.removeClass("active");
				$("body, html").removeClass("fixed");
			}
		});
		// закрыть меню при горизонтальном свайпе
		$('.menu-mobile--js.active').swipe({
			swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
				if (direction == 'left') {
					btnToggle.removeClass("on");
					$(".menu-mobile--js.active").removeClass("active");
					$("body, html").removeClass("fixed");
				}
				if (direction == 'right') {
					btnToggle.removeClass("on");
					$(".menu-mobile--js.active").removeClass("active");
					$("body, html").removeClass("fixed");
				}
			},
			triggerOnTouchEnd: false,
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