var app = app || {};

(function ($) {

    app.ListView = Backbone.View.extend({

        tagName: 'ul',
        id: 'list',

        initialize: function () {
            this.listenTo(app.employees, 'reset', this.render);
            this.render();
        },

        render: function () {
            this.$el.empty();
            app.employees.each(this.addEmployee, this);
        },

        addEmployee: function (em) {
            var view = new app.EmployeeView({
                model: em,
            });
            this.$el.append(view.render().el);
        },

    });

})(Zepto);
