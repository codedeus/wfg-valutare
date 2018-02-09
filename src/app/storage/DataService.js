
(function () {
    'use strict';

    angular
      .module('fuse')
      .factory('DataService', DataService);

    DataService.$inject = ['$http', '$log', '$q', '$rootScope', 'StoreService'];

    function DataService($http, $log, $q, $rootScope, StoreService) {
      //var GenderTable_ = null;


      var service = {
        GetAllGenders: GetAllGenders
      };

      return service;


      function GetAllGenders() {

        }

    }
})();
