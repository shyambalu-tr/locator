var app = app || {};

(function ($) {

    app.EmployeeView = Backbone.View.extend({

        tagName: 'li',
        listTemplate: _.template($('#list-template').html()),
        galleryTemplate: _.template($('#gallery-template').html()),

        initialize: function () {

            this.listHtml = this.listTemplate(this.model.toJSON());

            this.keys = ['firstname', 'secondname', 'jobtitle'];
            // this.keys = ['firstname', 'secondname'];
            this.state = 'gallery';
            this.listenTo(Backbone, "view:state", this.setState);
            this.listenTo(Backbone, "window:resize", _.debounce(this.windowResize));
            this.listenTo(Backbone, "view:filter", this.filter);
        },

        render: function () {

            if (this.state === 'list') {
                this.$el.css({
                    'width': '',
                    'height': ''
                });
                this.$el.removeClass('gallery');
                this.$el.html(this.listHtml);
            } else {
                var em = this.model.toJSON();
                em.width = Math.floor($(window).width() / 6);
                em.height = Math.floor(em.width * 0.75);
                this.$el.css({
                    'width': em.width,
                    'height': em.height
                });
                this.$el.addClass('gallery');
                this.$el.html(this.galleryTemplate(em));
            }

            return this;
        },

        setState: function (state) {
            if (this.state !== state) {
                this.state = state;
                // console.log(state);
                this.render();
                this.highlight();
            }
        },

        windowResize: function (state) {
            if (this.state === 'gallery') {
                this.render();
            }
        },

        filter: function (filterval) {

            var filterRE = new RegExp('(' + (filterval.trim().split(" ")).join('|') + ')', 'gi');

            // var test = _.some(_.values(_.pick(this.model.attributes, this.keys)), function (val) {
            //     val = (!isNaN(val) ? val.toString() : val);
            //     return filterRE.test(val);
            // });

            var needles = filterval.trim().split(" ");
            var values = _.values(_.pick(this.model.attributes, this.keys));
            var test = [];

            console.log(values);
            console.log(needles);

            for (var i = 0; i < needles.length; i++) {
                var needleexist = false;
                for (var j = 0; j < values.length; j++) {
                    needleexist = values[j].toLowerCase().indexOf(needles[i].toLowerCase()) >= 0;
                    if (needleexist) {
                        break
                    }
                }
                test.push(needleexist);
            }

            if (test.every(Boolean)) {
                this.show();
                this.highlight(filterRE);
            } else {
                this.hide();
            }

        },

        show: function () {
            this.$el.css({
                'display': 'list-item'
            });
        },

        hide: function () {
            this.$el.css({
                'display': 'none'
            });
        },

        highlight: function (re) {
            if (this.state !== "gallery") {
                this.$el.html(this.listHtml);
                // var re = new RegExp("(" + this.filterval + ")", 'gi');
                // console.log(this.$el.html());

                var t = this.$el.contents().filter(function () {
                    return this.nodeType === 1;
                });

                // console.log(t);

                for (var i = 0; i < t.length; i++) {
                    t[i].innerHTML = t[i].innerHTML.replace(re, '<span class="highlight">$1</span>');
                    // console.log($(t[i]).html());
                }
            }

        }
    });

})(Zepto);
