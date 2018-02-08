(function() {
  'use strict';

  angular
      .module('app.dashboard', [])
      .config(config);

  /** @ngInject */
  function config($stateProvider, msNavigationServiceProvider,$translatePartialLoaderProvider) {
      // Navigation
      msNavigationServiceProvider.saveItem('dashboard', {
          title: 'Dashboard',
          icon: 'icon-dashboard',
          state: 'app.dashboard',
          group: true
         // weight: 1
      });

      $stateProvider.state('app.dashboard', {
          url: '/dashboard',
          data: {
              role: 'dashboard',
              roles: ['ADMIN', 'SUPER_ADMIN', 'LINE_MANAGER', 'TOP_MANAGER','HR','USER']
          },
          views: {
              'content@app': {
                  templateUrl: 'app/main/apps/dashboard/dashboard.html',
                  controller: 'DashboardController as vm'
              }
          }
          // bodyClass: 'emr-patientregistration'
      });

      // Translation
      $translatePartialLoaderProvider.addPart('app/main/apps/dashboard');
  }

})();
