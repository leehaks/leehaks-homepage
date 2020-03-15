$(window).scroll(function () {

    scrollPercent = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;

    // Scroll Down 
    if (scrollPercent >= 2) {
        $('#webUI').addClass('show');
        $('.navbar-header.desk .logo img').attr('src','./images/logo.png'); 

        $('#insta').attr('src','./images/icon/insta-w.svg'); 
        $('#facebook').attr('src','./images/icon/facebook-w.svg'); 
        $('#git').attr('src','./images/icon/github-w.svg'); 
        
    } else {
        // Scroll Up
        if (scrollPercent <= 2) {
            $('#webUI').removeClass('show');
            $('.navbar-header.desk .logo img').attr('src','images/logo2.png')

            $('#insta').attr('src','./images/icon/insta.svg'); 
            $('#facebook').attr('src','./images/icon/facebook.svg'); 
            $('#git').attr('src','./images/icon/github.svg'); 
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



