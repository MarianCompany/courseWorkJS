function initPopups() {
    $('.popup').click(function (event) {
        if(this === event.target) {
            closeActivePopup();
        }
    });

    $('.popup-btn').click(function(event) {
        event.preventDefault();
        const popupID = $(event.target).attr('data-popupID');

        $(popupID).fadeIn();
        $(popupID).addClass('active-popup');
        $('body').css('overflow', 'hidden');
    });
}

function closeActivePopup() {
    let activePopup = $('.active-popup');
    activePopup.fadeOut();
    activePopup.removeClass('active-popup');
    $('body').css('overflow', 'auto');
}

