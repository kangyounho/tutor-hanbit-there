require('bootstrap');
require('../less/theres.less');

var common = require('./common');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var theresId = params.get('id');

try {
    var model = require('./model/theres/' + theresId);
}
catch (e) {
    var model = require('./model/theres/Guam');
}

$('.ht-section-there').css('background-image',
    'url(' + model.background + ')');
$('.ht-there-name').html(model.name);
$('.ht-there-summary').html(model.summary);

$('.ht-tab-btns > li').on('click', function() {
    if ($(this).hasClass('active')) {
        return;
    }

    var tabIndex = $(this).index();

    var tabBtns = $(this).parent('.ht-tab-btns').find('li');
    tabBtns.removeClass('active');
    $(tabBtns[tabIndex]).addClass('active');

    var tabContents = $(this).parents('.ht-tab').find('.ht-tab-contents > li');
    tabContents.removeClass('active');
    $(tabContents[tabIndex]).addClass('active');
});














