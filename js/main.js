(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });

    // Send contact inquiries through WhatsApp without a server-side form handler.
    document.querySelectorAll(".contact-inquiry-form").forEach(function (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            var name = form.elements.name.value.trim();
            var email = form.elements.email.value.trim();
            var subject = form.elements.subject.value.trim();
            var message = form.elements.message.value.trim();
            var text = [
                "Website inquiry",
                "Name: " + name,
                "Email: " + email,
                "Subject: " + subject,
                "Message: " + message
            ].join("\n");
            var whatsappUrl = "https://wa.me/919997211920?text=" + encodeURIComponent(text);

            window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        });
    });
    
})(jQuery);

