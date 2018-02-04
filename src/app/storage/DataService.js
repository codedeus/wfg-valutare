
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
          var deferred = $q.defer();

            StoreService.db_.select()
              .from(StoreService.db_.getSchema().table('Gender'))
              .exec()
              .then(
              function(rows) {
                deferred.resolve(rows);
              });

          return deferred.promise;
        }

    }
})();
