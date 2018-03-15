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
        /*$(".lp-slider1").on('changed.owl.carousel', function (e) {
            console.log(e.item.index);
        });*/
        /*hometask*/
        /*$(".lp-slider2").on('initialize.owl.carousel', function (e) {console.log('initialize started');
        });
        $(".lp-slider2").on('changed.owl.carousel', function (e) {
            console.log('changed to item ' + e.item.index);
        });
        $(".lp-slider2").on('resize.owl.carousel', function (e) {
            console.log('resized');
        }); */
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
        /*$('#change-slider-button').on('click', function () {
            var index = $('#slider-index').val();
            if (!isNaN(index)) {
                $(".lp-slider2").trigger("to.owl.carousel", index - 1);
            }
        })*/
        /*Доп задание*/
        /* $(".lp-slider3").owlCarousel({
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
         })*/

        /*tabuliator*/
        $('.lp-tabs').each(function () {
            var tabs = $(this),
                tabsTitlesNames = [];
            tabs.find('div[data-tab-title]').each(function () {
                tabsTitlesNames.push($(this).attr('data-tab-title'));
            }).addClass('lp-tab');
            tabs.wrapInner('<div class="lp-tabs-content"></div>');
            tabs.prepend('<div class="lp-tabs-titles"><ul></ul></div>');
            /*hometask2*/
            /*tabs.append('<div class="lp-tabs-footer"></div>');*/
            var tabsTitles = tabs.find('.lp-tabs-titles'),
                tabsContent = tabs.find('.lp-tabs-content'),
                tabsContentTabs = tabsContent.find('.lp-tab'),
                tabsContentFooter = tabs.find('.lp-tabs-footer');
            tabsTitlesNames.forEach(function (value) {
                tabsTitles.find('ul').append('<li>' + value + '</li>');
            });
            var tabsTitlesItems = tabsTitles.find('ul li');
            tabsTitlesItems.eq(0).addClass('active');
            tabsContentTabs.eq(0).addClass('active').show();
            tabsContent.height(tabsContent.find('.active').outerHeight());
            /*hometask2*/
            /*tabsContentFooter.text("Активная вкладка: Услуга 1/4");*/
            tabsTitlesItems.on('click', function () {
                /*hometask1*/
                /*tabsTitlesItems.mouseenter(function () {*/
                if (!tabs.hasClass('changing')) {
                    tabs.addClass('changing');
                    var curTab = tabsContent.find('.active'),
                        nextTab = tabsContentTabs.eq($(this).index());
                    tabsTitlesItems.removeClass('active');
                    $(this).addClass('active');
                    var curHeight = curTab.outerHeight();
                    nextTab.show();
                    var nextHeight = nextTab.outerHeight();
                    nextTab.hide();
                    if (curHeight < nextHeight) {
                        tabsContent.animate({
                            height: nextHeight
                        }, 500);
                    }
                    curTab.fadeOut(500, function () {
                        if (curHeight > nextHeight) {
                            tabsContent.animate({
                                height: nextHeight
                            }, 500);
                        }
                        nextTab.fadeIn(500, function () {
                            curTab.removeClass('active');
                            nextTab.addClass('active');
                            tabs.removeClass('changing');
                            /*hometask2*/
                            /*tabsContentFooter.text("Активная вкладка: Услуга " + ($(this).index() + 1) + "/4");*/
                        });
                    });
                }
            });
            $(window).on('resize', function () {
                tabsContent.height(tabsContent.find('.active').outerHeight());
            })
        });

        /*Всплывающие окна*/
        /*initialization magnific popup для услуг*/
        $('.lp-mfp-inline').magnificPopup({
            type: 'inline'
        });
        /*gallery magnific popup*/
        $('.lp-gallery').each(function () { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
        });
        
        /*hometask lesson9 task1*/
        $('.dop-info').magnificPopup({
            type: 'ajax'
        });
        /*hometask lesson9 task2*/
        $('.funvideo').magnificPopup({
            type: 'iframe'
        });
        /*hometask lesson9 task3*/
        $('.text-order').magnificPopup({
            type: 'inline',
            callbacks: {
                elementParse: function (item) {
                    var tx = $(item.el).text();
                    $('#order-header').text(tx);
                }
            }
        });
        /*hometask lesson9 task4*/
        $("#some-button").magnificPopup({
            items: [
                {
                    src: 'page1.html',
                    type: 'ajax'
                            },
                {
                    src: 'https://www.youtube.com/watch?v=rewZ5fQpxWg',
                    type: 'iframe'
                            },
                {
                    src: 'img/slideshow/img1.jpg',
                    type: 'image'
                            }
                        ],
            gallery: {
                enabled: true
            }
        })
    });
})(jQuery)
