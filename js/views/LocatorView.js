var app = app || {};

(function($) {

    app.LocatorView = Backbone.View.extend({

        el: '#locator',

        events: {
            'click #gallery-btn': 'showGallery',
            'click #list-btn': 'showList',
            'input .search-box': 'searchFilter',
        },

        initialize: function() {
            this.list = new app.ListView();
            this.map = new app.MapView();

            this.listenTo(Backbone, "emview:click", this.showMap);

            this.currentView = this.list;
            Backbone.trigger("view:state", "gallery");
            this.state = "gallery";

            this.render();
        },

        render: function() {
            this.currentView.$el.css({
                opacity: 0
            });
            this.$('#view').html(this.currentView.el);
            this.currentView.$el.animate({
                opacity: 1
            }, 200, 'ease-in', function() {
                if (this.id === "map") {
                    Backbone.trigger("view:rendered");
                }
            });
        },

        changeView: function(view) {
            if (this.currentView !== view) {
                this.currentView = view;
                this.render();
            }
        },

        showGallery: function() {
            if (this.state !== "gallery") {
                this.state = "gallery";
                Backbone.trigger("view:state", "gallery");
                this.changeView(this.list);
                this.render();
            }
        },

        showList: function() {
            if (this.state !== "list") {
                this.state = "list";
                Backbone.trigger("view:state", "list");
                this.changeView(this.list);
                this.render();
            }
        },

        searchFilter: function(event) {
            this.showList();
            Backbone.trigger("view:filter", event.target.value);
        },

        showMap: function(em) {
            this.changeView(this.map);
        }

    });

})(Zepto);
