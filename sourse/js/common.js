"use strict";

var $ = jQuery;
var btnToggle = $(".toggle-menu-mobile--js");
var menu = $(".menu-mobile--js, .menu-mobile-page--js");
var body = $('body');
var html = $('html');
var parent = $(".s-segments  ");
var JSCCommon = {
    magnificPopupCall: function magnificPopupCall() {
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
            tClose: 'Закрыть (Esc)'
        }); // / modal window

        $("#product-radio a"); // modal галерея

        $(".gal").each(function () {
            $(this).find("a").magnificPopup({
                type: 'image',
                closeOnContentClick: false,
                closeBtnInside: false,
                mainClass: 'mfp-with-zoom mfp-img-mobile',
                tClose: 'Закрыть (Esc)',
                image: {
                    verticalFit: true // titleSrc: function(item) {
                    //   return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
                    // }

                },
                gallery: {
                    enabled: true,
                    tPrev: 'Назад (Кнопка влева)',
                    // title for left button
                    tNext: 'Вперед (Кнопка вправа)',
                    // title for right button
                    tCounter: '<span class="mfp-counter">%curr% из %total%</span>'
                }
            });
        }); // /modal галерея

        $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            closeBtnInside: false,
            fixedContentPos: false,
            tClose: 'Закрыть (Esc)'
        });
    },
    // /magnificPopupCall
    mobileMenu: function mobileMenu() {
        // закрыть/открыть мобильное меню
        function searchTogggle() {
            var block = $(".top-line-page-search");

            if (block.hasClass("d-none")) {
                block.removeClass("d-none");
            } else {
                block.addClass("d-none");
            }
        }

        $(".menu-mobile-page__inner .menu > .menu-item-has-children > a").click(function (e) {
            e.preventDefault();
            $(this).parent().toggleClass("active").siblings().removeClass("active");
            searchTogggle();
            $(this).next().toggleClass("active"); // $(".top-submenu--js").slideUp(0);
        });
        $(".menu-mobile-page__inner .menu .sub-menu   .menu-item-has-children > a").each(function () {
            var title = $(this).text();
            var toggleBlock = $(this).next();
            toggleBlock.prepend('<li class="hide-parent-js">' + title + '</li>');
            $(this).click(function (e) {
                e.preventDefault();
                $(this).parent().toggleClass("active").siblings().removeClass("active");
                searchTogggle();
                toggleBlock.toggleClass("active"); // $(".top-submenu--js").slideUp(0);
            });
        });
        $(".hide-parent-js").click(function () {
            $(this).parent().removeClass('active');
        }); // $(".menu-item-has-children--1c > a,.addSvg>a").click(function (e) {
        //     e.preventDefault();
        //     $(this).parent().toggleClass("active").siblings().removeClass("active");
        //     search();
        //     $(".top-submenu--js").slideToggle(0);
        //     $(".sub-menu").attr('style','');
        // });

        function toggleMenu() {
            btnToggle.toggleClass("on");
            menu.toggleClass("active");
            $("body, html").toggleClass("fixed");
            return false;
        }

        btnToggle.click(function () {
            toggleMenu();
        }); // menu.find('.menu-item a').on('click', function (e) {
        //     // e.preventDefault();
        //     btnToggle.removeClass("on");
        //     menu.removeClass("active");
        //     $("body, html").removeClass("fixed");
        // });
    },
    // табы  . 
    tabscostume: function tabscostume(tab) {
        var btn = $('.tabs__btn:not(.active)');
        $('.tabs__caption').on('click', '.tabs__btn:not(.active)', function () {
            getTab($(this));
        }); // $(".s-cloud").on('click', '.' + tab +  

        function getTab(btn) {
            btn.each(function () {
                $(this).addClass('active').siblings().removeClass('active').closest('.tabs').find('.tabs__content2').hide().removeClass('active').eq($(this).index()).show().addClass('active');
            });
        }

        ;
        var timer = setInterval(function () {
            $('.s-cloud .tabs__btn.active ').each(function () {
                var th = $(this);

                if (!th.is(":last-child")) {
                    getTab(th.next());
                } else {
                    getTab($('.s-cloud .tabs__btn:first-child'));
                }
            });
        }, 3000);
        $('.s-cloud .tabs__btn').click(function () {
            clearInterval(timer);
        });
    },
    // табы  . 
    tabscostume3: function tabscostume3(tab) {
        // $('.' + tab + '__btn:first-child').addClass("active");
        // $('.' + tab + '__content:first-child').addClass("active");
        $('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
            $(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content2').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
        });
    },
    tabscostumeSl: function tabscostumeSl(tab) {
        $('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
            // console.log(1);
            $(this).addClass('active').parent().siblings().find('.' + tab + '__btn').removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).parent().index()).fadeIn().addClass('active');
        });
    },
    // /табы  . 
    inputMask: function inputMask() {
        // mask for input
        $('input[type="tel"]').attr("pattern", "[+][0-9]{1} [(][0-9]{3}[)]-[0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+7 (999)-999-99-99");
    },
    customRange: function customRange() {
        $(".range-wrap").each(function () {
            var _this = $(this);

            var $d3 = _this.find(".slider-js");

            var slider = $d3.ionRangeSlider({
                skin: "round",
                type: "double",
                grid: false,
                grid_snap: false,
                hide_min_max: true,
                hide_from_to: true,
                onStart: function onStart(data) {
                    _this.find('.minus').val(data.from);

                    _this.find('.plus').val(data.to);
                },
                onChange: function onChange(data) {
                    _this.find('.minus').val(data.from);

                    _this.find('.plus').val(data.to);
                },
                onFinish: function onFinish(data) {
                    _this.find('.minus').val(data.from);

                    _this.find('.plus').val(data.to);
                },
                onUpdate: function onUpdate(data) {
                    _this.find('.minus').val(data.from);

                    _this.find('.plus').val(data.to);
                }
            });
            var $d3_instance = slider.data("ionRangeSlider");
            $(this).on('change  input  cut  copy  paste', '.minus', function () {
                var th = $(this);
                var data = th.val();
                var min = +data; // th.val(data + ' т')

                $d3_instance.update({
                    from: min
                });
            });
            $(this).on('change  input  cut  copy  paste', '.plus', function () {
                var th = $(this);
                var data = th.val();
                var max = +data; // th.val(data + ' т')

                $d3_instance.update({
                    from: max
                });
            }); // $d3.on("change", function () {
            // 	var $inp = $(this);
            // 	var from = $inp.prop("value"); // reading input value
            // 	var from2 = $inp.data("from"); // reading input data-from attribute
            // 	_this.find('range-result--minus').val(from); // FROM value
            // 	_this.find('range-result--plus').val(from); // FROM value
            // });
        });
    }
};
jQuery(document).ready(function ($) {
    parent.on('mouseenter', 'li', function () {
        $(this).parents(".tabs__content2").find("picture").eq($(this).index()).addClass('active').siblings().removeClass('active');
    });
    objectFitImages(); // Picture element HTML5 shiv

    document.createElement("picture"); // для свг

    svg4everybody({});
    JSCCommon.magnificPopupCall(); // JSCCommon.tabscostume('tabs');

    JSCCommon.tabscostume3('tabs2');
    JSCCommon.tabscostume('tabs2');
    JSCCommon.tabscostumeSl('tabs');
    JSCCommon.mobileMenu();
    JSCCommon.inputMask(); // JSCCommon.customRange();

	/*
	var $d3 = $(".input-range-js");
	$d3.ionRangeSlider({
			skin: "round",
			hide_min_max: 'true',
			grid: true,
			// default false (enable grid)
			step: 1,
			grid_snap: false // default false (snap grid to step)
		 });
	$d3.on("change", function () {
			var $inp = $(this);
			var from = $inp.prop("value"); // reading input value
			$('.counter-js').text(from); // FROM value
	});
	*/
    // $(".main-wrapper").after('<div class="screen" style="background-image: url(/screen/Career.png);"></div>'); // / закрыть меню при горизонтальном свайпе
    // /закрыть/открыть мобильное меню

    function heightses() {
        $(".page-top-block").css("margin-top", $(".top-line, .top-line-page").height());
        var topH = $(".header-block").height();

        function fixedMenu() {
            var topNav = $('.top-line--js, .top-line-page--js  ');

            if ($(this).scrollTop() > topNav.height()) {
                setTimeout(function () {
                    topNav.addClass('top-ready');
                }, .6);
            } else {
                topNav.removeClass('top-ready');
            }

            if ($(this).scrollTop() > topH / 4) {
                setTimeout(function () {
                    topNav.addClass('fixed-ready');
                }, .6);
            } else {
                topNav.removeClass('fixed-ready');
            }

            if ($(this).scrollTop() > topH * .8) {
                topNav.addClass('fixed').removeClass('fixed-top');
            } else {
                if (topNav.hasClass('fixed')) {
                    topNav.removeClass('fixed').addClass('fixed-top');
                }
            }

            if ($(this).scrollTop() > topH) {
                $(".top-line__tel--mob, .top-line-page__tel--mob").addClass('active');
            } else {
                $(".top-line__tel--mob, .top-line-page__tel--mob").removeClass('active');
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
        }); // закрыть/открыть мобильное меню

        if (window.matchMedia("(max-width: 1200px)").matches) {// $(".menu-item-has-children--1c,.addSvg").removeClass("active");
            // $(".top-line-page-search").removeClass("d-none");
            // $(".top-submenu--js").hide();
        }

        if (window.matchMedia("(min-width: 1200px)").matches) {
            btnToggle.removeClass("on");
            menu.removeClass("active");
            $("body, html").removeClass("fixed");
            return false;
        }
    }

    $(window).resize(function () {
        heightses();
    });
    heightses(); // $(".page-top-block").css("margin-top": $('.top-line').height());
    // листалка по стр

    $("  .scroll-link").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        $('html, body').animate({
            scrollTop: destination
        }, 800);
        return false;
    });
    $(" .toggle-menu-mobile--js").click(function () {
        $(".top-line-page-search").toggleClass("search-disable");
    }); // slider

    $(".section").each(function () {
        var slider = {
            slidesPerView: 1,
            spaceBetween: 0,
            lazy: {
                loadPrevNext: true
            },
            pagination: {
                el: $(this).find('.swiper-pagination'),
                clickable: true
            },
            navigation: {
                nextEl: $(this).find('.swiper-button-next'),
                prevEl: $(this).find('.swiper-button-prev')
            },
            loop: true
        };
        var swiper2 = new Swiper($(this).find('.slider--js'), slider);
        var swiper3 = new Swiper($(this).find('.slider--js2'), slider);
        var sliderLogo = new Swiper($(this).find('.s-logos__slider--js'), {
            slidesPerView: 1,
            spaceBetween: 10,
            breakpointsInverse: true,
            speed: 400,
            loop: true,
            autoplay: {
                delay: 3000
            },
            lazy: {
                loadPrevNext: true
            },
            // pagination: {
            // 	el: $(this).find('.swiper-pagination'),
            // 	clickable: true,
            // },
            navigation: {
                nextEl: $(this).find('.s-logos__slider-next'),
                prevEl: $(this).find('.s-logos__slider-prev')
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                992: {
                    slidesPerView: 4
                },
                1200: {
                    slidesPerView: 6,
                    spaceBetween: 20
                }
            }
        });
    });
    var swiper4 = new Swiper('#catalog-slider--js', {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpointsInverse: true,
        speed: 400,
        loop: true,
        autoplay: {
            delay: 6000
        },
        pagination: {
            el: $(this).find('.swiper-pagination'),
            clickable: true
        },
        navigation: {
            nextEl: '.s-catalog-slider__slider-next',
            prevEl: '.s-catalog-slider__slider-prev'
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
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
    var swiper5 = new Swiper('#catalog-slider-2--js', {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpointsInverse: true,
        speed: 400,
        loop: true,
        autoplay: {
            delay: 6000
        },
        pagination: {
            el: $(this).find('.swiper-pagination'),
            clickable: true
        },
        navigation: {
            nextEl: '.s-catalog-slider__slider-next',
            prevEl: '.s-catalog-slider__slider-prev'
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
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    });
    var swiper6 = new Swiper('.slider-js', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 400,
        loop: true,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 4
        },
        // autoplay: {
        //     delay: 6000
        // },
        pagination: {
            el: $(this).find('.swiper-pagination'),
            clickable: true
        },
        navigation: {
            nextEl: '.s-catalog-slider__slider-next',
            prevEl: '.s-catalog-slider__slider-prev'
        }
    });
    var swipertabs = new Swiper('.tabs-slider--js', {
        slidesPerView: 'auto',
        freeMode: true,
        spaceBetween: 10,
        speed: 400
    });
    $(".s-artical-body__slider-wrap").each(function () {
        var swiperArticals4 = new Swiper($(this).find('.s-artical-body__slider--js'), {
            slidesPerView: 1,
            spaceBetween: 10,
            breakpointsInverse: true,
            speed: 400,
            loop: true,
            // autoplay: {
            //     delay: 6000,
            //   },
            lazy: {
                loadPrevNext: true,
            },
            pagination: {
                el: $(this).find('.swiper-pagination'),
                clickable: true
            },
            navigation: {
                nextEl: $(this).find('.s-artical-body__slider-next'),
                prevEl: $(this).find('.s-artical-body__slider-prev')
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
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20
                }
            }
        });
    });
    $('.popup-with-move-anim').click(function () {
        var th = $(this);
        $(th.attr('href')).find(".order").val(th.data('order'));
        $(th.attr('href')).find(".form-wrap__title--js").html(th.data('title'));
        $(th.attr('href')).find(".form-wrap__title-sub--js").html('Заполните форму и&nbsp;мы&nbsp;свяжемся с&nbsp;Вами в&nbsp;течение 15&nbsp;минут');
        $(th.attr('href')).find(".form-wrap__btn").text(th.data('btn'));

        if ($(this).hasClass("s-doc__btn")) {
            $(th.attr('href')).find(".form-wrap__title-sub--js").html('Заполните форму, и&nbsp;мы&nbsp;пришлем на&nbsp;ваш e-mail презентацию');
        } // $(th.attr('href')).find(".btn-name").text(th.data('btn'));

    });
    $(".s-team__btn").click(function () {
        var th = $(this);
        var modal = $(th.attr('href'));
        modal.find(".h3").html(th.data('title'));
        modal.find(".modal-team__small-text").html(th.data('prof'));
        modal.find("p").html(th.data('text'));
        var order = th.data('btn');
        modal.find(".modal-team__btn").attr('data-order', order);
        modal.find("picture").html(th.parent().find('picture').html());
    });
    $(".accordion__head").click(function () {
        $(this).next().slideToggle().parent().toggleClass('active');
    });
    $(".s-ways__btn ").click(function () {
        $(this).parents(".s-ways__page").hide().removeClass("active").next().fadeIn().addClass("active");
        $('html, body').animate({
            scrollTop: $(".s-ways__wrapper").offset().top - 100
        }, 500);
    });
    $(" .form-wrap__btn-back").click(function () {
        $(this).parents(".s-ways__page").hide().removeClass("active").prev().fadeIn().addClass("active");
        $('html, body').animate({
            scrollTop: $(".s-ways__wrapper").offset().top - 100
        }, 500);
    }); // Sticky block

    $(".sticky-block--js").stick_in_parent({
        offset_top: 120,
        parent: '.aside-block-js',
        recalc_every: 1
    });
    $(".s-tariffs__more, .s-tariffs__title-sub---js").click(function () {
        $(this).toggleClass("active").next().slideToggle();
    });
    $(".s-header-rent__more.more-js").click(function () {
        console.log(1);
        var destination = $('.s-header-rent').next().offset().top - 30;
        $('html, body').animate({
            scrollTop: destination
        }, 1100);
        return false;
    }); // accordion

    $(".showhide").click(function () {
        $(this).toggleClass("active").next().slideToggle().parents().toggleClass("active");
    });
    $(".s-filter__btn--js").click(function () {
        $(this).toggleClass('active').find("strong").toggleClass("d-none");
        $(".s-filter-wrap").toggle();
    });
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 10,
        slidesPerView: 4,
        // loop: true, 
        // loopedSlides: 5, //looped slides should be the same
        // watchSlidesVisibility: true,
        // watchSlidesProgress: true,
        lazy: {
            loadPrevNext: true
        }
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        // loop:true,
        // loopedSlides: 5, //looped slides should be the same
        lazy: {
            loadPrevNext: true
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
    var prodCarusel = new Swiper('.s-product-carusel__slider--js', {
        spaceBetween: 10,
        slidesPerView: 1,
        loop: true,
        // loopedSlides: 5, //looped slides should be the same
        // watchSlidesVisibility: true,
        // watchSlidesProgress: true,
        lazy: {
            loadPrevNext: true
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        // Responsive breakpoints
        breakpoints: {
            480: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            }
        }
    });
});