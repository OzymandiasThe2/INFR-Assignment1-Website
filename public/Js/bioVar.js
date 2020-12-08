$(document).ready(function(){
    $('#update').click(function(){
      var ig = $('#IG_URL').val();
      var twitter = $('#Twitter_URL').val();

      if (ig.value =! type(URL)){
        $('#IG_Error').text("Enter a valid URL");
        $("#IG_URL").focus();
        return false;
      }

      if (twitter.value =! type(URL)){
        $('#Twitter_Error').text("Enter a valid URL");
        $("#Twitter_URL").focus();
        return false;
      }
    })
});
