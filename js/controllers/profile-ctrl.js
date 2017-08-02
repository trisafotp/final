var app = angular.module('loginServiceApp');

app.controller('profileCtrl', function($scope, loginService){
  $scope.userDetails = loginService.getProfile();
});