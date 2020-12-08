$(document).ready(function(){
    $('#update').click(function(){
      var a_title = $('#article_title').val();
      var a_date = $('#article_date').val();
      var a_home = $('#article_home').val();
      var a_url = $('#article_URL').val();
      var a_create_page = $('#article_create_page').val();

      if (a_title.length == ""){
        $('#t_Error').text("Enter a Title");
        $("#article_title").focus();
        return false;
      }

      else{
        $('#t_Error').text("");
      }

      if (a_date.length == ""){
       $('#d_Error').text("Enter a Date");
      $("#article_date").focus();
       return false;
     }

     else{
       $('#d_Error').text("");
     }

       if (a_home.length == ""){
        $('#h_Error').text("Enter a Description");
        $("#article_home").focus();
        return false;
      }

      else{
        $('#h_Error').text("");
      }

       if (a_url.length == "" && a_create_page.length == ""){
        $('#u_Error').text("Enter a external URL or your Article in details");
        $("#article_URL").focus();
        return false;
      }

      else{
        $('#u_Error').text("");
      }
    })
});
