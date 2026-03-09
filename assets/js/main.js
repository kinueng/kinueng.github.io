/*
    Heavily modified source code by Kin Ueng
    Dimension by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    $(function() {

        var $window = $(window),
            $body = $('body'),
            $header = $('#header');

        // Disable animations/transitions until the page has loaded (grown-up mode only).
        if (document.documentElement.classList.contains('grown-up-design')) {
            $body.addClass('is-loading');

            $window.on('load', function() {
                window.setTimeout(function() {
                    $body.removeClass('is-loading');
                }, 100);
            });
        }

        // Buttons.
        var $nav = $header.children('#buttons'),
            $nav_li = $nav.find('li');

        // Add "middle" alignment classes if we're dealing with an even number of items.
        if ($nav_li.length % 2 == 0) {
            $nav.addClass('use-middle');
            $nav_li.eq( ($nav_li.length / 2) ).addClass('is-middle');
        }

    });

})(jQuery);
