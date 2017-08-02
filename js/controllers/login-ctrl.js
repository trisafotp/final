var app = angular.module('loginServiceApp');

app.controller('loginCtrl', function($scope, loginService){
  $scope.submitLogin = function(userInfo){
    loginService.checkLogin(userInfo);
  }
});