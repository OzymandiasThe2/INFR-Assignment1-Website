function myFunction() {
  var a = document.getElementsByClassName("Journals");
  var b = document.getElementsByClassName("Conference");
  var c = document.getElementsByClassName("Workshop");
  var d = document.getElementsByClassName("Posters");
  var e = document.getElementsByClassName("Technical");
  $(a).show();
  $(b).show();
  $(c).show();
  $(d).show();
  $(e).show();
}

function myFunction1() {
  var a = document.getElementsByClassName("Journals");
  var b = document.getElementsByClassName("Conference");
  var c = document.getElementsByClassName("Workshop");
  var d = document.getElementsByClassName("Posters");
  var e = document.getElementsByClassName("Technical");
  $(a).show();
  $(b).hide();
  $(c).hide();
  $(d).hide();
  $(e).hide();
}

function myFunction2() {
  var a = document.getElementsByClassName("Journals");
  var b = document.getElementsByClassName("Conference");
  var c = document.getElementsByClassName("Workshop");
  var d = document.getElementsByClassName("Posters");
  var e = document.getElementsByClassName("Technical");
  $(a).hide();
  $(b).show();
  $(c).hide();
  $(d).hide();
  $(e).hide();
}

function myFunction3() {
  var a = document.getElementsByClassName("Journals");
  var b = document.getElementsByClassName("Conference");
  var c = document.getElementsByClassName("Workshop");
  var d = document.getElementsByClassName("Posters");
  var e = document.getElementsByClassName("Technical");
  $(a).hide();
  $(b).hide();
  $(c).show();
  $(d).hide();
  $(e).hide();
}

function myFunction4() {
  var a = document.getElementsByClassName("Journals");
  var b = document.getElementsByClassName("Conference");
  var c = document.getElementsByClassName("Workshop");
  var d = document.getElementsByClassName("Posters");
  var e = document.getElementsByClassName("Technical");
  $(a).hide();
  $(b).hide();
  $(c).hide();
  $(d).show();
  $(e).hide();
}

function myFunction5() {
  var a = document.getElementsByClassName("Journals");
  var b = document.getElementsByClassName("Conference");
  var c = document.getElementsByClassName("Workshop");
  var d = document.getElementsByClassName("Posters");
  var e = document.getElementsByClassName("Technical");
  $(a).hide();
  $(b).hide();
  $(c).hide();
  $(d).hide();
  $(e).show();
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
