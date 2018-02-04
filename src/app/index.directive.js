(function (){
  'use strict';

  angular
      .module('fuse').directive('draggable', function() {
          return {
              // A = attribute, E = Element, C = Class and M = HTML Comment
              restrict: 'A',
              //The link function is responsible for registering DOM listeners as well as updating the DOM.
              link: function(scope, element, attrs) {
                  element.draggable({
                      stop: function(event, ui) {
                          console.log("dragging me...");
                          event.stopPropagation();
                      }
                  });
              }
          };
      }).directive('confirmPwd', function($interpolate, $parse) {
        return {
            require: 'ngModel',
            link: function(scope, elem, attr, ngModelCtrl) {

                var pwdToMatch = $parse(attr.confirmPwd);
                var pwdFn = $interpolate(attr.confirmPwd)(scope);

                scope.$watch(pwdFn, function(newVal) {
                    ngModelCtrl.$setValidity('password', ngModelCtrl.$viewValue == newVal);
                });

                ngModelCtrl.$validators.password = function(modelValue, viewValue) {
                    var value = modelValue || viewValue;
                    return value == pwdToMatch(scope);
                };
            }
        };
    });
})();
