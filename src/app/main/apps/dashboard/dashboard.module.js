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
              name: 'My Profile'
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
