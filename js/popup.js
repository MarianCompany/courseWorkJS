$(document).ready(function () {

    $('.popup').click(function (event) {
        if(this === event.target) {
            $('.active-popup').fadeOut();
            $('.active-popup').removeClass('active-popup');
            $('body').css('overflow', 'auto');
        }
    });

    addEventsToPopupBtns();
})

function addEventsToPopupBtns() {
    $('.popup-btn').click(onPopupBtnCLick);
}

function onPopupBtnCLick(event) {
    event.preventDefault();
    const popupID = $(event.target).attr('data-popupID');

    $(popupID).fadeIn();
    $(popupID).addClass('active-popup');
    $('body').css('overflow', 'hidden');
}