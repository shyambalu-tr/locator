var app = app || {};

(function () {

    var Employees = Backbone.Collection.extend({
        model: app.Employee,
    });

    app.employees = new Employees();
})();