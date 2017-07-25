$(document).ready(function(){
	$(".menu-icon").on("click", function(){
		$('nav ul').toggleClass('showing animated fadeIn');
	});
});

$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll > 500) {
            $('nav').addClass('menu-fixed animated fadeIn');
        } else {
            $('nav').removeClass('menu-fixed');
        }
    });
});