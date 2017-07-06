$('.header-menu > li').on('mouseover', function() {
    $(this).find('.header-sub-menu').show();
});

$('.header-menu > li').on('mouseout', function() {
    $(this).find('.header-sub-menu').hide();
});