var menus = require('./menu');

function initMenu() {
    for (var i=0; i<menus.length; i++) {
        var template = require('../template/header-menu.hbs');
        var menuHtml = template(menus[i]);

        $('.header-menu').append(menuHtml);
    }
}

initMenu();

$('.header-menu > li').on('mouseover', function() {
    var subMenu = $(this).find('.header-sub-menu');
    var subMenuItemWidth = subMenu.find('li').outerWidth();
    var subMenuItemMaxCount = 5;
    var subMenuItemCount = subMenu.find('li').length;

    var width = subMenuItemWidth
        * Math.min(subMenuItemCount, subMenuItemMaxCount);

    if ($(this).offset().left + width > $(window).width()) {
        var subMenuLeft = $(window).width() - ($(this).offset().left + width);
        subMenu.css('left', subMenuLeft);
    }
    else {
        subMenu.css('left', 0);
    }

    subMenu.width(width);
    subMenu.show();
});

$('.header-menu > li').on('mouseout', function() {
    $(this).find('.header-sub-menu').hide();
});