/* javascript file */

$(window).scroll(function() {
    if ($(this).scrollTop() > 0){
        $('.navbar').addClass('navbar-sticky');
    }
    else {
        $('.navbar').removeClass('navbar-sticky');
    }
}).trigger('scroll');