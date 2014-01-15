var app = app || {};

$(function() {

    window.onresize = function() {
        Backbone.trigger('window:resize');
    };

    $(document).ready(function() {
        $.ajax({
            type: "GET",
            url: "js/data/FloorMap.csv",
            dataType: "text",
            success: function(data) {
                processData(data);
            },
            error: function() {
                app.employees.reset(app.persons);
                app.locator = new app.LocatorView();
            }
        });
    });

    function processData(input) {
        var persons = CSV.parse(input);

        var filterPersons = _.filter(persons, function(item) {
            return item.firstname !== '';
        }, this);

        console.log(filterPersons);

        app.employees.comparator = function (model) {
            return model.get('secondname');
        };

        app.employees.reset(filterPersons);
        app.locator = new app.LocatorView();
    }

    // app.employees.reset(app.persons);
    // app.locator = new app.LocatorView();
});
