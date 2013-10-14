var app = app || {};

(function($) {

    app.MapView = Backbone.View.extend({

        id: 'map',
        mapTemplate: _.template($('#map-template').html()),
        listTemplate: _.template($('#list-template').html()),

        initialize: function() {
            this.$el.append(this.mapTemplate({}));
            this.pillars = this.$('.pillar');
            this.model = {};
            this.pillar = {};

            this.listenTo(Backbone, "emview:click", this.render);
            this.listenTo(Backbone, "view:rendered", this.animateLocation);
        },

        render: function(em) {
            this.model = em.model.toJSON();
            this.$('#info').html(this.listTemplate(this.model));
        },

        animateLocation: function(em) {
            var desk = '#' + this.model.deskid;
            this.$(desk).css({opacity: 1});

            var pillar = this.calcClosePillar(this.$(desk));
            this.$(pillar).css({opacity: 1});

        },

        testClosePillar: function() {

            for (var i = 0; i < 144; i++) {
                var desk = '#d' + i;
                var pillar = this.calcClosePillar(this.$(desk));
                // console.log(this.$(desk).html($(pillar).html()));
                this.$(desk).html(pillar.html());
            }
        },

        calcClosePillar: function(src) {
            var min = 4294967295;
            var pillar = null;

            for (var i = 0; i < this.pillars.length; i++) {

                var x = Math.abs((src.offset().left - $(this.pillars[i]).offset().left));
                var y = Math.abs((src.offset().top - $(this.pillars[i]).offset().top));

                var dist = Math.sqrt(x * x + y * y);

                console.log($(this.pillars[i]).html(), x, y, dist);

                if (dist < min) {
                    min = dist;
                    pillar = this.pillars[i];
                }
            }
            return pillar;
        }

    });
})(Zepto);
