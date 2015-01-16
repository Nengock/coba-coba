'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:RouterCtrl
 * @description
 * # RouterCtrl
 * Controller of the appApp
 */
angular.module('mobileApp')

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup login state
  .state('router', {
    url: '/router',
    templateUrl: 'views/router.html',
    controller: 'RouterCtrl'
  });

})

.controller('RouterCtrl', function($scope, $timeout) {

});