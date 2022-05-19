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

    var shopTestimonialCarousel = $('#shop-testimonial-carousel');
    shopTestimonialCarousel.owlCarousel({
        loop: true,
        rewind: true,
        autoplay: true,
        items: 1,
        navText : ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive: {
            0: {
                nav: false,
                dots: true,
            },
            767: {
                nav: true,
                dots: false,
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

function openModal(modalName) {
    const modalDiv = document.getElementById(modalName);
    modalDiv.classList.remove('d-none');
}

function closeModal(modalName) {
    const modalDiv = document.getElementById(modalName);
    modalDiv.classList.add('d-none');
}

function increaseQuantity(id) {
    let qtyInput = document.getElementById(id);
    qtyInput.value = parseInt(qtyInput.value) + 1;
}

function decreaseQuantity(id) {
    let qtyInput = document.getElementById(id);
    if (parseInt(qtyInput.value) > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
    }
}

function hoverRate(rateValue) {
    for (let i = 1; i <= rateValue; i++) {
        document.getElementById(`star-${i}`).querySelector('svg path').style.fill = "#FFE74E";
    }
}

function hoverOutRate(rateValue) {
    for (let i = 1; i <= rateValue; i++) {
        document.getElementById(`star-${i}`).querySelector('svg path').style.fill = "#D9D9D9";
    }
}