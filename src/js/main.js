(function ($, window, document) {
    "use strict";
    window.CHANGE_ME = window.CHANGE_ME || {
        $body: null,
        init: function () {
            this.$body = $('body');
        },
        breakpoint: function () {
            return window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/\"/g, '');
        }
    };
    $(document).on('ready', function () {
        window.CHANGE_ME.init();
    });
}(jQuery, window, document));