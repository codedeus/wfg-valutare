(function(){
  'use strict';

  angular.module('app.appraisals.newappraisal',[])
      .config(config);

      function config($stateProvider,$translatePartialLoaderProvider){
          $stateProvider.state('app.newappraisal',{
              url:'/newappraisal',
              data:{
                  name:'New Appraisal',
                  role:'newappraisal'
              },
              views:{
                'content@app':{
                    templateUrl:'app/main/apps/appraisals/newappriasal/newappraisal.html',
                    controller:'NewAppraisalController as vm'
                }
              }
          });

          $translatePartialLoaderProvider.addPart('app/main/apps/appraisals/newappriasal');
      }
})();
