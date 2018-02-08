(function(){
  'use strict';

  angular.module('app.settings.employeelist',[])
      .config(config);

      function config($stateProvider){
          $stateProvider.state('app.employeelist',{
              url:'/employeelist',
              data:{
                  name:'Employee List',
                  role:'employeelist'
              },
              views:{
                'content@app':{
                    templateUrl:'app/main/apps/settings/employeelist/employeelist.html',
                    controller:'EmployeeListController as vm'
                }
              }
          });
      }
})();
