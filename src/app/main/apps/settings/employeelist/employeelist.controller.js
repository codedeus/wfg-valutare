(function(){
  'use strict';

  angular.module('app.settings.employeelist').
      controller('EmployeeListController',function(AppConstants,$http,$scope,$rootScope,UtilityService,$mdDialog){
        var vm = this;

        $scope.limitOptions = [5, 10, 20, 50, 100];

        $scope.query = {
          order: "name",
          limit: 5,
          page: 1
        };

        $scope.options = {
          rowSelection: true,
          multiSelect: true,
          autoSelect: true,
          decapitate: false,
          largeEditDialog: false,
          boundaryLinks: false,
          limitSelect: true,
          pageSelect: true
        };

        vm.uploadTemlate = function(){

          $rootScope.processingRequest = true;

          $http.post(AppConstants.baseApiUrl+'users/upload',$rootScope.employeeList).then(function(response){
            $rootScope.employeeList = null;
            if (response.data.length > 0) {

              var parentEl = angular.element(document.querySelector('md-content'));

              alert = $mdDialog.alert({
                  parent: parentEl,
                  //  targetEvent: $event,
                  template: '<md-dialog aria-label="Sample Dialog">' +
                  '  <md-content>' +
                  '    <md-list>' +
                  '      <md-item ng-repeat="item in ctrl.items track by $index">' +
                  '       <p>{{$index+1 +": "+item.comment+" (" + item.email+")"}}</p>' +
                  '      </md-item>' +
                  '    </md-list>' +
                  '  </md-content>' +
                  '  <div class="md-actions">' +
                  '    <md-button ng-click="ctrl.closeDialog()">' +
                  '      Ok Got it.' +
                  '    </md-button>' +
                  '  </div>' +
                  '</md-dialog>',
                  locals: {

                      items: response.data,
                      closeDialog: $scope.closeDialog
                  },
                  bindToController: true,
                  controllerAs: 'ctrl',
                  controller: 'ErrorDialogController'
              }).title("Incomplete/Incorrect Entry");

              $mdDialog
                  .show(alert)
                  .finally(function () {
                      alert = undefined;
                  });
                  $rootScope.processingRequest = false;
              //alert(status);

          }
          else{
            $rootScope.processingRequest = false;
            UtilityService.showAlert('success!','list uploaded sucessfully','Alert Dialog');
          }
          },function(){
            $rootScope.processingRequest = false;
            $rootScope.employeeList = null;
          });
        };

        $scope.closeDialog = function() {
          $mdDialog.cancel();
        };

        vm.templateData = [{
          firstname: '',
          lastname: '',
          email: '',
          lob: '',
          role: ''
      }];

      vm.getEmployeeList = function() {
        $http
          .get(AppConstants.baseApiUrl+'users?pageNumber='+$scope.query.page+"&pageSize=" + $scope.query.limit)
          .then(
            function(response) {
              $scope.employees = response.data.content;
              $scope.employees.count = response.data.total;
            },
            function(err) {
              var error = err;
            }
          );
      };

      vm.getEmployeeList();

      vm.downloadTemlate = function() {
        UtilityService.exportToExcel('employeelisttemplate', vm.templateData);
      };
    }).controller('ErrorDialogController',function(){

    });
})();
