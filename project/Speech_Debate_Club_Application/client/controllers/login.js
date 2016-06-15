Meteor.subscribe("users");

Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=email]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(error){
        if (error) {
            console.log(error.reason);
            window.alert("Wrong login information. Please try again.");
        } else {
            Router.go("home");
        }
        });
    }
});
