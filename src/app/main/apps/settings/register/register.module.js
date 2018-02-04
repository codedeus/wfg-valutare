(function ()
{
    'use strict';

    angular
        .module('app.settings.register', [])
        .config(config);

    /** @ngInject */
    function config($stateProvider, $translatePartialLoaderProvider)
    {
        // State
        $stateProvider.state('app.register', {
            url      : '/register',
            data:{
              name:'Registration'
            },
            views    : {
                'main@'                          : {
                    templateUrl: 'app/core/layouts/content-only.html',
                    controller : 'MainController as vm'
                },
                'content@app.register': {
                    templateUrl: 'app/main/apps/settings/register/register.html',
                    controller : 'RegisterController as vm'
                }
            },
            bodyClass: 'register'
        });

        // Translate
        $translatePartialLoaderProvider.addPart('app/main/apps/settings/register');

        // Navigation
        // msNavigationServiceProvider.saveItem('pages.auth.register-v2', {
        //     title : 'Register v2',
        //     state : 'app.pages_auth_register-v2',
        //     weight: 4
        // });
    }

})();
