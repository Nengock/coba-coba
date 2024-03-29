(function() {
  'use strict';

  angular.module('mhbb.controllers')
    .controller('LessonsController', LessonsController);

  function LessonsController($scope, api) {
    var vm = this;

    /*
    api.request('GET', 'questions')
      .then(function(data) {
        vm.elements = data;
      });
*/
  vm.elements = [
  {uuid: 11, name: 'Delivery Observation Checklist', description: ''}
  ];


    vm.refresh = function() {
      api.request('GET', 'questions')
        .then(function(data) {
          vm.elements = data;
        })
        .finally(function() {
          $scope.$broadcast('scroll.refreshComplete');
        })
    }
  }
})();