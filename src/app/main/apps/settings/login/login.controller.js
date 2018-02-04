(function() {
    'use strict';

    angular.module("app.settings.login")
      .controller('LoginController', function($scope, $rootScope, $state,$http,$cookieStore,$mdDialog) {
        var vm = this;
        $rootScope.globals = $rootScope.globals || {};
        $rootScope.globals.currentUser = $rootScope.globals.currentUser || {};

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
            if (response.data !== "" && response.data != null) {
              $scope.processingRequest = false;
              $http.defaults.headers.common['X-AUTH-TOKEN'] = response.data.token;
              $cookieStore.put("loggedInUser", response.data);
              localStorage.setItem("loggedInUser", JSON.stringify(response.data));
              //log the person in(redirect to dashboard)

              $state.go('app.dashboard');
            }
            else{
              $scope.processingRequest = false;
              $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .title('Error!!!')
                .textContent('Invalid Username and or password.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!'));
            }
          },function(error){
            $scope.processingRequest = false;
              $mdDialog.show(
                $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .title('Error!!!')
                .textContent('Invalid Username and or password.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!'));
          });
        };
    });
})();
