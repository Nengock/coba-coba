(function() {

  'use strict';

  angular.module('mhbb.services')
    .factory('configuration', configuration);

  function configuration() {
    var apiBase = 'http://173.255.205.23:8088';
    return {
      apiBase: apiBase
    }
  }

})();