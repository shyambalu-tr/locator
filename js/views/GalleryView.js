var app = app || {};

(function ($) {

    app.GalleryView = Backbone.View.extend({

        tagName: 'div',
        id: 'gallery',
        template: _.template($('#gallery-template').html()),

        initialize: function () {
            this.listenTo(Backbone, 'window:resize', _.debounce(this.render));
            this.render();
        },

        render: function () {
            this.$el.empty();
            app.employees.each(function (item) {
                var em = item.toJSON();
                em.width = ($(window).width() / 6);
                em.height = em.width * 0.75;
                this.$el.append(this.template(em));
            }, this);

            // console.log(this.$el.html());
            return this;
        }

    });

})(Zepto);