var app = angular.module("indexPage", []);
app.controller ("mainWeb", function($scope, $http) {
    $http.post("http://localhost:8080/bio-data").then(function(response){
        $scope.bioData = response.data[0];
        $scope.name = $scope.bioData.name;
        $scope.statement1 = $scope.bioData.statement1;
        $scope.statement2 = $scope.bioData.statement2;
        $scope.aboutme = $scope.bioData.aboutme;
        $scope.ig = $scope.bioData.ig;
        $scope.twitter = $scope.bioData.twitter;
        $scope.image =  $scope.bioData.image;
      });
});

app.controller ("contactsWeb", function($scope, $http) {
    $http.post("http://localhost:8080/contacts-data").then(function(response){
        $scope.contactsData = response.data[0];
        $scope.name = $scope.contactsData.name;
        if ($scope.contactsData.phone4 == ""){
          $scope.phone = "(" + $scope.contactsData.phone1 + ")" + "-" + $scope.contactsData.phone2 + "-" + $scope.contactsData.phone3;
        }
        else{
          $scope.phone = "(" + $scope.contactsData.phone1 + ")" + "-" + $scope.contactsData.phone2 + "-" + $scope.contactsData.phone3 + "ext " + $scope.contactsData.phone4;
        }
        $scope.email = $scope.contactsData.email;
        $scope.linkedIn = $scope.contactsData.linkedIn;
        $scope.location = $scope.contactsData.location;
      });
});

app.controller ("groupWeb", function($scope, $http) {
    $http.post("http://localhost:8080/group-data").then(function(response){
      $scope.groupData = response.data;

      $scope.remove = function (x) {
      $scope.groupData.splice(x, 1);
      }

      $scope.save = function () {
      $http.post("http://localhost:8080/group-update2", $scope.groupData).then(function(response){});
      window.location.assign("http://localhost:8080/Pages/group.html");
    }
    });
});

app.controller ("newsWeb", function($scope, $http) {
    $http.post("http://localhost:8080/news-data").then(function(response){
        $scope.newsData = response.data;

        $scope.remove = function (x) {
        $scope.newsData.splice(x, 1);
        }

        $scope.save = function () {
        $http.post("http://localhost:8080/news-update2", $scope.newsData).then(function(response){});
        window.location.assign("http://localhost:8080/Pages/fullNews.html");
      }
      });
});

app.controller ("pressWeb", function($scope, $http) {
    $http.post("http://localhost:8080/press-data").then(function(response){
        $scope.pressData = response.data;

         $scope.remove = function (x) {
         $scope.pressData.splice(x, 1);
         }

         $scope.save = function () {
         $http.post("http://localhost:8080/press-update2", $scope.pressData).then(function(response){});
         window.location.assign("http://localhost:8080/Pages/press.html");
       }
      });
});

app.controller ("pubWeb", function($scope, $http) {
    $http.post("http://localhost:8080/pub-data").then(function(response){
        $scope.pubData = response.data;

        $scope.remove = function (x) {
        $scope.pubData.splice(x, 1);
        }

        $scope.save = function () {
        $http.post("http://localhost:8080/pub-update2", $scope.pubData).then(function(response){});
        window.location.assign("http://localhost:8080/Pages/pub.html");
      }
     });
});

app.controller ("researchWeb", function($scope, $http) {
    $http.post("http://localhost:8080/research-data").then(function(response){
        $scope.researchData = response.data;

        $scope.remove = function (x) {
        $scope.researchData.splice(x, 1);
        }

        $scope.save = function () {
        $http.post("http://localhost:8080/research-update2", $scope.researchData).then(function(response){});
        window.location.assign("http://localhost:8080/Pages/research.html");
      }
     });
});

app.controller ("teachingWeb", function($scope, $http) {
    $http.post("http://localhost:8080/teaching-data").then(function(response){
        $scope.teachingData = response.data;
        var compare = new Date().getFullYear();
        $scope.present = [];
        $scope.past = [];

        for (x=0; x < $scope.teachingData.length;x++){
          if ($scope.teachingData[x].offered >= compare){
            $scope.present.push($scope.teachingData[x]);
          }else{
            $scope.past.push($scope.teachingData[x]);
          }
        }

        $scope.remove = function (x) {
        $scope.teachingData.splice(x, 1);
        }

        $scope.save = function () {
        $http.post("http://localhost:8080/teaching-update2", $scope.teachingData).then(function(response){});
        window.location.assign("http://localhost:8080/Pages/teaching.html");
      }
     });
});

app.controller ("mode", function($scope, $http) {
    $http.post("http://localhost:8080/mode-data").then(function(response){
        $scope.mode = response.data;
          console.log("Hello");

        $scope.changeLightOrDark = function(){
          if ($scope.mode.light == "false"){
            console.log("Change Confirmed");

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
            $scope.mode.light = "true";

            $http.post("http://localhost:8080/mode-update", $scope.mode).then(function(response){});
            window.location.assign("#");

          }else{

            console.log("Change Not Confirmed");

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
            $scope.mode.light = "false";

            $http.post("http://localhost:8080/mode-update", $scope.mode).then(function(response){});
            window.location.assign("#");
          }
        }
     });
});
