var $ = jQuery;



function number_format(number, decimals, dec_point, thousands_sep) {
    //
    // +   original by: Jonas Raoni Soares Silva (http://www.jsfromhell.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +     bugfix by: Michael White (http://crestidg.com)
    var i, j, kw, kd, km;
    // input sanitation & defaults
    if (isNaN(decimals = Math.abs(decimals))) {
        decimals = 2;
    }
    if (dec_point == undefined) {
        dec_point = ",";
    }
    if (thousands_sep == undefined) {
        thousands_sep = ".";
    }
    i = parseInt(number = (+number || 0).toFixed(decimals)) + "";
    if ((j = i.length) > 3) {
        j = j % 3;
    } else {
        j = 0;
    }
    km = (j ? i.substr(0, j) + thousands_sep : "");
    kw = i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands_sep);
    //kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).slice(2) : "");
    kd = (decimals ? dec_point + Math.abs(number - i).toFixed(decimals).replace(/-/, 0).slice(2) : "");
    return km + kw + kd;
}


(function($) {
    var homeSwiper = new Swiper('#home-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        speed: 400,
        loop: true,
        autoplay: {
            delay: 6000
        },
        preloadImages: false,
        lazy: {
            loadPrevNext: true,
        },
        pagination: {
            el: $('.s-catalog-slider .swiper-pagination'),
            clickable: true
        },
        navigation: {
            nextEl: '.s-catalog-slider__slider-next',
            prevEl: '.s-catalog-slider__slider-prev'
        }
    });
})(jQuery);

