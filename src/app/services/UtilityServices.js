(function () {
  'use strict';

  angular
  .module('fuse')
  .factory('UtilityService', UtilityService);

  UtilityService.$inject = ['$http', '$log', '$q', '$rootScope', '$mdDialog'];

  function UtilityService($http, $log, $q, $rootScope, $mdDialog) {
    console.log('Initializing UtilityService...');
    var service = {
      CalculateAge: CalculateAge,
      FormatDate:FormatDate,
      GetStatus:GetStatus,
      ResizeBase64Img:ResizeBase64Img,
      FormatDateTime:FormatDateTime,
      getSetLocation:getSetLocation,
      showDialog:showDialog,
      showAlert:showAlert
    };

    return service;


        function CalculateAge(fromdate, todate){
          if(todate) todate= new Date(todate);
          else todate= new Date();

          var age= [], fromdate= new Date(fromdate),
          y= [todate.getFullYear(), fromdate.getFullYear()],
          ydiff= y[0]-y[1],
          m= [todate.getMonth(), fromdate.getMonth()],
          mdiff= m[0]-m[1],
          d= [todate.getDate(), fromdate.getDate()],
          ddiff= d[0]-d[1];

          if(mdiff < 0 || (mdiff=== 0 && ddiff<0))--ydiff;
          if(mdiff<0) mdiff+= 12;
          if(ddiff<0){
            fromdate.setMonth(m[1]+1, 0);
            ddiff= fromdate.getDate()-d[1]+d[0];
            --mdiff;
          }
          if(ydiff> 0) age.push(ydiff+ 'y'+(ydiff> 1? ' ':''));
          if(mdiff> 0) age.push(mdiff+ 'm'+(mdiff> 1? ' ':''));
          if(ddiff> 0) age.push(ddiff+ 'd'+(ddiff> 1? ' ':''));
          if(age.length>1) age.splice(age.length-1,0,' ');
          return age.join('');
        }

         function FormatDate(date) {
           if(date!=undefined&&date!='N/A'){
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            var month = date.getMonth()+1;
            return date.getDate() + "/" + month + "/" + date.getFullYear();

           }
      }

      function FormatDateTime(date) {
           if(date!=undefined){
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            var month = date.getMonth()+1;
            return date.getDate() + "/" + month + "/" + date.getFullYear() + "  " + strTime;
           }
        }

      function GetStatus( situation,  forNurse){
            var status = "";
            switch (situation)
            {
                case " ":
                    status = "Pending";
                    break;
                case "1":
                    status = forNurse ? "Attending" : "";
                    break;
                case "2":
                    status = forNurse ? "Attended" : "Pending";
                    break;
                case "3":
                    status = forNurse ? "Attended" : "Attended";
                    break;
            }
            return status;
        }

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

        function getSetLocation(){
          var location = localStorage.getItem('location');
          if (location !== 'undefined' && location !== undefined) {
              location = JSON.parse(location);
          }
          return location;
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
  }
})();
