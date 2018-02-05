(function() {
  "use strict"

  angular
    .module("app.appraisals.manageappraisal")
    .controller("DeclineAppraisalController", DeclineAppraisalController)

  /** @ngInject */
  function DeclineAppraisalController($mdDialog, selectedMail) {
    var vm = this

    // Data
    vm.form = {
      from: "johndoe@creapond.com"
    }

    vm.hiddenCC = true
    vm.hiddenBCC = true

    // If replying
    if (angular.isDefined(selectedMail)) {
      vm.form.to = selectedMail.from.email
      vm.form.subject = "RE: " + selectedMail.subject
      vm.form.message = "<blockquote>" + selectedMail.message + "</blockquote>"
    }

    // Methods
    vm.closeDialog = closeDialog

    //////////

    function closeDialog() {
      $mdDialog.hide()
    }
  }
})()
