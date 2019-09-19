(function($){
    $('table.functional').wrapAll('<div class="table-wrapper"></div>')
})(jQuery);
(function($) {
    ///spasibo/
    document.addEventListener('wpcf7mailsent', function(event) {
        location='/spasibo/';
    }, false);

    $('.linkRadio').click(function(event) {
        location = $(this).data('link');
    });
    let tab = 'tabs';
    $('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function(e) {
        $(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content2').hide().removeClass('active').eq($(this).index()).fadeIn().addClass('active');
    });
    if ($('.tabs_product_cont').length) {
        let first = $('.tabs__btn', $('.tabs_product_cont')).eq(0);
        first.trigger('click');
    }
})(jQuery);
(function($) {
    $(document).on('click', '.addCartSingle', function(e) {
        e.preventDefault();
        var $thisbutton = $(this),
            product_id = $thisbutton.data('id');
        var data = {
            action: 'woocommerce_ajax_add_to_cart',
            product_id: product_id,
            product_sku: '',
            quantity: 1,
            variation_id: 0,
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
    });
})(jQuery);

//корзина
jQuery(document).ready(function($) {
    $('.add-block__btn--minus').click(function(event) {
          event.preventDefault();
          let  $qty=$(this).siblings('.qty'),
               val=$qty.val(),
               min=$qty.attr('min');
          if(parseInt(val)>parseInt(min)&&parseInt(val)!==1) {
              $qty.val(parseInt(val)-1)
          }
    });
    $('.add-block__btn--plus').click(function(event) {
         event.preventDefault();
         let  $qty=$(this).siblings('.qty'),
              val=$qty.val();
         $qty.val(parseInt(val)+1)
    });

    $('[name="checkout"]').submit(function(event) {
        event.preventDefault();
        let $form=$(this),
            $button=$('button',$form);
        $button.prop('disabled', true);
        $.ajax({
            url: myajax.url,
            type: 'POST',
            // dataType: 'json',
            data:$form.serialize() ,
        })
        .done(function() {
            $.magnificPopup.open({
                items: {
                    src: '#thanks',
                    type: 'inline'
                }
            });
            $('.cartItem').remove();
            $('#miniCartCount').text(0);
            
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            $button.prop('disabled', true);
        });
        
        return false;
    });
});