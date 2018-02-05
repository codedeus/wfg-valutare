(function() {
  'use strict';

  angular
      .module('app.dashboard')
      .controller('DashboardController', DashboardController)
      .controller('DialogController',DialogController);

    function DashboardController(UtilityService){
      var vm = this;


    }


    function DialogController($scope, $rootScope, $mdDialog, $mdMedia, $mdEditDialog, $q, dialogData) {
      $scope.cancel = function(){
        $mdDialog.cancel();
      }
    }

})();


