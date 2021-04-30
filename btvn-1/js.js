$(document).ready(function () {
    $('.header__button').click(function (e) { 
        e.preventDefault();
        $('.header__nav-list').toggleClass('hid-show');
    });
});