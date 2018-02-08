(function(){
  'use strict';

  angular.module('app.settings.employeelist').
      controller('EmployeeListController',function(AppConstants,$http,$scope,$rootScope,UtilityService){
        var vm = this;

        vm.uploadTemlate = function(){
          debugger;
          console.log($rootScope.employeeList);
        };

        vm.templateData = [{
          firstname: '',
          lastname: '',
          email: '',
          lob: '',
          role: '',
          recruitmentDate: '',
          location: ''
      }];

      vm.downloadTemlate = function() {
        UtilityService.exportToExcel('employeelisttemplate', vm.templateData);
      };
    });
})();
