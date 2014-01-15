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
            'swipe #view': 'reset'
        },

        initialize: function() {
            this.list = new app.ListView();
            this.map = new app.MapView();
            this.scrollSet = false;
            this.scroll = null;
            this.mapTimer = null;
            this.animateTimer = null;

            this.listenTo(Backbone, "emview:click", this.showMap);

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
                    zooming: true,
                    speedMultiplier: 2,
                    animationDuration: 800,
                });
                this.scrollSet = true;
            }
        },

        reflow: function(reset) {
            if (this.currentView === this.list && this.scrollSet === true) {
                if (reset) {
                    this.scroll.scroller.scrollTo(0, 0, false);
                }
                this.scroll.reflow();
            }
        },

        animateView: function() {
            var rand = Math.floor(Math.random() * 500);
            var that = this;

            var idx = Math.floor(Math.random() * app.employees.length);
            var elem = this.list.el.children[idx];
            var transform = elem.offsetLeft + "px " + elem.offsetTop + "px";

            console.log($(elem).html());
            console.log(transform);

            this.animateTimer = setTimeout(function() {
                if (that.state === "gallery") {
                    // that.scroll.scroller.scrollTo(elem.offsetLeft, elem.offsetTop);
                    that.scroll.scroller.zoomBy(2, true, elem.offsetLeft, elem.offsetTop);
                    setTimeout(function() {
                        that.scroll.scroller.zoomBy((1 / 2), true, elem.offsetLeft, elem.offsetTop);
                    }, 1500);
                    that.animateView();
                }
            }, 3500);
        },

        reset: function(event) {
            console.log('reset');
            var that = this;

            if (typeof this.mapTimer == "number") {
                clearTimeout(this.mapTimer);
            }

            this.mapTimer = setTimeout(function() {
                $('.search-box').val('');
                $('.search-box').blur();
                Backbone.trigger("view:filter", '');
                that.showGallery();
            }, 60000);
        },

        changeView: function(view) {

            if (this.currentView !== view) {
                this.currentView = view;
                this.render();
                this.reset();
            }
        },

        showGallery: function() {
            this.changeView(this.list);
            if (this.state !== "gallery") {
                this.state = "gallery";
                Backbone.trigger("view:state", "gallery");
                this.render();
                this.reflow(false);
            }
        },

        showList: function() {
            this.changeView(this.list);
            if (this.state !== "list") {
                this.state = "list";
                Backbone.trigger("view:state", "list");
                this.render();
                this.reflow(false);
            }
        },

        searchFilter: function(event) {
            Backbone.trigger("view:filter", event.target.value);
            this.reflow(true);
            this.reset();
        },

        showMap: function(em) {
            this.changeView(this.map);
            this.$('.search-box').blur();
        },

        addMargin: function() {
            this.showList();
            this.reset();
            // this.reflow(true);
            var virtualKeyboardMargin = $(window).scrollTop() + 270;
            this.$('#view').css({
                'margin-top': virtualKeyboardMargin
            });
        },

        removeMargin: function() {
            this.reset();
            // this.reflow(true);
            this.$('#view').css({
                'margin-top': '0'
            });
        }

    });

})(Zepto);
