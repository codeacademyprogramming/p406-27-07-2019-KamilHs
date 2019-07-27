$(document).ready(function () {
    var initialScroll = 0;
    $(window).scroll(function (e) {
        const scroll = $(window).scrollTop();
        const $header = $('header');
        const headerHeight = $header.innerHeight();
        if (scroll > headerHeight) {
            const currentScroll = $(this).scrollTop();
            if (initialScroll > currentScroll) {
                $header.addClass('down');
            }
            else {
                $header.removeClass('down');
            }
            initialScroll = currentScroll;
        }
    })
});