(function($) {
    $(document).ready(function() {
        var playButton = $('.control-play'),
            album = $('.album');

        playButton.on('click', function() {
            $('.music-player-container').toggleClass('is-playing');
        });
    });
})(jQuery);