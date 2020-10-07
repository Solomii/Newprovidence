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


let formInput2 = document.getElementById('email');


formInput2.addEventListener('input',function (event) {
    if (formInput2.validity.typeMismatch) {
        formInput2.setCustomValidity('I expect an e-mail');
    }
    else {
        formInput2.setCustomValidity('')
    }
});


let headerHamburgerTour = document.getElementById('header_hamburger_tour');
let headerHamburgerFeatures = document.getElementById('header_hamburger_features');
let headerHamburgerPricing = document.getElementById('header_hamburger_pricing');
let headerHamburgerHelp = document.getElementById('header_hamburger_help');
let headerHamburgerContacts = document.getElementById('header_hamburger_contacts');
let headerHamburgerToggle = document.getElementById('header_hamburger_toggle');

let hamburgerMenu = document.getElementById('hamburger_menu');




