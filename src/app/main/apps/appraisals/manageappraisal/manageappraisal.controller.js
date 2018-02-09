(function() {
  "use strict";

  angular
    .module("app.appraisals.manageappraisal")
    .controller("ManageAppraisalController", function(
      $scope,
      $mdDialog,
      $document,
      $http,
      AppConstants,
      UtilityService,
      $rootScope
    ) {
      var vm = this;

      $scope.selected = [];
      $scope.employees = [];
      vm.loggedInUser = localStorage.getItem('loggedInUser');
      if(vm.loggedInUser!=undefined||vm.loggedInUser!='undefined'){
        vm.loggedInUser = JSON.parse(vm.loggedInUser);
      }

      function getPendingAppraisals(){
        $rootScope.processingRequest = true;
        $http
        .get(AppConstants.baseApiUrl + "appraisal/sub")
        .then(function(response) {
          $rootScope.processingRequest = false;
          $scope.users = response.data;
        },function(){
          $rootScope.processingRequest = false;
          UtilityService.showAlert('error occured!','error occured','Alert Dialog');
        });
      }

      function getReviewdList(){
        $rootScope.processingRequest = true;
        $http
        .get(AppConstants.baseApiUrl + "appraisal/rev")
        .then(function(response) {
          $rootScope.processingRequest = false;
          $scope.users = response.data;
        },function(){
          $rootScope.processingRequest = false;
          UtilityService.showAlert('error occured!','error occured','Alert Dialog');
        });
      }

      function getApprovedList(){
        $http
        .get(AppConstants.baseApiUrl + "appraisal/apv")
        .then(function(response) {
          $rootScope.processingRequest = false;
          $scope.users = response.data;
        },function(){
          $rootScope.processingRequest = false;
          UtilityService.showAlert('error occured!','error occured','Alert Dialog');
        });
      }

      function getRejectedList(){
        $http
        .get(AppConstants.baseApiUrl + "appraisal/rej")
        .then(function(response) {
          $rootScope.processingRequest = false;
          $scope.users = response.data;
        },function(){
          $rootScope.processingRequest = false;
          UtilityService.showAlert('error occured!','error occured','Alert Dialog');
        });
      }

      vm.appraisalStatusChanged = function(status){
        console.log('radio button changed');
        if(status=='pending'){
          getPendingAppraisals();
        }
        if(status=='approved'){
          getApprovedList();
        }
        if(status=='reviewed'){
          getReviewdList();
        }
        if(status=='rejected'){
          getRejectedList();
        }
      };

      if(vm.loggedInUser.roles=='LINE_MANAGER'){
        getPendingAppraisals();
        vm.status = 'pending';
      }



      else if((vm.loggedInUser.roles!='USER'||vm.loggedInUser.roles!='HR')&&vm.status=='reviewd'){

        if(vm.status=='approved'){

        }
        else if(vm.status=='rejected'){

        }
        else if(vm.status == 'reviewed'){

        }
      }


      vm.getAppraisalDetails = function(employeeId,ev,templateFile){
        $rootScope.processingRequest = true;
        $http.get(AppConstants.baseApiUrl+'appraisal/'+employeeId.id).then(function(response){

          console.log(response);
         UtilityService.showDialog(ev, templateFile, response.data,'ViewAppraisalController');
        });
      };

    }).controller('ViewAppraisalController',function(dialogData,$scope,$mdDialog,$rootScope,AppConstants,UtilityService,$http){
      var vm = this;
      $scope.review = {};

      $scope.user = dialogData.user;
      $scope.objectives = dialogData.objectives;
      $scope.jobSummary = dialogData.jobSummary;
      $scope.additionalComments = dialogData.additionalComments;
      $scope.performanceAppraisal = dialogData.performanceAppraisal;
      $scope.foundingPhilosophy = dialogData.foundingPhilosophy.creeds;
      $scope.overallAssessment = dialogData.overallAssessment;
      $scope.developmentPlans = dialogData.developmentPlans;
      $scope.clientFeedback = dialogData.clientFeedback;
      $scope.lineManagerComment = dialogData.lineManagerComment;
      $rootScope.processingRequest = false;

      $scope.loggedInUser = localStorage.getItem('loggedInUser');
      if($scope.loggedInUser!=undefined||$scope.loggedInUser!='undefined'){
        $scope.loggedInUser = JSON.parse($scope.loggedInUser);
      }

      $scope.cancel = function(){
        $mdDialog.cancel();
      };

      $scope.submitReveiw = function(status){
        $scope.processingReveiw = true;
        $scope.review.action = status;

        if($scope.loggedInUser.roles=='LINE_MANAGER'){
          $http.post(AppConstants.baseApiUrl+"appraisal/"+$scope.user.id+"/appraise",$scope.review).then(function(){
            $$scope.processingReveiw = false;

            UtilityService.showAlert('success!','Approval submitted successfully','Alert Dialog');
          },function(){
            $$scope.processingReveiw = false;
            UtilityService.showAlert('error occured!','error occured','Alert Dialog');

          });
        }
        else if($scope.loggedInUser.roles=='TOP_MANAGER'){
          $http.post(AppConstants.baseApiUrl+"appraisal/"+$scope.user.id+"/app_rej",$scope.review).then(function(){
            $$scope.processingReveiw = false;

            UtilityService.showAlert('success!','Final review submitted successfully','Alert Dialog');
          },function(){
            $$scope.processingReveiw = false;
            UtilityService.showAlert('error occured!','error occured','Alert Dialog');

          });
        }
      };
    });
})();
