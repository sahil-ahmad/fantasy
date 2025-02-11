(function($) {
    "user strict";

    // preloader
    $(window).on('load', function() {
        $(".preloader").delay(1000).animate({
            "opacity": "0"
        }, 1000, function() {
            $(".preloader").css("display", "none");
        });
    });

    $("select").niceSelect(),

        // aos
        AOS.init({
            once: true,
        })


    $('.video-icon').lightcase();

    $('.img-popup').lightcase();

    $('.my-paroller').paroller();

    //Create Background Image
    (function background() {
        let img = $('.bg_img');
        img.css('background-image', function() {
            var bg = ('url(' + $(this).data('background') + ')');
            return bg;
        });
    })();

    // scroll-to-top
    var ScrollTop = $(".scrollToTop");
    $(window).on('scroll', function() {
        if ($(this).scrollTop() < 100) {
            ScrollTop.removeClass("active");
        } else {
            ScrollTop.addClass("active");
        }
    });

    // header-fixed
    var fixed_top = $(".header-section");
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 500) {
            fixed_top.addClass("animated fadeInDown header-fixed");
        } else {
            fixed_top.removeClass("animated fadeInDown header-fixed");
        }
    });

    $(".navbar li a").on("click", function() {
        var element = $(this).parent("li");
        if (element.hasClass("show")) {
            element.removeClass("show");
            element.children("ul").slideUp(500);
        } else {
            element.siblings("li").removeClass('show');
            element.addClass("show");
            element.siblings("li").find("ul").slideUp(500);
            element.children('ul').slideDown(500);
        }
    });

    window.addEventListener('resize', function() {
        if (screen.width > 991) {
            $('.sub-menu').show();
        } else {
            $('.sub-menu').hide();
        }
    }, true);

    //plan-tab-switcher
    $('.plan-tab-switcher').on('click', function() {
        $(this).toggleClass('active');
        $('.plan-area').toggleClass('change-subs-duration');
        $('.plan-tab').toggleClass('change-color');
    });


    // slider
    var swiper = new Swiper('.training-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            speeds: 1000,
            delay: 1500,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    var swiper = new Swiper('.clientreviews_slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            991: {
                slidesPerView: 1,
            },
            767: {
                slidesPerView: 1,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });
    var swiper = new Swiper('.ScreenSlide_slider', {
        slidesPerView: 5,
        spaceBetween: 25,
        loop: true,
        navigation: {
            nextEl: '.slider-next',
            prevEl: '.slider-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            speeds: 2000,
            delay: 4000,
        },
        speed: 1000,
        breakpoints: {
            1100: {
                slidesPerView: 4,
            },
            991: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 2,
            },
            575: {
                slidesPerView: 1,
            },
        }
    });

    //sidebar Menu
    $(document).on('click', '.header-toggle-area', function() {
        $('.page-wrapper').toggleClass('show');
    });

    //Cross Menu
    $('.nav-menu-close').on('click', function() {
        $('.page-wrapper').removeClass('show');
    });

})(jQuery);