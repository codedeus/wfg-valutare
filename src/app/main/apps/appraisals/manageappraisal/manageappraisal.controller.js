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

      vm.appraisalStatus = 'pending';

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

      getPendingAppraisals();

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

      $rootScope.processingRequest = false;

      $scope.cancel = function(){
        $mdDialog.cancel();
      };

      $scope.submitReveiw = function(status){
        $scope.processingReveiw = true;
        $scope.review.action = status;
        $http.post(AppConstants.baseApiUrl+"appraisal/"+$scope.user.id+"/appraise",$scope.review).then(function(){
          $$scope.processingReveiw = false;

          UtilityService.showAlert('success!','Appraisal review submitted successfully','Alert Dialog');
        },function(){
          $$scope.processingReveiw = false;
          UtilityService.showAlert('error occured!','error occured','Alert Dialog');

        });
      };
    });
})();
