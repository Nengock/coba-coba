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
  // make content center
  $timeout(function() {
    var elm = document.querySelector('#banner'),
      windowHeight = window.innerHeight,
      elmHeight = elm.offsetHeight;

    elm.style.paddingTop = (windowHeight - elmHeight) / 2 + 'px';
  });
});