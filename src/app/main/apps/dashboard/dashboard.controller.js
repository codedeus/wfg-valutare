(function() {
  'use strict';

  angular
      .module('app.dashboard')
      .controller('DashboardController', DashboardController);

    function DashboardController($http,AppConstants,$rootScope,UtilityService){
      var vm = this;
      $rootScope.processingRequest = true;
      $http.get(AppConstants.baseApiUrl + 'users/loggedInUser').then(function(response){
        vm.user = response.data;
        $rootScope.processingRequest = false;
      },function(){
        $rootScope.processingRequest = false;
        UtilityService.showAlert('error occured!','error occured','Alert Dialog');
      });
    }

})();


