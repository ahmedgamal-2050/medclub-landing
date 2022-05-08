$(document).ready(function () {
    AOS.init();
    
    var sponsorCarousel = $('#sponsor-carousel');
    sponsorCarousel.owlCarousel({
        items: 5,
        loop: true,
        rewind: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            480: {
                items: 3
            },
            767: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    });

    var blogCarousel = $('#blog-carousel');
    blogCarousel.owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
        }
    });

    var testimonialCarousel = $('#testimonial-carousel');
    testimonialCarousel.owlCarousel({
        loop: true,
        rewind: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 2
            },
        }
    });
});

function changeLang(ele) {
    console.log('ele', ele);
    if (document.body.dir === 'ltr') {
        document.body.dir = 'rtl';
        ele.querySelector('span').innerHTML = 'En';
    }
    else {
        document.body.dir = 'ltr';
        ele.querySelector('span').innerHTML = 'Ar';
    }
}