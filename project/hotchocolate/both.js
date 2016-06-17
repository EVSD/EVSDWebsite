 var location = "client";
if(Meteor.isServer){
  location="server";
}
setInterval(function(){
  console.log("Drinking hot chocolate on the " + location + "!");
}, 2000)
