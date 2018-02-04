(function() {
    'use strict';

    angular.module('app.settings', [
            'app.settings.login',
            'app.settings.register'
        ])
        .config(config);

    function config(msNavigationServiceProvider) {
        // msNavigationServiceProvider.saveItem('apps.settings', {
        //     title: 'Settings',
        //     weight: 1,
        //     icon: 'icon-cog'
        // });
    }
})();
