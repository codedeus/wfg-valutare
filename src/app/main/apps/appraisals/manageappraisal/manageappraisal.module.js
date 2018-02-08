(function() {
  "use strict";

  angular.module("app.appraisals.manageappraisal", []).config(config)

  function config($stateProvider, $translatePartialLoaderProvider) {
    $stateProvider.state("app.manageappraisal", {
      url: "/manageappraisal",
      data: {
        name: "Manage Appraisal",
        roles: ['ADMIN', 'SUPER_ADMIN', 'LINE_MANAGER', 'TOP_MANAGER','HR']
      },
      views: {
        "content@app": {
          templateUrl:
            "app/main/apps/appraisals/manageappraisal/manageappraisal.html",
          controller: "ManageAppraisalController as vm"
        }
      }
    });

    $translatePartialLoaderProvider.addPart("app/main/apps/appraisals/manageappraisal");
  }
})();
