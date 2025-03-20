$(document).ready(function () {


    window.scrollToSection = function (sectionId) {
        $('html, body').animate({
            scrollTop: $("#" + sectionId).offset().top
        }, 800);
    };

 
    function isInViewport(element) {
        let elementTop = $(element).offset().top;
        let windowBottom = $(window).scrollTop() + $(window).height();
        return elementTop < windowBottom - 100;
    }

 
    $(window).scroll(function () {
        $(".img-fluid, .feedback-box").each(function () {
            if (isInViewport(this) && $(this).css("opacity") == "0") {
                $(this).animate({ opacity: 1 }, 500);
            }
        });
    });


    $(".img-fluid, .feedback-box").css("opacity", "0");

});