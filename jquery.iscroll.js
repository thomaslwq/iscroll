/*!
    jQuery iscroll v2.0 - 2013-10-11
    (c) 2013 https://github.com/thomaslwq
    license: http://www.opensource.org/licenses/mit-license.php
*/
(function($) {
    $.fn.iscroll = function(options) {
        var config = {
            "speed" : 800
        };

        if (options) {
            $.extend(config, options);
        }

        return this.each(function() {

            var $this = $(this);

            $(window).scroll(function() {
                if ($(this).scrollTop() > 100) {
                    $this.fadeIn();
                } else {
                    $this.fadeOut();
                }
            });

            $this.click(function(e) {
                e.preventDefault();
                e.stopPropagation();
                $("body, html").animate({
                    scrollTop : 0
                }, config.speed);
            });

        });
    };
})(jQuery);
