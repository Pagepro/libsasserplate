/*globals jQuery, window, document */
(function ($, window, document) {
    "use strict";
    window.CHANGE_ME = window.CHANGE_ME || {
        $body: null,
        init: function () {
            this.$body = $('body');
            this.liveReload();
        },
        liveReload: function () {
            if (window.location.hostname === 'localhost') {
                this.$body.append('<script src="//localhost:9000/livereload.js"></script>');
            }
        }
    };
    $(document).on('ready', function () {
        window.CHANGE_ME.init();
    });
}(jQuery, window, document));