require('bootstrap');
require('../less/theres.less');

var common = require('./common');
var tab = require('./ht-tab');

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

var areaInfoTemplate = require('../template/theres/area-info.hbs');
var areaInfoHtml = areaInfoTemplate(model);

$('.ht-area-info').html(areaInfoHtml);












