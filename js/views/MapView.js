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
            this.pillar = null;
            this.desk = null;

            this.listenTo(Backbone, "emview:click", this.render);
            this.listenTo(Backbone, "view:rendered", this.animateLocation);
        },

        render: function(em) {
            console.log(this);
            this.model = em.model.toJSON();
            this.$('#info').html(this.listTemplate(this.model));
            this.$el.css({
                opacity: 0
            });

        },

        animateLocation: function(em) {
            
            var _this = this;
            console.log("test");
            
            if (this.pillar !== null) {
                this.pillar.style.opacity = 0;
            }

            if (this.desk !== null) {
                document.getElementById(this.desk.replace('#', "")).style.opacity = 0;
            }

            this.$('#map-svg').css({
                opacity: 0
            });

            this.$('#youAreHere').css({
                opacity: 0
            });

            this.$('#lineOfSight').css({
                opacity: 0
            });

            setTimeout(function() {
                _this.$el.animate({opacity: 1}, 200, 'ease-in');
            }, 0);

            this.desk = '#' + this.model.deskid;
            this.pillar = this.calcClosePillar(this.$(this.desk));

            var _desk = this.desk;
            var _pillar = this.pillar;

            setTimeout(function() {
                _this.$('#map-svg').css({
                    opacity: 1
                });
            }, 300);

            setTimeout(function() {
                _this.$('#youAreHere').css({
                    opacity: 1
                });
            }, 900);

            setTimeout(function() {
                _this.$(_desk).css({
                    opacity: 1
                });
            }, 900);

            setTimeout(function() {
                _this.$(_pillar).css({
                    opacity: 1
                });
            }, 900);

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
