(function(){
    'use strict';

    angular.module('app.settings.passwordchange').
        controller('PasswordChangeController',function($rootScope,$mdDialog,StoreService){
            var vm = this;
        
            vm.passwordChange = {};

            vm.changePassword = function(){
                
                if(vm.passwordChange.OldPassword!=$rootScope.globals.currentUser.Password){
                    $mdDialog.show(
                        $mdDialog.alert()
                        .parent(angular.element(document.querySelector('#popupContainer')))
                        .title('Error!!!')
                        .textContent('Old password supplied is wrong')
                        .ariaLabel('Alert Dialog Demo')
                        .ok('Got it!'));
                    return;
                }

                vm.passwordChange.Id = $rootScope.globals.currentUser.Id;

                StoreService.UpdateStaffDetail(vm.passwordChange, 'PASSWORD');

                $rootScope.globals.currentUser.Password = vm.passwordChange.Password;
                vm.passwordChange = null;
                $mdDialog.show(
                    $mdDialog.alert()
                    .parent(angular.element(document.querySelector('#popupContainer')))
                    .title('success')
                    .textContent('Password Changed successfully')
                    .ariaLabel('Alert Dialog Demo')
                    .ok('Got it!'));
            }

        }).directive('confirmPwd', function($interpolate, $parse) {
            return {
                require: 'ngModel',
                link: function(scope, elem, attr, ngModelCtrl) {

                    var pwdToMatch = $parse(attr.confirmPwd);
                    var pwdFn = $interpolate(attr.confirmPwd)(scope);

                    scope.$watch(pwdFn, function(newVal) {
                        ngModelCtrl.$setValidity('password', ngModelCtrl.$viewValue == newVal);
                    });

                    ngModelCtrl.$validators.password = function(modelValue, viewValue) {
                        var value = modelValue || viewValue;
                        return value == pwdToMatch(scope);
                    };
                }
            }
        });
})();