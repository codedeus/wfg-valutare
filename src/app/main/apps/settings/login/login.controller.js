(function() {
    'use strict';

    angular.module("app.settings.login")
      .controller('LoginController', function($scope, $rootScope, $state,$http,$cookieStore,msNavigationService,$mdDialog,UtilityService) {
        var vm = this;
        $rootScope.globals = $rootScope.globals || {};
        $rootScope.globals.currentUser = $rootScope.globals.currentUser || {};
        localStorage.clear();
        debugger;
        $cookieStore.remove("loggedInUser");
        vm.clear = function() {
            localStorage.clear();
        };

        vm.login = function() {
          $scope.processingRequest = true;
          vm.form = {
            email : vm.username,
            password : vm.password
          };

          $http
          .post("https://murmuring-springs-18419.herokuapp.com/login", vm.form)
          .then(function(response) {
            debugger;
            if (response.data !== "" && response.data != null) {
              $scope.processingRequest = false;
              $http.defaults.headers.common['X-AUTH-TOKEN'] = response.data.token;
              $cookieStore.put("loggedInUser", response.data);
              localStorage.setItem("loggedInUser", JSON.stringify(response.data));
              //log the person in(redirect to dashboard)
              if (response.data.roles!='USER'&&response.data.roles!='LINE_MANAGER') {
                msNavigationService.deleteItem('appraisals.newappraisal');
              }

              if(response.data.roles=='USER'){
                msNavigationService.deleteItem('appraisals.manageappraisal');
              }
              $state.go('app.dashboard');
            }
            else{
              $scope.processingRequest = false;
              UtilityService.showAlert('error!','Invalid Username and or password.','Alert Dialog');

            }
          },function(error){
            $scope.processingRequest = false;
              UtilityService.showAlert('error!','Invalid Username and or password.','Alert Dialog');
          });
        };
    });
})();