(function($) {
    document.addEventListener('wpcf7mailsent', function(event) {
        yaCounter54680992.reachGoal('zakaz');
        switch (event.detail.contactFormId) {
            case 186:
                $.magnificPopup.open({
                    items: {
                        src: '#thanks',
                        type: 'inline'
                    }
                });
                break;
            case 897:
                $.magnificPopup.open({
                    items: {
                        src: '#arend-thanks',
                        type: 'inline'
                    }
                });
                break;
            default:
                $.magnificPopup.open({
                    items: {
                        src: '#thanks',
                        type: 'inline'
                    }
                });
                break;
        }
    }, false);
    $('.linkRadio').click(function(event) {
        location = $(this).data('link');
    });
    let tab = 'tabs';
    $('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function(e) {
        $(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content2').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
        $(".sticky-block--js").stick_in_parent({
            offset_top: 170,
            parent: '.aside-block-js',
            recalc_every: 1
        });
    });
    if ($('.tabs_product_cont').length) {
        let first = $('.tabs__btn', $('.tabs_product_cont')).eq(0);
        first.trigger('click');
    }
})(jQuery);
(function($) {
    $('table.functional').wrapAll('<div class="table-wrapper"></div>')
})(jQuery);
(function($) {
    if (typeof arVariation !== "undefined") {
        $('[name="additionalVariant"]', $('#product-radio')).change(function(event) {
            let v = $('[name="additionalVariant"]:checked').val();
            if (arVariation[v]) {
                $('.sku_text').text(arVariation[v]['sku']);
                let price = number_format(arVariation[v]['regularprice'], 0, " ", " ");
                $('.regularprice').text(price);
                $('[name="variation_id"]').val(v);
                $('#addCartSingle').data('variation_id', v)
                $('#addCartSingle').data('sku', arVariation[v]['sku'])
                $('#addCartSingle').data('price', price);
            }
        });
    }
    $(document).on('click', '.addCartSingle', function(e) {
        e.preventDefault();
        var $thisbutton = $(this),
            product_id = $thisbutton.data('id'),
            variation_id = $thisbutton.data('variation_id');
        var data = {
            action: 'woocommerce_ajax_add_to_cart',
            product_id: product_id,
            product_sku: '',
            quantity: 1,
            variation_id: variation_id,
        };
        $(document.body).trigger('adding_to_cart', [$thisbutton, data]);
        $.ajax({
            type: 'post',
            url: myajax.url,
            data: data,
            beforeSend: function(response) {
                $thisbutton.prop('disabled', true).addClass('loading');
            },
            complete: function(response) {
                $thisbutton.prop('disabled', false).removeClass('loading');
            },
            success: function(response) {
                var type = $thisbutton.data('type');
                if (typeof type !== "undefined") {
                    var width = 40;
                    var src = $thisbutton.data('image');
                    var top = $thisbutton.offset().top;
                    var left = $thisbutton.offset().left;
                    $('<img />').css({
                        'position': 'absolute',
                        'display': 'block',
                        'width': width + 'px',
                        'height': 'auto',
                        'z-index': '11100',
                        top: top,
                        left: left
                    }).attr('src', src).appendTo("body").animate({
                        opacity: 1,
                        left: $("#miniCart").offset()['left'],
                        top: $("#miniCart").offset()['top'],
                        width: width
                    }, 1000, function() {
                        $(this).remove();
                        let count = $('#miniCartCount').text();
                        $('#miniCartCount').text(parseInt(count) + 1);
                    });
                } else {
                    var price = $thisbutton.data('price'),
                        title = $thisbutton.data('title'),
                        image = $thisbutton.data('image'),
                        sku = $thisbutton.data('sku');
                    $('#orderImg').attr('src', image)
                    $('#orderTitle').text(title)
                    $('#orderSku').text(sku)
                    $('#orderPrice').text(price)
                    $.magnificPopup.open({
                        items: {
                            src: '#order',
                            type: 'inline'
                        }
                    });
                    let count = $('#miniCartCount').text();
                    $('#miniCartCount').text(parseInt(count) + 1);
                }
                yaCounter54680992.reachGoal('zakaz');
            },
        });
        return false;
    });
    $(document).on('click', '.addCartCategory', function(e) {
        e.preventDefault();
        var $thisbutton = $(this),
            product_id = $thisbutton.data('id'),
            variation_id = $thisbutton.data('variation_id');
        var data = {
            action: 'woocommerce_ajax_add_to_cart',
            product_id: product_id,
            product_sku: '',
            quantity: 1,
            variation_id: variation_id,
        };
        $.ajax({
            type: 'post',
            url: myajax.url,
            data: data,
            beforeSend: function(response) {
                $thisbutton.prop('disabled', true).addClass('loading');
            },
            complete: function(response) {
                $thisbutton.prop('disabled', false).removeClass('loading');
            },
            success: function(response) {
                var order = $('#order');
                var price = $thisbutton.data('price');
                var title = $thisbutton.data('title');
                var src = $thisbutton.parents('.CategoryProductWrap').find('.s-competences__img-wrapper').find('img').attr('src')
                $('#catPrice', order).text(price)
                $('#catTitle', order).text(title)
                $('#catImg', order).attr('src', src);
                $.magnificPopup.open({
                    items: {
                        src: '#order',
                        type: 'inline'
                    }
                });
                let count = $('#miniCartCount').text();
                $('#miniCartCount').text(parseInt(count) + 1);
            },
        });
        return false;
    })
})(jQuery);
//корзина
// Common scroll to element code.
$.scroll_to_notices = function(scrollElement) {
    if (scrollElement.length) {
        $('html, body').animate({
            scrollTop: (scrollElement.offset().top - 100)
        }, 1000);
    }
};
jQuery(document).ready(function($) {
    $('[name="checkout"]').submit(function(event) {
        event.preventDefault();
        let $form = $(this),
            $button = $('button', $form);
        $button.prop('disabled', true);
        $.ajax({
            url: myajax.url,
            type: 'POST',
            data: $form.serialize(),
        }).done(function() {
            $.magnificPopup.open({
                items: {
                    src: '#thanks',
                    type: 'inline'
                }
            });
            $('.cartItem').remove();
            $('#cartEmpty').removeClass('d-none');
            $('#miniCartCount').text(0);
            $('.woocommerce-error, .woocommerce-message, .woocommerce-info').remove();
        }).fail(function() {
            console.log("error");
        }).always(function() {
            $button.prop('disabled', true);
        });
        return false;
    });
})
jQuery(document).ready(function($) {
    $('.closePopup').click(function(event) {
        event.preventDefault();
        var magnificPopup = $.magnificPopup.instance;
        magnificPopup.close();
    })
    // категория добавить в корзину
    $('.woocommerce').on('click', '.popup-with-move-anim_cart', function(event) {
        event.preventDefault();
        var th = $(this);
        $(th.attr('href')).find(".order").val(th.data('order'));
        $(th.attr('href')).find(".form-wrap__title--js").html(th.data('title'));
        $(th.attr('href')).find(".form-wrap__title-sub--js").html('Заполните форму и&nbsp;мы&nbsp;свяжемся с&nbsp;Вами в&nbsp;течение 15&nbsp;минут');
        $(th.attr('href')).find(".form-wrap__btn").text(th.data('btn'));
        if ($(this).hasClass("s-doc__btn")) {
            $(th.attr('href')).find(".form-wrap__title-sub--js").html('Заполните форму, и&nbsp;мы&nbsp;пришлем на&nbsp;ваш e-mail презентацию');
        }
        $.magnificPopup.open({
            items: {
                src: th.attr('href'),
                type: 'inline'
            }
        });
    });
    $('.woocommerce').on('click', '.removeCart', function(event) {
        event.preventDefault();
        var $a = $(event.currentTarget);
        var $form = $a.parents('form')
        $('#LoaderShow').removeClass('d-none');
        $.ajax({
            type: 'GET',
            url: $a.attr('href'),
            dataType: 'html',
            success: function(response) {
                update_wc_div(response);
            },
            complete: function() {
                // unblock( $form );
                // unblock( $( 'div.cart_totals' ) );
                $('#LoaderShow').addClass('d-none');
                $.scroll_to_notices($('[role="alert"]'));
            }
        });
    });
    $('.woocommerce').on('change', '.qty', function(event) {
        UpdateCart();
    });
    $('.woocommerce').on('click', '.add-block__btn--minus', function(event) {
        event.preventDefault();
        let $qty = $(this).siblings('.qty'),
            val = $qty.val(),
            min = $qty.attr('min');
        if (parseInt(val) > parseInt(min) && parseInt(val) !== 1) {
            $qty.val(parseInt(val) - 1);
            UpdateCart();
        }
    });
    $('.woocommerce').on('click', '.add-block__btn--plus', function(event) {
        event.preventDefault();
        let $qty = $(this).siblings('.qty'),
            val = $qty.val();
        $qty.val(parseInt(val) + 1);
        UpdateCart();
    });

    function UpdateCart() {
        let $form = $('#CartForm');
        $('#LoaderShow').removeClass('d-none');
        $('<input />').attr('type', 'hidden').attr('name', 'update_cart').attr('value', 'Update Cart').appendTo($form);
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
            dataType: 'html',
            success: function(response) {
                update_wc_div(response, true);
            },
            complete: function() {
                $('#LoaderShow').addClass('d-none');
                // unblock( $form );
                // unblock( $( 'div.cart_totals' ) );
                $.scroll_to_notices($('[role="alert"]'));
            }
        });
    }
    var show_notice = function(html_element, $target) {
        if (!$target) {
            $target = $('.woocommerce-notices-wrapper:first') || $('.cart-empty').closest('.woocommerce') || $('.woocommerce-cart-form');
        }
        $target.prepend(html_element);
    };

    function update_wc_div(html_str, preserve_notices) {
        var $html = $.parseHTML(html_str);
        var $new_form = $('#CartForm', $html);
        var $notices = $('.woocommerce-error, .woocommerce-message, .woocommerce-info', $html);
        var count = $('#miniCartCount', $html).text();
        $('#miniCartCount').text($.trim(count))
        $('.woocommerce-error, .woocommerce-message, .woocommerce-info').remove();
        if ($new_form.length === 0) {
            var $cart_html = $('.cart-empty', $html).closest('.woocommerce');
            $('.woocommerce-cart-form__contents').closest('.woocommerce').replaceWith($cart_html);
            if ($notices.length > 0) {
                show_notice($notices);
            }
            $('.woocommerce-notices-wrapper').removeClass('hideEmpty')
            $(document.body).trigger('wc_cart_emptied');
        } else {
            if ($('.woocommerce-checkout').length) {
                $(document.body).trigger('update_checkout');
            }
            $('.woocommerce-notices-wrapper').addClass('hideEmpty')
            $('.woocommerce-cart-form').replaceWith($new_form);
            if ($notices.length > 0) {
                show_notice($notices);
            }
        }
        $(document.body).trigger('updated_wc_div');
    }
});
// ************************************* city *********************************************************************
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function(factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD (Register as an anonymous module)
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function($) {
    var pluses = /\+/g;

    function encode(s) {
        return config.raw ? s : encodeURIComponent(s);
    }

    function decode(s) {
        return config.raw ? s : decodeURIComponent(s);
    }

    function stringifyCookieValue(value) {
        return encode(config.json ? JSON.stringify(value) : String(value));
    }

    function parseCookieValue(s) {
        if (s.indexOf('"') === 0) {
            // This is a quoted cookie as according to RFC2068, unescape...
            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
        }
        try {
            // Replace server-side written pluses with spaces.
            // If we can't decode the cookie, ignore it, it's unusable.
            // If we can't parse the cookie, ignore it, it's unusable.
            s = decodeURIComponent(s.replace(pluses, ' '));
            return config.json ? JSON.parse(s) : s;
        } catch (e) {}
    }

    function read(s, converter) {
        var value = config.raw ? s : parseCookieValue(s);
        return $.isFunction(converter) ? converter(value) : value;
    }
    var config = $.cookie = function(key, value, options) {
        // Write
        if (arguments.length > 1 && !$.isFunction(value)) {
            options = $.extend({}, config.defaults, options);
            if (typeof options.expires === 'number') {
                var days = options.expires,
                    t = options.expires = new Date();
                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
            }
            return (document.cookie = [
                encode(key), '=', stringifyCookieValue(value),
                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                options.path ? '; path=' + options.path : '',
                options.domain ? '; domain=' + options.domain : '',
                options.secure ? '; secure' : ''
            ].join(''));
        }
        // Read
        var result = key ? undefined : {},
            // To prevent the for loop in the first place assign an empty array
            // in case there are no cookies at all. Also prevents odd result when
            // calling $.cookie().
            cookies = document.cookie ? document.cookie.split('; ') : [],
            i = 0,
            l = cookies.length;
        for (; i < l; i++) {
            var parts = cookies[i].split('='),
                name = decode(parts.shift()),
                cookie = parts.join('=');
            if (key === name) {
                // If second argument (value) is a function it's a converter...
                result = read(cookie, value);
                break;
            }
            // Prevent storing a cookie that we couldn't decode.
            if (!key && (cookie = read(cookie)) !== undefined) {
                result[name] = cookie;
            }
        }
        return result;
    };
    config.defaults = {};
    $.removeCookie = function(key, options) {
        // Must not alter options, thus extending a fresh object...
        $.cookie(key, '', $.extend({}, options, {
            expires: -1
        }));
        return !$.cookie(key);
    };
}));
jQuery(document).ready(function($) {
    $('a[href="#modal-city"]').click(function(event) {
        let city = $.trim($('#city').text());
        $('.cityWrap a').removeClass('active')
        $('.cityWrap a').each(function(index, el) {
            var t = $.trim($(el).text());
            if (t == city) {
                $(el).addClass('active')
            }
        });
    });
    $('#YesCity').click(function(event) {
        $('.regionCorrection').attr('style', '');
        var city = $(this).data('city');
        console.log(city)
        $.cookie('city', city, {
            path: '/'
        });
    });
});
//
var cityCook = $.cookie('city');
if (typeof cityCook == "undefined") {
    ymaps.ready(init);
} else {
    $('#city').html(cityCook);
    setPhone(cityCook)
}
// замена телефона
function setPhone(city) {
    console.log(city)
    if (city == "Самара") {
        var phone = myajax.phoneSamara;
    } else {
        var phone = myajax.phoneNotSamara;
    }
    if ($('.phoneReplace').length) {
        $('.phoneReplace').each(function() {
            var $link = $(this)
            $link.find('span').html(phone);
            $link.attr('href', 'tel:' + phone)
        })
    }
}

