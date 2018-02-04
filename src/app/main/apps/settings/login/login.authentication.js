'use strict';

angular.module('app.settings.login')

.factory('AuthenticationService', ['$cookieStore', '$rootScope', '$mdDialog', '$timeout', 'StoreService', '$location', '$state', 'msNavigationService',
    function($cookieStore, $rootScope, $mdDialog, $timeout, StoreService, $location, $state, msNavigationService) {
        var service = {};

        service.Login = function(username, password, modules) {
            $rootScope.processingRequest = true;
            $rootScope.globals = $rootScope.globals || {};

            $timeout(function() {

                StoreService.VerifyUser(username, password).then(function(data) {
                    if (data.length > 0 && data[0]['StaffMember'] != undefined) {
                        StoreService.GetClientData('TenantId').then(function(tenants) {
                            if (tenants.length < 1) {
                                $location.path('/setup');
                                $state.go('app.setup');
                            } else {
                                data.AllModules = modules;
                                data.TenantId = tenants[0].Value;
                            }
                            if (data[0]['StaffMember'].RoleId) {
                                StoreService.GetAssesibleModules(data[0]['StaffMember'].RoleId).then(function(results) {
                                    data.roles = results.map(function(role) {
                                        var newRoleObj = {};
                                        newRoleObj.Name = role.Name;
                                        newRoleObj.Code = role.Code;
                                        newRoleObj.State = role.State;
                                        newRoleObj.Path = role.Path;
                                        return newRoleObj;
                                    });
                                    service.SetCredentials(data);
                                });
                            } else {
                                service.SetCredentials(data);
                            }
                        });
                    } else {
                        $rootScope.processingRequest = false;
                        $mdDialog.show(
                            $mdDialog.alert()
                            .parent(angular.element(document.querySelector('#popupContainer')))
                            .title('Error!!!')
                            .textContent('Invalid Username and or password.')
                            .ariaLabel('Alert Dialog Demo')
                            .ok('Got it!'));
                    }
                });
            });
        };

        service.SetCredentials = function(details) {

        };

        service.ClearCredentials = function(modules, userRoles) {
            delete $rootScope.globals;
            localStorage.removeItem('loggedInUser');
            $cookieStore.remove('loggedInUser');
            $location.path('/login');
        };

        return service;
    }
]);
