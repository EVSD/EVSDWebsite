Meteor.subscribe("users");

Template.login.events({
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
        if(error){
            console.log(error.reason);
            Materialize.toast("Incorrect Credentials", 3000);
        } else {
            Router.go("profile");
        }
      });

    }
});
