function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.2),
        zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

$(document).ready(function(){
var mapProp= {
  center:new google.maps.LatLng(51.508742,-0.120850),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
});

$(document).ready(function(){
  $("#group_add").click(function(){
    $("#group_div").append(
      '<label for="check"><b>Is this a past group?</b></label><br><input type="checkbox" name="summary"><br><br><label for="Title"><b>Group Name:</b></label><br><input type="text1" name="Press Title" placeholder="Enter Name of Group" required><br><label for="Title"><b>Year of Graduation:</b></label><br><input type="text1" name="Press Title" placeholder="Enter Year of Graduation" required><br><label for="Title"><b>Degree Type:</b></label><br><textarea type="text1" name="summary" placeholder="Enter Degree Type" required></textarea><br><hr>');
  });
});
