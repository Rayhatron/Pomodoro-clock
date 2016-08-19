angular.module("ngPomodoro", []);

(function()
{
  "use strict";
  angular
    .module("ngPomodoro")
    .controller("ctrPomodoro", function($scope) {
          $scope.session = 25;
          $scope.break = 5;

          $scope.increaseSession = function(){
            $scope.session ++;
          }

          $scope.decreaseSession = function(){
            if($scope.session == 1){
              alert("Session cannot be less than 1");
              return;
            }
            $scope.session --;
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

    });

})();
