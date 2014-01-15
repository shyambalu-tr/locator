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

            _this = this;
            // console.log(this.$('.desks'));
            this.$('.desks').on('tap', function(e) {
                console.log(e.target.id);

                em = app.employees.findWhere({
                    deskid: e.target.id
                });

                if (em) {
                    _this.render(app.employees.findWhere({
                        deskid: e.target.id
                    }));
                    _this.animateLocation();
                }
            });

            this.listenTo(Backbone, "emview:click", this.render);
            this.listenTo(Backbone, "view:rendered", this.animateLocation);
        },

        render: function(em) {
            if (em.model) this.model = em.model.toJSON();
            else this.model = em.toJSON();

            this.$('#info').html(this.listTemplate(this.model));
            this.$el.css({
                opacity: 0
            });

            // this.testClosePillar();
        },

        animateLocation: function() {
            var _this = this;

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

            this.$('#lineOfSight').animate({
                'opacity': '0',
                '-webkit-transform': 'rotate(0deg)',
            }, 0, 'ease-in', function() {
                _this.animateContinue();
            });
        },

        animateContinue: function() {
            var _this = this;

            setTimeout(function() {
                _this.$el.animate({
                    opacity: 1
                }, 200, 'ease-in');
            }, 0);

            this.desk = '#' + this.model.deskid;
            this.pillar = this.calcClosePillar(this.$(this.desk));

            var degree = 'rotate(' + this.calcDegree(this.model.deskid) + 'deg)';
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

            setTimeout(function() {
                _this.$('#lineOfSight').animate({
                    'opacity': '1',
                    '-webkit-transform': degree,
                }, 1000, 'ease-in-out');
            }, 900);
        },

        testClosePillar: function() {
            for (var i = 0; i < 144; i++) {
                var desk = '#d' + i;
                var pillar = this.calcClosePillar(this.$(desk));
                this.$(desk).html(i);
            }
        },

        calcClosePillar: function(src) {
            var min = 4294967295;
            var pillar = null;

            for (var i = 0; i < this.pillars.length; i++) {

                var x = Math.abs((src.offset().left - $(this.pillars[i]).offset().left));
                var y = Math.abs((src.offset().top - $(this.pillars[i]).offset().top));

                var dist = Math.sqrt(x * x + y * y);

                // console.log($(this.pillars[i]).html(), x, y, dist);

                if (dist < min) {
                    min = dist;
                    pillar = this.pillars[i];
                }
            }
            return pillar;
        },

        calcDegree: function(desk) {
            var p1 = $('#' + desk).offset();
            var p2 = $('#lineOfSight').offset();
            var delta_x = (p1.left + (p1.width / 2)) - p2.left;
            var delta_y = (p2.top + (p2.height / 2)) - (p1.top + (p1.height / 2));

            console.log(p1, p2);
            console.log(delta_x, delta_y);

            var deg = Math.ceil(Math.atan2(delta_y, delta_x) * (180 / 3.14159265)) * -1;
            console.log(deg);

            return deg;
        }

    });
})(Zepto);
