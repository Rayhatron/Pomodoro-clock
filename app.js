angular.module("ngPomodoro", []);

(function()
{
  "use strict";
  angular
    .module("ngPomodoro")
    .controller("ctrPomodoro", function($scope) {
          $scope.session = 1;
          $scope.break = 5;
          $scope.msTime;
          $scope.timeout;
          $scope.displayInterval;
          $scope.displayTime = $scope.session;
          $scope.hours;
          $scope.minutes;
          $scope.seconds;

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
            $scope.finish();
            console.log("Timer started.");
            $scope.msTime = 60 * 1000 * $scope.session;
            $scope.timeout = setTimeout($scope.finish, $scope.msTime);
            $scope.displayInterval = setInterval($scope.updateDisplay, 1000);
          }

          $scope.finish = function(){
            console.log("Done!!!!!");
            clearTimeout($scope.timeout);
            clearInterval($scope.displayInterval);
            $scope.displayTime = $scope.session;
          }

          $scope.updateDisplay = function(){
            console.log("Updating...");
            console.log($scope.msTime);
            $scope.msTime -= 1000;
            $scope.seconds = Math.floor ( ($scope.msTime/1000) % 60);
            $scope.minutes = Math.floor (($scope.msTime/1000/60) % 60);
            $scope.hours = Math.floor (($scope.msTime/(1000*60*60)) % 24);
            $scope.displayTime = $scope.hours + " : " + $scope.minutes + " : " + $scope.seconds;
            document.getElementById('Time').innerHTML = $scope.displayTime;
            console.log("Seconds left: " + $scope.seconds);

          }

    });

})();
