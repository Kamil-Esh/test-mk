$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        margin: 30,
        loop: true,
        center: true,
        nav: true,
        mouseDrag: false,
    });
});
$(document).ready(function () {
    $(".owl-photos").owlCarousel({
        items: 1,
        margin: 30,
        loop: true,
        center: true,
        nav: true,
        mouseDrag: false,
    });
});
$('.first-carousel').slick();
$('.carousel').slick();
$('.slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    dots: true
});
