function place(location, time, landmarks) {
  this.location=location;
  this.time=time;
  this.landmarks=landmarks;
}
var paris = new place("Paris","Fall",["Eiffel Tower", "Leaning tower of pizza","Arc d' funk"]);

var prison = new place("Alcatraz", "five years", ["bars", "guys wearing orange","mean gaurds"]);

var china = new place("China", "Fall",["Great Wall", "Bung", "Chinese food"]);

var newYork = new place("New York", "Fall",["Pizza", "Empire State building", "High line", "Ellis Island","Rockettes", "Statue of Liberty"]);

place.prototype.locationTime = function(){
  return ("<li>" + this.location + "</li>" + "<li>" + this.time + "</li>" + "<li>" + "Landmarks" + "</li>");
}
place.prototype.land = function(){
  landmarksArray = [];
  for (var i =0; i<this.landmarks.length; i++){
    landmarksArray.push("<li>" + this.landmarks[i] + "</li>");
  }
  return landmarksArray;
};




$(document).ready(function(){
$("#parisClick").click(function(event){
  event.preventDefault();
  $("#parisLandMarks").empty();
  $("ol#parisTrip").empty();
  $("ol#parisTrip").prepend(paris.locationTime());
  $("ul#parisLandMarks").append(paris.land());
  });
$("#prisonClick").click(function(event){
  event.preventDefault();
  $("#prisonLandMarks").empty();
  $("ol#prisonTrip").empty();
  $("ol#prisonTrip").prepend(prison.locationTime());
  $("ul#prisonLandMarks").append(prison.land());
  });
$("#chinaClick").click(function(event){
  event.preventDefault();
  $("#chinaLandMarks").empty();
  $("ol#chinaTrip").empty();
  $("ol#chinaTrip").prepend(china.locationTime());
  $("ul#chinaLandMarks").append(china.land());
  });
$("#newYorkClick").click(function(event){
  event.preventDefault();
  $("#newYorkLandMarks").empty();
  $("ol#newYorkTrip").empty();
  $("ol#newYorkTrip").prepend(newYork.locationTime());
  $("ul#newYorkLandMarks").append(newYork.land());

});
});
  // $("ol#parisTrip").prepend("<li>" + paris.location + "</li>" + "<li>" + paris.time + "</li>" + "<li>" + "Landmarks" + "</li>");
  // for (var i =0; i<paris.landmarks.length; i++){
  //   $("ul#parisLandMarks").append("<li>" + paris.landmarks[i] + "</li>");
  // };
