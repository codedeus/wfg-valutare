(function() {
    'use strict';

    angular.module('app.settings', [
            'app.settings.login',
            'app.settings.register',
            'app.settings.employeelist'
        ])
        .config(config);

    function config(msNavigationServiceProvider) {
      var localitem = localStorage.getItem('loggedInUser');
      if(localitem!=undefined||localitem!='undefined'){
        localitem = JSON.parse(localitem);
      }
        msNavigationServiceProvider.saveItem('settings', {
            title: 'Settings',
            weight: 1,
            icon: 'icon-cog',
            hidden:function(){
              return localitem.roles=='USER';
            }
        });

        msNavigationServiceProvider.saveItem("settings.employeelist", {
          title: "Employee List",
          state: "app.employeelist"
        });
    }
})();
