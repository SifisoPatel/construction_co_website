$(document).ready(function () {

    $(".carousel-sliders").owlCarousel({
        animateOut: 'fadeOut',
        animateIn: 'flipInX',
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        nav: true,
        dots: false,
        navContainer: '.banner .custom-nav',
        items: 1
    });

    $(".carousel-testimonials").owlCarousel({

        loop: true,
        margin: 10,
        nav: true,
        items: 1
    });

})