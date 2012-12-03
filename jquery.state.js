;(function ($, window, document, undefined) {
    $.fn.state = function(state) {
        if (state) {
            return this.each(function() {
                $(this).attr('data-state', state);
            });
        } else {
            return this.attr('data-state') || null;
        }
    };
})(jQuery, window, document);
