(function() {
  "use strict"

  angular
    .module("app.appraisals.manageappraisal")
    .controller("ManageAppraisalController", function(
      $scope,
      $mdDialog,
      $document,
      $http,
      AppConstants
    ) {
      var vm = this

      vm.acceptDialog = acceptDialog
      vm.declineDialog = declineDialog

      $scope.selected = []
      $scope.users = []

      $http
        .get(AppConstants.baseApiUrl + "appraisal/sub")
        .then(function(response) {
          $scope.users = response.data
        })

      /**
       * Open compose dialog
       *
       * @param ev
       */
      function acceptDialog(ev) {
        $mdDialog.show({
          controller: "AcceptAppraisalController",
          controllerAs: "vm",
          locals: {
            selectedMail: undefined
          },
          templateUrl:
            "app/main/apps/appraisals/manageappraisal/dialogs/acceptappraisal/acceptappraisal.html",
          parent: angular.element($document.body),
          targetEvent: ev,
          clickOutsideToClose: true
        })
      }

      function declineDialog(ev) {
        $mdDialog.show({
          controller: "DeclineAppraisalController",
          controllerAs: "vm",
          locals: {
            selectedMail: undefined
          },
          templateUrl:
            "app/main/apps/appraisals/manageappraisal/dialogs/declineappraisal/declineappraisal.html",
          parent: angular.element($document.body),
          targetEvent: ev,
          clickOutsideToClose: true
        })
      }
    })
})()
