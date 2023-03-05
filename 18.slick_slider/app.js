$(function(){
    $('.slide_01').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        nextArrow: $('.next'),
        prevArrow: $('.prev'),
    });

    $('.slide_02').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrow: false,
    });

    //scroll reveal
    //ScrollReveal().reveal('.headline', {distance: '50px'});
    ScrollReveal().reveal('.img_01', {
        distance: '50px', 
        origin: 'left',
    });
    ScrollReveal().reveal('.img_02', {
        distance: '50px', 
        origin: 'right',
        delay: 500,
    });
    ScrollReveal().reveal('.img_03', {
        distance: '100px', 
        origin: 'bottom',
    });
    ScrollReveal().reveal('.img_04', {
        distance: '100px', 
        origin: 'top',
    });
})