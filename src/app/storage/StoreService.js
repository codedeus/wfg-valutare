(function () {
  'use strict';
  angular.module('fuse')
    .factory('StoreService', StoreService);


  StoreService.$inject = ['$http', '$q','AppConstants'];

  function StoreService($http, $q, AppConstants) {

    if (window.JSON && !window.JSON.dateParser) {
      var reISO = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/;
      var reMsAjax = /^\/Date\((d|-|.*)\)[\/|\\]$/;
      JSON.dateParser = function (key, value) {
          if (typeof value === 'string') {
              var a = reISO.exec(value);
              if (a)
                  return new Date(value);
              a = reMsAjax.exec(value);
              if (a) {
                  var b = a[1].split(/[-+,.]/);
                  return new Date(b[0] ? +b[0] : 0 - +b[1]);
              }
          }
          return value;
      };
    }

    var service = {

    };

    return service;

    function createGuid() {
      var d = new Date().getTime();
      if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
        d += performance.now(); //use high-precision timer if available
      }
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
    }
  }


})();
