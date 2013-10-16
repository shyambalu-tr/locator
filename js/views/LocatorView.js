var app = app || {};

(function($) {

    app.LocatorView = Backbone.View.extend({

        el: '#locator',

        events: {
            'click #gallery-btn': 'showGallery',
            'click #list-btn': 'showList',
            'input .search-box': 'searchFilter',
            'focus .search-box': 'addMargin',
            'blur  .search-box': 'removeMargin',
        },

        initialize: function() {
            this.list = new app.ListView();
            this.map = new app.MapView();
            this.scrollSet = false;
            this.scroll = null;

            this.listenTo(Backbone, "emview:click", this.showMap);
            this.listenTo(Backbone, "view:reflow", this.reflow);

            this.currentView = this.list;
            Backbone.trigger("view:state", "gallery");
            this.state = "gallery";

            this.render();
        },

        render: function() {
            this.$('#view').css({
                opacity: 0
            });
            this.$('#view').html(this.currentView.el);
            this.$('#view').animate({
                opacity: 1
            }, 200, 'ease-in', function() {
                // console.log(this.firstChild.id);
                if (this.firstChild.id === "map") {
                    Backbone.trigger("view:rendered");
                }
            });

            if (this.currentView === this.list && this.scrollSet === false) {
                this.scroll = new EasyScroller(this.list.el, {
                    scrollingX: false,
                    scrollingY: true,
                    zooming: false,
                    speedMultiplier: 2
                });
                this.scrollSet = true;
            }
            this.reflow();
        },

        reflow: function() {
            if (this.currentView === this.list && this.scrollSet === true) {
                this.scroll.scroller.scrollTo(0, 0, false);
                this.scroll.reflow();
            }
        },

        changeView: function(view) {
            if (this.currentView !== view) {
                this.currentView = view;
                this.render();
            }
        },

        showGallery: function() {
            this.changeView(this.list);
            if (this.state !== "gallery") {
                this.state = "gallery";
                Backbone.trigger("view:state", "gallery");
                this.render();
            }
        },

        showList: function() {
            this.changeView(this.list);
            if (this.state !== "list") {
                this.state = "list";
                Backbone.trigger("view:state", "list");
                this.render();
            }
        },

        searchFilter: function(event) {
            this.showList();
            Backbone.trigger("view:filter", event.target.value);
            this.reflow();
        },

        showMap: function(em) {
            this.changeView(this.map);
            this.$('.search-box').blur();
        },

        addMargin: function() {
            if (this.currentView === this.list) {
                var virtualKeyboardMargin = $(window).scrollTop() + 270;
                this.$('#view').css({
                    'margin-top': virtualKeyboardMargin
                });
            }
        },

        removeMargin: function() {
            this.$('#view').css({
                'margin-top': '0'
            });
        }

    });

})(Zepto);
