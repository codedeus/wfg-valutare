(function (){
    'use strict';

    angular
        .module('app.settings.register')
        .controller('RegisterController', RegisterController);

    /** @ngInject */
    function RegisterController($http, $state){
        // Data
        var vm = this;

        // Methods

        vm.registerUser = function(){
          $http.post("https://murmuring-springs-18419.herokuapp.com/v1/users/register", vm.form).then(function(response){
              $state.go('app.login');
          },function erorFuntion(res){

              console.log(res);
          });
        };
    }
})();
