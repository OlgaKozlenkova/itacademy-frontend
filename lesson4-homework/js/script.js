//task1-9
(function ($) {
    $(document).ready(function () {
        $('#go').on('click', function () {
            $('div').addClass('main');
            $('div.main').append('<ul></ul>');
            var i;
            for (i = 1; i <= 10; i++) {
                $('div.main ul').append('<li>Пункт ' + i + '</li>');
            };
            $('div.main ul li').wrapInner('<span></span>');
            $('div.main ul li:nth-child(2n+1)').addClass('second');
            $('div.main ul li').each(function (i, item) {
                $(item).attr('order', i+1);
            });
            $('div.main ul li').remove('li:last-child');
            $('div.main').prepend('<h3>Перечень работ</h3>');


        });

    });
})(jQuery);
