(function(){
  'use strict';

  angular.module('app.appraisals.newappraisal').
      controller('NewAppraisalController',function(AppConstants,$http,$scope,$rootScope){
          var vm = this;
          vm.responsibilities = [];
          vm.jobsummaries = [];
          vm.objective = {};
          vm.performanceAppraisal = {};
          vm.developmentPlan = [];
          vm.assessment = {};
          vm.profiledata = {};
          vm.lobs = [];
          vm.locations = [];
          $rootScope.processingRequest = false;
          getLineOfBusiness();
          getbusinessLocations();
          function getbusinessLocations(){
            $http.get(AppConstants.baseApiUrl+"util/locations").then(function(locationres){
              vm.locations = locationres.data;
            });
          }
          function getLineOfBusiness(){
            $http.get(AppConstants.baseApiUrl+"util/lob").then(function(lobres){
              vm.lobs = lobres.data;
            });
          }

          vm.currentPosition = {
            plan:"Performance Enhancement (Current Position)"
          };
          vm.futurePosition = {
            plan:"Career Development (Future Positions)"
          };


          vm.foundingPhilosophy = [
            {name:"Our Core",definition:"Your knowledge of our Core Business.",rating:4},
            {name:"Right People",definition:"Your understanding of what we do, your passion for what we do and your capability to do it.",rating:4},
            {name:"Diagnosis",definition:"The degree to which you are consultative in your approach to value creation.",rating:4},
            {name:"Preparation",definition:"The degree to which you engage in rigorous planning and exercising of due diligence with respect to work deliverables.",rating:4},
            {name:"Competence",definition:"The degree to which you demonstrate functional and organisational competence.",rating:4},
            {name:"Work Ethics",definition:"The efforts, commitment and consistency to which you carry out the deliverables.",rating:4},
            {name:"Quality",definition:"The degree to which you consistently go out of your way to deliver top quality solutions, products/services above and beyond what is expected, whatever it takes.",rating:4},
            {name:"Customer Intimacy",definition:"The degree to which you are obsessed with delivering customer value beyond expectation.",rating:4},
            {name:"Follow Through",definition:"Your ability to follow through on projects/deliverables till we get our desired result/outcome.",rating:4}
          ];


          vm.addNewObject = function(type){
            var object = {};
            var currentLength;

            if(type=='jobsummary'){
              currentLength = vm.jobsummaries.length;
              object.id = currentLength+1;
              object.summary = "";
              vm.jobsummaries.push(object);
            }
            else if(type=='responsibility'){
              currentLength = vm.responsibilities.length;
              object.id = currentLength+1;
              object.comment = "";
              vm.responsibilities.push(object);
            }
          };


          vm.removeSelectedObject = function(object,name){
            var index;
            if(name=='responsibility'){
              index = vm.responsibilities.indexOf(object);
              vm.responsibilities.splice(index, 1);
            }
            else if(name=='jobsummary'){
              index = vm.jobsummaries.indexOf(object);
              vm.jobsummaries.splice(index, 1);
            }
          };

          function add(a, b) {
            return a + parseInt(b.rating);
          }

          function successfunction(response){
            $rootScope.processingRequest = false;
          }

          function errorfunction(response){
            console.log(response);
            $rootScope.processingRequest = false;
          }


          vm.sendForm = function(){

            $rootScope.processingRequest = true;
            var sum = vm.foundingPhilosophy.reduce(add, 0);

            var philosophy = {
              creeds:vm.foundingPhilosophy,
              totalRating:sum
            }

            toastr.options = {
              "closeButton": true,
              "debug": false,
              "newestOnTop": false,
              "progressBar": false,
              "positionClass": "toast-top-center",
              "preventDuplicates": false,
              "showDuration": "300",
              "hideDuration": "1000",
              "timeOut": 0,
              "extendedTimeOut": 0,
              "showEasing": "swing",
              "hideEasing": "linear",
              "showMethod": "fadeIn",
              "hideMethod": "fadeOut",
              "tapToDismiss": false
            };
            vm.developmentPlan.push(vm.currentPosition);
            vm.developmentPlan.push(vm.futurePosition);


            $http.post(AppConstants.baseApiUrl+"obj",vm.objective).then(function(objresponse){
              console.log(objresponse);
              $rootScope.processingRequest = false;
              $http.post(AppConstants.baseApiUrl+"assessment/summary",vm.jobsummaries).then(function(summaryres){
                console.log(summaryres);

                $http.post(AppConstants.baseApiUrl+"assessment/comment",vm.responsibilities).then(function(responsibilitesres){
                  console.log(responsibilitesres);

                  $http.post(AppConstants.baseApiUrl+"assessment/appraisal",vm.performanceAppraisal).then(function(appraisalres){
                    console.log(appraisalres);

                    $http.post(AppConstants.baseApiUrl+"philosophy",philosophy).then(function(philosophyres){

                      $http.post(AppConstants.baseApiUrl+'philosophy/feedback',{feedBack:vm.feedBack}).then(function(){

                        $http.post(AppConstants.baseApiUrl+"assessment/overall",vm.assessment).then(function(overallres){
                          console.log(overallres);
                          $http.put(AppConstants.baseApiUrl+"users/update-profile",vm.profiledata).then(function(profiledatares){
                            $http.post(AppConstants.baseApiUrl+'plans',vm.developmentPlan).then(function(success){
                              $rootScope.processingRequest = false;
                              var message = "Yippie!!!, everthing submitted sussessfully";
                              toastr.success( "<br/>"+ message, "Success");

                            },function(response){
                              console.log(response);
                              $rootScope.processingRequest = false;
                            });
                          },function(response){
                            console.log(response);
                            $rootScope.processingRequest = false;
                          });
                        },function(overallerr){
                          console.log(overallerr);
                          $rootScope.processingRequest = false;
                        });
                      },function(response){
                        console.log(response);
                        $rootScope.processingRequest = false;
                      });
                    },function(response){
                      console.log(response);
                      $rootScope.processingRequest = false;
                    });
                  },function errorfunction(response){
                    console.log(response);
                    $rootScope.processingRequest = false;
                  });
                },function(response){
                  console.log(response);
                  $rootScope.processingRequest = false;
                });
              },function (response){
                console.log(response);
                $rootScope.processingRequest = false;
              });
            },function(response){
              console.log(response);
              $rootScope.processingRequest = false;
            });
          };

      });
})();
