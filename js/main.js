$(document).ready(function(){
    $('.Iphone-screens_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
    });

    
    $('.Cusomers_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                arrows: true,
                slidesToShow:1 
              }
            },
        ]
    });

    $('.Cusomers_slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.slick-slide').removeClass('slick-active-first slick-active-last');
        $('.slick-active').eq(1).addClass('slick-active-first');
        $('.slick-active').eq(3).addClass('slick-active-last');
      }).trigger('afterChange');
});


let formInput2 = document.getElementById('.Iphone-screens_form_input');
let formButton2 = document.getElementById('.Iphone-screens_form_input_button');

function clearForm2() {
    formInput2.value = '';
}

formInput2.addEventListener('input',function (event) {
    if (formInput2.validity.typeMismatch) {
        formInput2.setCustomValidity('I expect an e-mail');
    }
    else {
        formInput2.setCustomValidity('')
    }
});


$(document).ready(function(){
    
});