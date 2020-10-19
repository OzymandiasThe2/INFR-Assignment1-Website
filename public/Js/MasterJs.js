$(document).ready(function(){
  $("#pub_add").click(function(){
    $("#pub_div").append('<label for="Publication">Type:</label><br><select id="publication type"><option value="Type">Type</option><option value="Journals">Journals</option><option value="Conference">Conference Papers</option><option value="Workshop">Workshop Papers</option><option value="Posters">Posters</option><option value="Technical">Technical Reports</option></select><br><label for="Publication">Author:</label><br><input type="Entry" name="Publication" placeholder="Author..."><br><label for="Publication">Publication Title:</label><br><input type="Entry" name="Publication" placeholder="Title..."><br><label for="Publication">Publisher:</label><br><input type="Entry" name="Publication" placeholder="Publisher Name"><br><label for="Publication">Year Published:</label><br><input type="Year" name="Publication" placeholder="YYYY" maxlength="4"><br><hr>');
  });
});

$(document).ready(function(){
  $("#press_add").click(function(){
    $("#press_div").append('<label for="Title">Image File</label><br><input type="file" name="filename"><br><label for="Title">Press Title:</label><br><input type="Title Entry" name="Press Title" placeholder="Enter Press Title..."><br><label for="Title">Press Summary Info:</label><br><textarea type="text" name="summary" placeholder="Write summary here..."></textarea><br><hr>');
  });
});
