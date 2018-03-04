(function ($) {
    $(document).ready(function () {
        /*panel navigatsii*/
        function lpHeader() {
            if ($(window).scrollTop() == 0) {
                $('header').addClass('top');
            } else {
                $('header.top').removeClass('top');
            }
        }
        lpHeader();
        $(window).on('scroll', lpHeader);

        /*plavni scroll*/
        var lpNav = $('header ul');
        lpNav.find('li a').on('click', function (e) {
            var linkTrgt = $($(this).attr('href'));
            if (linkTrgt.length > 0) { /*proverka na nalichie elementa*/
                e.preventDefault();
                var offset = linkTrgt.offset().top;
                $('html, body').animate({
                    scrollTop: offset - linkTrgt.data('offset')
                }, 750)
            }
        });
        /*activniy punkt*/
        function lpSetNavActive() {
            var curItem = '';
            $('section').each(function () {
                if ($(window).scrollTop() > $(this).offset().top - 200) {
                    curItem = $(this).attr('id');
                }
            });
            if (lpNav.find('li.active a').attr('href') != '#' + curItem || lpNav.find('li.active').length == 0) {
                lpNav.find('li.active').removeClass('active');
                lpNav.find('li a[href="#' + curItem + '"]').parent().addClass('active');
            }
        }
        lpSetNavActive();
        $(window).on('scroll', lpSetNavActive);

        /*slideshow*/
        $(".lp-slider1").owlCarousel({
            items: 1,
            nav: true,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
        });
        $(".lp-slider1").on('changed.owl.carousel', function (e) {
            console.log(e.item.index);
        });
        /*hometask*/
        $(".lp-slider2").on('initialize.owl.carousel', function (e) {
            console.log('initialize started');
        });
        $(".lp-slider2").on('changed.owl.carousel', function (e) {
            console.log('changed to item ' + e.item.index);
        });
        $(".lp-slider2").on('resize.owl.carousel', function (e) {
            console.log('resized');
        });
        $(".lp-slider2").owlCarousel({
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 2,
                    nav: true
                },
                1000: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            },
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            dotsEach: true
        });
        /*button*/
        $('#change-slider-button').on('click', function () {
            var index = $('#slider-index').val();
            if (!isNaN(index)) {
                $(".lp-slider2").trigger("to.owl.carousel", index - 1);
            }
        })
        /*Доп задание*/
        $(".lp-slider3").owlCarousel({
            items: 1,
            nav: true,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
        });
        $(".lp-slider4").owlCarousel({
            items: 3,
            nav: true,
            navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
            dotsEach: true
        });
        $(".lp-slider3").on('changed.owl.carousel', function (e) {
            console.log('slider 3 changed to item ' + e.item.index);
            if (e.item.index == 0) {
                $(".lp-slider4").trigger("to.owl.carousel", 0);
            } else if (e.item.index < 8) {
                $(".lp-slider4").trigger("to.owl.carousel", e.item.index - 1);
            } else {
                $(".lp-slider4").trigger("to.owl.carousel", 7);
            }
        });
        $(".lp-slider4 img").on('click', function (e) {
            var sliderindex = $(e.target).data('index');
            console.log(sliderindex);
            $(".lp-slider3").trigger("to.owl.carousel", sliderindex);
            if (sliderindex == 0 || sliderindex == 9) {
                return;
            }
            $(".lp-slider4").trigger("to.owl.carousel", sliderindex - 1);
        })

    });
})(jQuery)
