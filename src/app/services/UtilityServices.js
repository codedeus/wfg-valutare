(function () {
  'use strict';

  angular
  .module('fuse')
  .factory('UtilityService', UtilityService);

  UtilityService.$inject = ['$http', '$log', '$q', '$rootScope', '$mdDialog'];

  function UtilityService($http, $log, $q, $rootScope, $mdDialog) {
    console.log('Initializing UtilityService...');
    var service = {
      ResizeBase64Img:ResizeBase64Img,
      showDialog:showDialog,
      showAlert:showAlert,
      importFromExcel: importFromExcel,
      exportToExcel: exportToExcel
    };

    return service;

        function ResizeBase64Img(base64, width, height) {
            var canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;
            var context = canvas.getContext("2d");
            var deferred = $.Deferred();
            $("<img/>").attr("src", "data:image/png;base64," + base64).load(function() {
                context.scale(width/this.width,  height/this.height);
                context.drawImage(this, 0, 0);
                deferred.resolve($("<img/>").attr("src", canvas.toDataURL()));
            });
            return deferred.promise();
        }


        function showDialog(ev, templateFile, dialogData,ctrlr,viewOnly,patient){
          $mdDialog.show({
            controller: ctrlr,
            locals: { dialogData: dialogData, viewOnly: viewOnly, patientDetails: patient },
            templateUrl: 'app/main/dialogs/' + templateFile,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: false,
            fullscreen: true,
            multiple: true
                //  directive:importFromExcel
          })
          .then(function() {
              //Do nothing for now.
          }, function() {
              //still do nothing
          });
        }

        function showAlert(title,content){
          $mdDialog.show(
            $mdDialog.alert()
            .title(title)
            .textContent(content)
            .ariaLabel('Alert Dialog')
            .ok('Got It!'));
        }

        function importFromExcel(event, filePath, funcName) {
          if (event.target.files.length == 0) {
              return false;
          }
          alasql('SELECT * FROM FILE(?,{headers:true})', [event], function (data) {
              $rootScope.employeeList = data;
          });
        }

        function exportToExcel(fileName, targetData) {

          if (!angular.isArray(targetData)) {
              $log.error('Can not export error type data to excel.');
              return;
          }

          alasql('SELECT * INTO XLSX("'+ fileName + '.xlsx",{headers:true}) FROM ?', [targetData],function (response) {

          });
      }
  }
})();
