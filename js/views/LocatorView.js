var app = app || {};

(function ($) {

    app.LocatorView = Backbone.View.extend({

        el: '#locator',

        events: {
            'click #gallery-btn': 'showGallery',
            'click #list-btn': 'showList',
            'keyup .search-box': 'searchFilter'
        },

        initialize: function () {
            this.list = new app.ListView();
            this.currentView = this.list;
            this.listState = "list";
            this.render();
        },

        render: function () {
            this.currentView.$el.css({
                opacity: 0
            });
            this.$('#view').html(this.currentView.el);
            this.currentView.$el.animate({
                opacity: 1
            }, 100, 'ease-in');
        },

        showGallery: function () {
            if (this.state !== "gallery") {
                this.state = "gallery";
                Backbone.trigger("view:state", "gallery");
                this.render();
            }
        },

        showList: function () {
            if (this.state !== "list") {
                this.state = "list";
                Backbone.trigger("view:state", "list");
                this.render();
            }
        },

        searchFilter: function (event) {
            this.showList();
            Backbone.trigger("view:filter", event.target.value);
        }

    });

})(Zepto);