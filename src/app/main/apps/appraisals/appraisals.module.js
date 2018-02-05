;(function() {
  "use strict"

  angular
    .module("app.appraisals", [
      "app.appraisals.newappraisal",
      "app.appraisals.manageappraisal"
    ])
    .config(config)

  function config(msNavigationServiceProvider) {
    msNavigationServiceProvider.saveItem("appraisals", {
      title: "Appraisals",
      weight: 1,
      icon: "icon-cog"
    })

    msNavigationServiceProvider.saveItem("appraisals.newappraisal", {
      title: "New Appraisal",
      state: "app.newappraisal"
    })

    msNavigationServiceProvider.saveItem("appraisals.manageappraisal", {
      title: "Manage Appraisal",
      state: "app.manageappraisal"
    })
  }
})()
