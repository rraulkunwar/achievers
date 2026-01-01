$(document).ready(function() {
    // 1. Initialize Animations
    new WOW().init();

    // 2. Initialize Client Slider
    $(".client-carousel").owlCarousel({
        loop: true,
        margin: 40,
        autoplay: true,
        autoplayTimeout: 2500,
        nav: false,
        dots: false,
        responsive: {
            0: { items: 2 },
            600: { items: 3 },
            1000: { items: 5 }
        }
    });

    // 3. Smooth Scroll
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800);
        }
    });
});
// Handle Contact Form Submission
$('#buildForm').on('submit', function(e) {
    e.preventDefault();
    const btn = $(this).find('button');
    btn.text('SENDING...');
    
    // Simulate API call
    setTimeout(() => {
        alert('Thank you! Your message has been sent. We will get back to you shortly.');
        $('#contactModal').modal('hide');
        btn.html('SEND MESSAGE &rarr;');
        this.reset();
    }, 1500);
});
