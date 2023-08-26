$(document).ready(function(){

    let product_imgs = $('.detail-img');
    let main_img = $('.product-primary-img');

    // $.each(product_imgs, function (index, value){
    //     // product_imgs.alt = '1';
    //     console.log('картинка' + String(value.src) + 'индекс' + index);
    // });

    main_img.on('click', function(){

        $('.slider-background').css('position', 'fixed');
        $.each(product_imgs, function(index, value){
            $('.product-detail-slider').append('<img src="' + String(value.src) + '" />');
        });

        let start_slide = $('.product-main-img-item').attr('alt');
        // console.log('alt=' + start_slide);
        $('.product-detail-slider').slick({
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            initalSlide: start_slide //сюда поставить data-,fskmf (откуда брать)
        });

        $("html,body").css("overflow", "hidden");

    });
    $('.slider-background').on('click', function(){
        $('.slider-background').css('position', 'relative');
        $("html,body").css("overflow", "visible");
    });
});