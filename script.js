$(document).ready(function () {

    window.scrollToSection = function (sectionId) {
        $('html, body').animate({
            scrollTop: $("#" + sectionId).offset().top
        }, 800);
    };

    $(window).scroll(function () {
        $(".img-fluid").each(function () {
            let elementTop = $(this).offset().top;
            let windowBottom = $(window).scrollTop() + $(window).height();

            if (elementTop < windowBottom - 100) {
                $(this).animate({ opacity: 1 }, 500);
            }
        });
    });

    $(".img-fluid").css("opacity", "0");
});
