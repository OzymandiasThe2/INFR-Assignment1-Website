$(function(){ $("#navHolder").load("templates/nav.html"); });
$(function(){ $("#footerHolder").load("templates/footer.html"); });

function changeLightOrDark(){
if (document.getElementById("switch").classList.contains('navbar-dark')){
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
}
}

function update(){
  location.href = "admin.html";
}
