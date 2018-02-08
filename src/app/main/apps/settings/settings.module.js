(function() {
    'use strict';

    angular.module('app.settings', [
            'app.settings.login',
            'app.settings.register',
            'app.settings.employeelist'
        ])
        .config(config);

    function config(msNavigationServiceProvider) {
        msNavigationServiceProvider.saveItem('settings', {
            title: 'Settings',
            weight: 1,
            icon: 'icon-cog'
        });

        msNavigationServiceProvider.saveItem("settings.employeelist", {
          title: "Employee List",
          state: "app.employeelist"
        });
    }
})();
