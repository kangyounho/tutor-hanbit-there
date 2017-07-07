require('bootstrap');
require('../less/main.less');

var common = require('./common');

var hotActivities = require('./model/hot-activities');
var bestActivities = require('./model/best-activities');

function initHotActivities(hotActivities) {
    var template = require('../template/main/activity.hbs');

    $('.ht-hot-activity').empty();

    for (var i=0; i<hotActivities.length; i++) {
        var html = template(hotActivities[i]);

        $('.ht-hot-activity').append(html);
    }
}

function initBestActivities(bestActivities) {
    var template = require('../template/main/activity.hbs');

    $('.ht-best-activity').empty();

    for (var i=0; i<bestActivities.length; i++) {
        bestActivities[i].rank = i + 1;
        var html = template(bestActivities[i]);

        $('.ht-best-activity').append(html);
    }
}

initHotActivities(hotActivities);
initBestActivities(bestActivities);