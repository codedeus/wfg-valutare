(function() {
    'use strict';

    angular.module("app.settings.login")
      .controller('LoginController', function($scope, $rootScope, $state,$http,$cookieStore) {
        var vm = this;
        $rootScope.globals = $rootScope.globals || {};
        $rootScope.globals.currentUser = $rootScope.globals.currentUser || {};

        vm.clear = function() {
            localStorage.clear();
        };

        vm.login = function() {
          vm.form = {
            email : vm.username,
            password : vm.password
          };

          $http
          .post("https://murmuring-springs-18419.herokuapp.com/login", vm.form)
          .then(function(response) {
            if (response.data !== "" && response.data != null) {
              $http.defaults.headers.common['X-AUTH-TOKEN'] = response.data.token;
              $cookieStore.put("loggedInUser", response.data);
              localStorage.setItem("loggedInUser", JSON.stringify(response.data));
              //log the person in(redirect to dashboard)

              $state.go('app.dashboard');
            }
          });
        };
    });
})();
