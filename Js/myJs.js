/*$(document).ready(function() { $("#navHolder").load("../templates/nav.html"); });
$(document).ready(function() { $("#footerHolder").load("../templates/footer.html"); });*/

$(document).ready(function() {
$("#navHolder").append('<nav id = "switch" class="sticky-top navbar navbar-expand-lg navbar-light bg-light"><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#changeCollapse"><span class="navbar-toggler-icon"></span></button><a class="navbar-brand mx-auto" href="#home"></a><div class="collapse navbar-collapse" id="changeCollapse">' +
    '<ul class="navbar-nav">' +
    '<li class="nav-item"><a class="nav-link" href="../index.html">Home</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="../Pages/login.html">Admin Portal</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="../Pages/pub.html">Publications</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="../Pages/press.html">Press</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="../Pages/research.html">Research Interest and Programs</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="../Pages/teaching.html">Teaching</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="../Pages/group.html">Research Group</a></li>' +
    '<li class="nav-item"><a class="nav-link" href="../Pages/contact.html">Contact</a></li>' +
    '<li class="nav-item"><a class="nav-link active"  id = "LightOrDark" href="#" data-toggle="collapse" data-target="#changeCollapse" ng-click= "changeLightOrDark()">Dark Mode</a></li></ul></div></nav>');

  $("#footerHolder").append(
    '<div id = "colorChange2" class="footer light"><p>@2020 Designed by Nicholas, Franklin, Chris and Shriji </p></div>');
 });

style="display: none"
/*
function changeLightOrDark(){
if (mode == "false"){
  document.getElementById("switch").classList.remove('navbar-dark');
  document.getElementById("switch").classList.remove('bg-dark');
  document.getElementById("switch").classList.add('navbar-light');
  document.getElementById("switch").classList.add('bg-light');

  document.getElementById("colorChange2").classList.remove('dark');
  document.getElementById("colorChange2").classList.add('light');
  document.getElementById("colorChange1").classList.remove('dark');
  document.getElementById("colorChange1").classList.add('light');
  document.getElementById("colorChange").classList.remove('dark');
  document.getElementById("colorChange").classList.add('light');

  document.getElementById("LightOrDark").innerHTML = "Dark Mode";
  change();
}
else{
  document.getElementById("switch").classList.remove('navbar-light');
  document.getElementById("switch").classList.remove('bg-light');
  document.getElementById("switch").classList.add('navbar-dark');
  document.getElementById("switch").classList.add('bg-dark');

  document.getElementById("colorChange2").classList.add('dark');
  document.getElementById("colorChange2").classList.remove('light');
  document.getElementById("colorChange1").classList.add('dark');
  document.getElementById("colorChange1").classList.remove('light');
  document.getElementById("colorChange").classList.add('dark');
  document.getElementById("colorChange").classList.remove('light');

  document.getElementById("LightOrDark").innerHTML = "Light Mode";
  change();
}
}
*/

function update(){
  location.href = "admin.html";
}
