$(document).ready(function() {

  $.validator.addMethod("aboutElement", function(value, element){
    return this.optional(element) ||
        value.length > 24;
  }, "Please enter at least 25 characters."),

  $.validator.addMethod("selected", function(value, element){
    return this.value = " ";
  }, "Please pick a publication type."),

  $.validator.addMethod("phoneEx", function(value, element){
    var phoneNum = $("#phone1").size() + $("#phone2").size() + $("#phone3").size();
    return phoneNum > 9;
  }, "Please enter a phone number."),

    $("form").validate({
        rules: {
            name:{
            required: true
          },
          statement1:{
            required: true,
            aboutElement: true
          },
          statement2:{
            required: true,
            aboutElement: true
          },
          email:{
            required: true,
            email: true
          },
          phone:{
            required: true,
            phoneUS: true
          },
          twitter:{
            url: true
          },
          ig:{
            url: true
          },
          title:{
            required: true
          },
          date:{
            required: true
          },
          description:{
            required: true,
            aboutElement: true
          },
          article_url:{
            url: true
          },
          article_text:{
            required: true,
            aboutElement: true
          },
          type:{
            selected: true
          },
          author:{
            required: true
          },
          pub_title:{
            required: true
          },
          pub_name:{
            required: true
          },
          year:{
            required: true
          },
          grad:{
            required: true
          },
          degree:{
            required: true
          },
          group:{
            required: true
          },
          code:{
            required: true
          },
          offered:{
            required: true
          },
          course:{
            required: true
          },
          linkedIn:{
            url: true
          },
          location:{
            required: true
          },
        },
        messages:{
            name:{
            required: "Please enter your first and last name."
          },
          statement1:{
            required: "Please enter statement 1."
          },
          statement2:{
            required: "Please enter statement 2."
          },
          email:{
            required: 'Please enter your email address.',
            email:"Please specify a valid email address."
          },
          phone:{
            required: 'Please enter an phone number.',
            phoneUS:"Please specify a valid phone number ."
          },
          twitter:{
            url: "Please enter a vaild URL link to your Twitter page."
          },
          ig:{
            url: "Please enter a vaild URL link to your Instagram page."
          },
          linkedIn:{
            url: "Please enter a vaild URL link to your LinkedIn page."
          },
          title:{
            required: "Please enter a valid title."
          },
          date:{
            required: "Please enter a valid date."
          },
          description:{
            required: "Please enter a description."
          },
          article_url:{
            url: "Please enter a vaild URL link to the article."
          },
          article_text:{
            required: "Please enter your article."
          },
          author:{
            required: "Please enter the author's name."
          },
          pub_title:{
            required: "Please enter the publication title."
          },
          pub_name:{
            required: "Please enter the publisher's name."
          },
          year:{
            required: "Please enter the year published."
          },
          grad:{
            required: "Please enter the year graduated."
          },
          degree:{
            required: "Please enter the degree type."
          },
          group:{
            required: "Please enter your group name."
          },
          code:{
            required: "Please enter the course code."
          },
          offered:{
            required: "Please enter the year the course was offered."
          },
          course:{
            required: "Please enter the name of the course."
          },
          location:{
            required: "Please enter your business locaiton"
          },
        }
    });
});
