var app = app || {};

$(function () {

    window.onresize = function () {
        Backbone.trigger('window:resize');
    };

    // var filterPersons = _.filter(app.persons, function (item) {
    //     return item.firstname !== 'firstname';
    // }, this);
    app.employees.reset(app.persons);

    app.locator = new app.LocatorView();
});