function init() {
    ymaps.geolocation.get({
        provider: 'yandex',
        autoReverseGeocode: true
    }).then(function(result) {
        var firstGeoObject = result.geoObjects.get(0);
        var cityY = firstGeoObject.getLocalities().join(', ');
        $('#city').text(cityY);
        $('#select_city_name').text(cityY);
        $('#YesCity').data('city', cityY);
        $('.regionCorrection').attr('style', 'display:block');
    });
}

function city(a) {
    $('.regionCorrection').attr('style', '');
    $.cookie('city', a, {
        path: '/'
    });
    $('#modal-city .mfp-close').click();
    $('#city').html(a);
    setPhone(a)
}
(function($) {

    if ($('.table-example').length) {
        $('.table-example').each(function(index, el) {
            $(el).wrap('<div class="s-artical-body__table-wrap"></div>')
        });
    }

    if ($('.table-wraper').length) {
        $('.table-wraper').each(function(index, el) {
            $(el).wrap('<div class="table-wrap"></div>')
        });
    }

})(jQuery);
jQuery(document).ready(function($) {
    $(".s-artical-body__slider-wrap").each(function() {
        var swiperArticals4 = new Swiper($(this).find('.s-artical-body__slider--js'), {
            slidesPerView: 1,
            spaceBetween: 10,
            breakpointsInverse: true,
            speed: 400,
            loop: true,
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
});
(function($) {
    // новый тип товара
    let btn_minus = $('#btn_minus'),
        btn_plus = $('#btn_plus'),
        count_btn = $('#count');
    btn_minus.click(function(event) {
        event.preventDefault();
        let count = parseInt(count_btn.val());
        if (count > 1) {
            count_btn.val(count - 1);
            setPrice();
        }
    });
    btn_plus.click(function(event) {
        event.preventDefault();
        let count = parseInt(count_btn.val());
        count_btn.val(count + 1);
        setPrice();
    });
    if (typeof arVariationShopto !== "undefined") {
        var activeShopto = Object.keys(arVariationShopto)[0];
        $('[name="additionalVariant"]', $('#product-radio')).change(function(event) {
            let v = $('[name="additionalVariant"]:checked').val();
            if (arVariationShopto[v]) {
                $('.sku_text').text(arVariationShopto[v]['sku']);
                $('#addCartSingle').data('sku', arVariationShopto[v]['sku'])
                activeShopto=v;
                setPrice();
                // let price = number_format(arVariationShopto[v]['regularprice'], 0, " ", " ");
                // $('.regularprice').text(price);
                // $('[name="variation_id"]').val(v);
                // $('#addCartSingle').data('variation_id', v)
                // $('#addCartSingle').data('price', price);

            }
        });
    }
    // добавить в корзину 
    $('#addCartSingleShopto').click(function(event) {
        event.preventDefault();
        let $thisbutton = $(this),
            product_id = $thisbutton.data('id');
        $thisbutton.prop('disabled', true);
        let count = parseInt(count_btn.val());
        let variation_id = "0";
        if (typeof arVariationShopto !== "undefined") {
            variation_id = activeShopto;
        }
        let data = {
            action: 'woocommerce_ajax_add_to_cart',
            product_id: product_id,
            product_sku: '',
            quantity: count,
            variation_id: variation_id,
        };
        $(document.body).trigger('adding_to_cart', [$thisbutton, data]);
        $.ajax({
            type: 'post',
            url: myajax.url,
            data: data,
            beforeSend: function(response) {
                $thisbutton.prop('disabled', true).addClass('loading');
            },
            complete: function(response) {
                $thisbutton.prop('disabled', false).removeClass('loading');
            },
            success: function(response) {
                var type = $thisbutton.data('type');
                if (typeof type !== "undefined") {
                    /* 
                    var width = 40;
                    var src = $thisbutton.data('image');
                    var top = $thisbutton.offset().top;
                    var left = $thisbutton.offset().left;
                    $('<img />').css({
                        'position': 'absolute',
                        'display': 'block',
                        'width': width + 'px',
                        'height': 'auto',
                        'z-index': '11100',
                        top: top,
                        left: left
                    }).attr('src', src).appendTo("body").animate({
                        opacity: 1,
                        left: $("#miniCart").offset()['left'],
                        top: $("#miniCart").offset()['top'],
                        width: width
                    }, 1000, function() {
                        $(this).remove();
                        let count = $('#miniCartCount').text();
                        $('#miniCartCount').text(parseInt(count) + 1);

                    });
                    */
                } else {
                    var title = $thisbutton.data('title'),
                        image = $thisbutton.data('image'),
                        sku = $thisbutton.data('sku');
                    $('#orderImg').attr('src', image)
                    $('#orderTitle').text(title)
                    $('#orderSku').text(sku)
                    // $('#orderPrice').text(price)
                    setPrice();
                    $.magnificPopup.open({
                        items: {
                            src: '#order',
                            type: 'inline'
                        }
                    });
                    let countText = $('#miniCartCount').text();
                    $('#miniCartCount').text(parseInt(countText) + count);
                }
                yaCounter54680992.reachGoal('zakaz');
            },
        });
        return false;
    });

    function setPrice(){
       let count = parseInt(count_btn.val());
       var price=0;
       var total=0;
       if(parseInt(arVariationShopto[activeShopto].saleprice)>0){
           price=parseInt(arVariationShopto[activeShopto].saleprice);
       }else{
           price=parseInt(arVariationShopto[activeShopto].regularprice);
       }
       total=number_format(price*count, 0, " ", " ");
       $('#price').text(total )
       $('#orderPrice').text(total )
       $('.regularprice').text(total )
    }

    var $one_click2=$('#one-click2');

    $('.oneClickShopto').click(function(event) {
        let $this=$(this);
        let title=$this.data('title');
        let image=$this.data('image');
        let price=$this.data('price');
        let sku=$this.data('sku');
        $('.order-modal__title',$one_click2).text(title);
        $('.sku_text',$one_click2).text(sku);
        $('.regularprice',$one_click2).text(price);
        $('.regularprice',$one_click2).text(price);
        $('.imgCont',$one_click2).find('img').attr('src',image);


    });

})(jQuery)

jQuery(document).ready(function($) {
     $('.filterOrderDiv').click(function(event) {
         let v=$(this).data('value');
         $('[name="orderby"]').val(v);
         document.getElementById('WoocommerceOrderingForm').submit();
     });
     if($('[name="orderby"]').length){
        let v=$('[name="orderby"]').val();
        $('.filterOrderDiv').each(function(index, el) {
            let th=$(el).data('value');
            if(th==v){
                $(el).find('span').addClass('text-primary')
            }
        });
     }
});