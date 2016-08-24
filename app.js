angular.module("ngPomodoro", []);

(function()
{
  "use strict";
  angular
    .module("ngPomodoro")
    .controller("ctrPomodoro", function($scope) {
          $scope.title = "Session";
          $scope.session = 1;
          $scope.break = 5;
          $scope.msTime;
          $scope.timeout;
          $scope.displayInterval;
          $scope.displayTime = $scope.session;
          $scope.hours;
          $scope.minutes;
          $scope.seconds;
          $scope.bgPercentage = 1;
          $scope.bgcolor;

          $scope.increaseSession = function(){
            $scope.session ++;
            $scope.displayTime = $scope.session;
          }

          $scope.decreaseSession = function(){
            if($scope.session == 1){
              alert("Session cannot be less than 1");
              return;
            }
            $scope.session --;
            $scope.displayTime = $scope.session;
          }

          $scope.increaseBreak = function(){
            $scope.break ++;
          }

          $scope.decreaseBreak = function(){
            if($scope.break == 1){
              alert("Break cannot be less than 1");
              return;
            }
            $scope.break --;
          }

          $scope.startTimer = function(){
            $scope.bgPercentage = 99;
            $scope.bgcolor = "green";
            console.log("Timer started.");
            $scope.title = "Session";
            $scope.msTime = 60 * 1000 * $scope.session;
            $scope.timeout = setTimeout($scope.finish, $scope.msTime);
            $scope.displayInterval = setInterval($scope.updateDisplay, 1000);
            document.getElementById('clock').style.background =  "linear-gradient(360deg, " + $scope.bgcolor + " " + $scope.bgPercentage +  "%, transparent 1%)";
          }

          $scope.startBreak = function(){
            console.log("Break started.");
            $scope.title = "Break";
            $scope.bgcolor = "red";
            document.getElementById('title').innerHTML = $scope.title;
            $scope.msTime = 60 * 1000 * $scope.break;
            $scope.timeout = setTimeout($scope.finishAll, $scope.msTime);
            $scope.displayInterval = setInterval($scope.updateDisplay, 1000);
          }

          $scope.finish = function(){
            console.log("Done!!!!!");
            clearTimeout($scope.timeout);
            clearInterval($scope.displayInterval);
            $scope.displayTime = $scope.session;
            $scope.startBreak();
            document.getElementById('clock').style.background = "black";
          }

          $scope.finishAll = function(){
            console.log("Done!!!!!");
            clearTimeout($scope.timeout);
            clearInterval($scope.displayInterval);
            $scope.displayTime = $scope.session;
            $scope.title = "Session";
            document.getElementById('title').innerHTML = $scope.title;
            document.getElementById('Time').innerHTML = $scope.displayTime;
            document.getElementById('clock').style.background = "black";
          }

          $scope.updateDisplay = function(){
            $scope.msTime -= 1000;
            $scope.bgPercentage = ($scope.msTime/ ($scope.session * 60 * 1000)) * 100;
            $scope.seconds = Math.floor ( ($scope.msTime/1000) % 60);
            $scope.minutes = Math.floor (($scope.msTime/1000/60) % 60);
            $scope.hours = Math.floor (($scope.msTime/(1000*60*60)) % 24);
            $scope.displayTime = $scope.hours + " : " + $scope.minutes + " : " + $scope.seconds;
            document.getElementById('Time').innerHTML = $scope.displayTime;
            document.getElementById('clock').style.background =  "linear-gradient(360deg, " + $scope.bgcolor + " " + $scope.bgPercentage +  "%, transparent 1%)";
          }

    });

})();
