(function() {
  'use strict';

  angular
      .module('app.dashboard')
      .controller('DashboardController', DashboardController)
      .controller('DialogController',DialogController);

    function DashboardController(UtilityService){
      var vm = this;

      vm.showDialog = function (ev, templateFile, dialogData) {
        //var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'));
        var data = {};
        UtilityService.showDialog(ev, templateFile, data,'DialogController');
      };
    }


    function DialogController($scope, $rootScope, $mdDialog, $mdMedia, $mdEditDialog, $q, dialogData) {

    }

})();


