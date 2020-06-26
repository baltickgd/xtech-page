
$(document).ready(function(){
    $('.transaction-setup').on('click', 'p', function () {
        $(this).siblings(".active").removeClass('active');
        $(this).addClass('active')
    });

    let fill;

    window.fill = function(elem) {
        fill = elem.attr('data-final');
        elem.attr('data-progress', fill);
    };

    $(".progress-circle").each(function() {
        window.fill($(this));
    });

    $('.menu').click(function(){
        $('.aside-block').removeClass('hide');
        $('.aside-block').addClass('show');
    });

    $('.mobile-menu-close').click(function(){
        $('.aside-block').removeClass('show');
        $('.aside-block').addClass('hide');
    });

    $('.login-block').on("mouseover", function () {
        $('.account-form').removeClass('hide').addClass('show');
    });

    $('.login-block').on("mouseleave", function () {
        $('.account-form').removeClass('show').addClass('hide');
    });

});