var app = app || {};

(function () {
    
    app.Employee = Backbone.Model.extend({

        defaults: {
            firstname  : '',
            secondname : '',
            jobtitle   : '',
            phonenumber: '',
            image      : '',
            deskid     : '',
            skype      : '',
            email      : ''
        }

    });
})();
