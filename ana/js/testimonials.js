$('.owl-carousel').owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'fadeInDown',
    stagePadding:10,
    smartSpeed:650,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.owl-carousel').owlCarousel({
    animateOut: 'slideOutUp',
    animateIn: 'flipOutX',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
});