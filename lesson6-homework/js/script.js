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

    });
})(jQuery)

















