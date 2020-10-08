/*слайдер*/

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

/*слайдер*/

/*валідація форми*/

let formInput2 = document.getElementById('email');

formInput2.addEventListener('input',function (event) {
    if (formInput2.validity.typeMismatch) {
        formInput2.setCustomValidity('I expect an e-mail');
    }
    else {
        formInput2.setCustomValidity('')
    }
});

/*валідація форми*/

/*Плавний якорь*/

const anchors = document.querySelectorAll("a[href*='#']");

for (let anchor of anchors) {
    anchor.addEventListener('click',function (e) {
        e.preventDefault();
        const blockID = anchor.getAttribute('href');
        document.querySelector('' + blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

/*Плавний якорь*/

/*обробка роботи гамбургер меню*/

let headerHamburgerMenuBox = document.getElementById('header_hamburger_menu_box');
let headerHamburgerButton = document.getElementsByName('header_hamburger_button');
let menuToggle = document.getElementById('menu__toggle');

function eventHamburgerMenu() {
    if (this.checked) {
        for (let i = 0 ; i < headerHamburgerButton.length; i++) {
            headerHamburgerButton[i].onclick = function () {
                headerHamburgerMenuBox.style.display = 'none';
                if (headerHamburgerMenuBox.style.display = 'none') {
                    if (menuToggle.checked) {
                        menuToggle.checked = !menuToggle.checked;
                    }
                }
            }
        }
        headerHamburgerMenuBox.style.display = 'flex';
    }
}
menuToggle.addEventListener('click',eventHamburgerMenu);

/*обробка роботи гамбургер меню*/

