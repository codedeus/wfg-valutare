(function() {
  "use strict";

  angular
    .module("app.appraisals", [
      "app.appraisals.newappraisal",
      "app.appraisals.manageappraisal"
    ])
    .config(config);

  function config(msNavigationServiceProvider) {
    var localitem = localStorage.getItem('loggedInUser');
      if(localitem!=undefined||localitem!='undefined'){
        localitem = JSON.parse(localitem);
      }

    msNavigationServiceProvider.saveItem("appraisals", {
      title: "Appraisals",
      weight: 1,
      icon: "icon-cog"
    });

    msNavigationServiceProvider.saveItem("appraisals.newappraisal", {
      title: "New Appraisal",
      state: "app.newappraisal",
      hidden:function(){
        return (localitem.roles!='USER' && localitem.roles!='LINE_MANAGER');
      }
    });

    msNavigationServiceProvider.saveItem("appraisals.manageappraisal", {
      title: "Manage Appraisal",
      state: "app.manageappraisal",
      hidden:function(){
        return localitem.roles=='USER';
      }
    });
  }
})();
