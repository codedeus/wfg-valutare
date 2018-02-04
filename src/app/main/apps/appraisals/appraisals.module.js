(function() {
  'use strict';

  angular.module('app.appraisals', [
          'app.appraisals.newappraisal'
      ])
      .config(config);

  function config(msNavigationServiceProvider) {
      msNavigationServiceProvider.saveItem('appraisals', {
          title: 'Appraisals',
          weight: 1,
          icon: 'icon-cog'
      });

      msNavigationServiceProvider.saveItem('appraisals.newappraisal', {
        title: 'New Appraisal',
        state: 'app.newappraisal'
    });
  }
})();
