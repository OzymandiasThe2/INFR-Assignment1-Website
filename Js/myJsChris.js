$(document).ready(function(){
  $("#teaching_add").click(function(){
    $("#teaching_div").append('<label class="titles" for="courseName">Course Name</label> <br> <input type="text" name="courseName" placeholder="Enter the Course Name..."> <br> <label class="titles" for="courseCode">Course Code</label> <br> <input type="text" name="courseCode" placeholder="Enter the Course Code..."> <br> <label class="titles" for="semester">Semester</label> <br> <select class="" name="semester"><br> <option value="Fall">Fall</option> <option value="Winter">Winter</option> <option value="Spring">Spring</option> <option value="Summer">Summer</option> </select><br> <label class="titles" for="year">Year</label> <br> <input type="text" name="courseCode" placeholder="Enter the Year Offered..."> <br><hr>');
  });
});

$(document).ready(function(){
  $("#reseach_add").click(function(){
    $("#reseach_div").append('<label class="titles" for="programName">Program Name</label> <br> <input class="adminField" type="text" name="courseName" placeholder="Enter the Program Name..."> <br> <label class="titles" for="username">Program Description</label> <br> <textarea class="rAdmin" type="text" name="aboutme" placeholder="Write your Program Description Here..."></textarea> <br> <label class="titles" for="username" >Image File</label> <br> <input type="file" name="filename"><br> <hr>');
  });
});
