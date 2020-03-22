$(window).scroll(function () {

    scrollPercent = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;

    // Scroll Down 
    if (scrollPercent >= 2) {
        $('#webUI').addClass('show');
        $('.navbar-header.desk .logo img').attr('src','./images/logo.png'); 

        
    } else {
        // Scroll Up
        if (scrollPercent <= 2) {
            $('#webUI').removeClass('show');
            $('.navbar-header.desk .logo img').attr('src','images/logo2.png')
        }
    }
});

$(function () {
    
    $('.scroll').click(function (e) {

        e.preventDefault();
        var pos = $(this.hash).offset().top;
        $('html, body').stop().animate({ 'scrollTop': pos }, 500, "easeOutExpo")

    });

})


