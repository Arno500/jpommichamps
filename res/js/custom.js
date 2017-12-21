$(document).ready(function () {
    'use strict';
    $('.parallax').parallax();
});

//From https://stackoverflow.com/a/18365991

function smoothScrollingTo(target) {
    'use strict';
    $('html,body').animate({
        scrollTop: $(target).offset().top
    }, 1000, 'easeOutExpo');
}
$('a[href*=\\#]').on('click', function (event) {
    'use strict';
    event.preventDefault();
    smoothScrollingTo(this.hash);
});

$(document).ready(function () {
    'use strict';
    smoothScrollingTo(location.hash);
});

$(document).idle({
    onIdle: function () {
        'use strict';
        smoothScrollingTo($("#front"));
    },
    idle: 120000
});

$(document).scroll(function () {
    'use strict';
    $('.section').each(function () {
        var post = $(this);
        var navitem = $('a[href="#' + post.attr("id") + '"]');
        var position = post.position().top - $(window).scrollTop();

        if (position <= 50 && position + post.height() >= 25) {
            navitem.addClass('active');
        } else {
            navitem.removeClass('active');
        }
    });
});