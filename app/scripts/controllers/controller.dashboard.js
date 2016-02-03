(function() {
  'use strict';

  angular.module('mhbb.controllers')
    .controller('DashboardController', DashboardController);

  function DashboardController($scope, api) {
    var vm = this;
    $scope.toggle1 = "true";
    vm.refresh = function() {
      api.request('GET', 'questions')
        .then(function(data) {
          vm.questions = data;
        })
        .finally(function() {
          $scope.$broadcast('scroll.refreshComplete');
        })
    }
  }
})();