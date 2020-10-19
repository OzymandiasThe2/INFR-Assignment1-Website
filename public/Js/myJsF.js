function myFunction() {
  var a = document.getElementsByClassName("Journal");
  var b = document.getElementsByClassName("Conference");
  var c = document.getElementsByClassName("Workshop");
  var d = document.getElementsByClassName("Poster");
  var e = document.getElementsByClassName("TechR");
  a[0].style.display = "block";
  b[0].style.display = "block";
  c[0].style.display = "block";
  d[0].style.display = "block";
  e[0].style.display = "block";
}

function myFunction1() {
  var a = document.getElementsByClassName("Journal");
  var b = document.getElementsByClassName("Conference");
  var c = document.getElementsByClassName("Workshop");
  var d = document.getElementsByClassName("Poster");
  var e = document.getElementsByClassName("TechR");
  a[0].style.display = "block";
  b[0].style.display = "none";
  c[0].style.display = "none";
  d[0].style.display = "none";
  e[0].style.display = "none";
}

function myFunction2() {
  var a = document.getElementsByClassName("Journal");
  var b = document.getElementsByClassName("Conference");
  var c = document.getElementsByClassName("Workshop");
  var d = document.getElementsByClassName("Poster");
  var e = document.getElementsByClassName("TechR");
  a[0].style.display = "none";
  b[0].style.display = "block";
  c[0].style.display = "none";
  d[0].style.display = "none";
  e[0].style.display = "none";
}

function myFunction3() {
  var a = document.getElementsByClassName("Journal");
  var b = document.getElementsByClassName("Conference");
  var c = document.getElementsByClassName("Workshop");
  var d = document.getElementsByClassName("Poster");
  var e = document.getElementsByClassName("TechR");
  a[0].style.display = "none";
  b[0].style.display = "none";
  c[0].style.display = "block";
  d[0].style.display = "none";
  e[0].style.display = "none";
}

function myFunction4() {
  var a = document.getElementsByClassName("Journal");
  var b = document.getElementsByClassName("Conference");
  var c = document.getElementsByClassName("Workshop");
  var d = document.getElementsByClassName("Poster");
  var e = document.getElementsByClassName("TechR");
  a[0].style.display = "none";
  b[0].style.display = "none";
  c[0].style.display = "none";
  d[0].style.display = "block";
  e[0].style.display = "none";
}

function myFunction5() {
  var a = document.getElementsByClassName("Journal");
  var b = document.getElementsByClassName("Conference");
  var c = document.getElementsByClassName("Workshop");
  var d = document.getElementsByClassName("Poster");
  var e = document.getElementsByClassName("TechR");
  a[0].style.display = "none";
  b[0].style.display = "none";
  c[0].style.display = "none";
  d[0].style.display = "none";
  e[0].style.display = "block";
}

function select() {
  var x = document.getElementById("publication type").value;
  if (x == "Type") {
   	myFunction();
  }
  if (x == "Journals") {
   	myFunction1();
  }
  if (x == "Conference") {
   	myFunction2();
  }
  if (x == "Workshop") {
   	myFunction3();
  }
  if (x == "Posters") {
   	myFunction4();
  }
  if (x == "Technical") {
   	myFunction5();
  }
}
