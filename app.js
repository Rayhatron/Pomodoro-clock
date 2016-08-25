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
          $scope.typeOfTimer;

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
            $scope.bgcolor = "#99CC00";
            $scope.typeOfTimer = $scope.session;
            $scope.msTime = 60 * 1000 * $scope.session;
            $scope.timeout = setTimeout($scope.finish, $scope.msTime);
            $scope.displayInterval = setInterval($scope.updateDisplay, 1000);
            document.getElementById('clock').style.background =  "linear-gradient(360deg, " + $scope.bgcolor + " " + $scope.bgPercentage +  "%, transparent 1%)";
          }

          $scope.startBreak = function(){
            $scope.title = "Break";
            $scope.bgcolor = "#4db8ff";
            $scope.typeOfTimer = $scope.break;
            document.getElementById('title').innerHTML = $scope.title;
            $scope.msTime = 60 * 1000 * $scope.break;
            $scope.timeout = setTimeout($scope.finishAll, $scope.msTime);
            $scope.displayInterval = setInterval($scope.updateDisplay, 1000);
          }

          $scope.finish = function(){
            clearTimeout($scope.timeout);
            clearInterval($scope.displayInterval);
            $scope.displayTime = $scope.session;
            $scope.startBreak();
            document.getElementById('sound').innerHTML = '<audio autoplay><source src="beep.mp3"></audio>';
            document.getElementById('clock').style.background = "#333333";
          }

          $scope.finishAll = function(){
            clearTimeout($scope.timeout);
            clearInterval($scope.displayInterval);
            $scope.displayTime = $scope.session;
            $scope.title = "Session";
            document.getElementById('title').innerHTML = $scope.title;
            document.getElementById('Time').innerHTML = $scope.displayTime;
            document.getElementById('clock').style.background = "#333333";
          }

          $scope.updateDisplay = function(){
            $scope.msTime -= 1000;
            $scope.bgPercentage = ($scope.msTime/ ($scope.typeOfTimer * 60 * 1000)) * 100;
            $scope.seconds = Math.floor ( ($scope.msTime/1000) % 60);
            $scope.minutes = Math.floor (($scope.msTime/1000/60) % 60);
            $scope.hours = Math.floor (($scope.msTime/(1000*60*60)) % 24);
            $scope.displayTime = $scope.hours + " : " + $scope.minutes + " : " + $scope.seconds;
            document.getElementById('Time').innerHTML = $scope.displayTime;
            document.getElementById('clock').style.background =  "linear-gradient(360deg, " + $scope.bgcolor + " " + $scope.bgPercentage +  "%, transparent 1%)";
          }

    });

})();
