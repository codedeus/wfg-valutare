(function () {
    'use strict';

    angular
        .module('fuse')
        .config(config);
       // .config(exceptionConfig);

    /** @ngInject */
    function config($httpProvider,$stateProvider){
        // Put your custom configurations here
        console.log($stateProvider);
        console.log('index config is called...');
        var token = localStorage.getItem('loggedInUser');
        if(token!=null&&token!='undefined'){
          token =   JSON.parse(token);
          token = token.token;
          $httpProvider.defaults.headers.common['X-AUTH-TOKEN'] = token;
        }
    }

    // exceptionConfig.$inject = ['$provide'];

    // function exceptionConfig($provide) {
    //     $provide.decorator('$exceptionHandler', extendExceptionHandler);
    //     //$provide.decorator('$mdDialog',$mdDialog);
    // }
    // extendExceptionHandler.$inject = ['$delegate','$injector'];

    // function extendExceptionHandler($delegate,$injector) {
    //   return function(exception, cause) {
    //     $delegate(exception, cause);
    //     var errorData = {
    //         exception: exception,
    //         cause: cause
    //     };
    //     /**
    //      * Could add the error to a service's collection,
    //      * add errors to $rootScope, log errors to remote web server,
    //      * or log locally. Or throw hard. It is entirely up to you.
    //      * throw exception;
    //      */
    //     if ((typeof process !== 'undefined') && (process.release.name.search(/node|io.js/) !== -1)) {
    //       const fs = require('fs');
    //       const path = require('path');
    //       const os = require('os');

    //       const homeDir = os.homedir();
    //       var logDir = path.join(homeDir,'WorkForceAppraisals','logs');

    //       if (!fs.existsSync(logDir)) {
    //           fs.mkdirSync(logDir);
    //       }
    //       var datetime = new Date();
    //       var fileName = '/log-'+datetime.toDateString()+'.txt';
    //       logDir = path.join(logDir,fileName);

    //       var logger = fs.createWriteStream(logDir, {
    //         flags: 'a' // 'a' means appending (old data will be preserved)
    //       });

    //       logger.write(new Date() +"------- "+exception.stack+"\n \n \n \n");
    //       logger.end();
    //     }

    //     else{
    //       // toastr.options = {
    //       //   "closeButton": true,
    //       //   "positionClass": "toast-top-right",
    //       //   "timeOut": 0,
    //       //   "extendedTimeOut": 0,
    //       //   "tapToDismiss": false
    //       // }
    //       // toastr.error(exception.stack, 'Error Occured!');

    //       toastr.options = {
    //         "closeButton": true,
    //         "debug": false,
    //         "newestOnTop": false,
    //         "progressBar": false,
    //         "positionClass": "toast-bottom-left",
    //         "preventDuplicates": false,
    //         "showDuration": "300",
    //         "hideDuration": "1000",
    //         "timeOut": 0,
    //         "extendedTimeOut": 0,
    //         "showEasing": "swing",
    //         "hideEasing": "linear",
    //         "showMethod": "fadeIn",
    //         "hideMethod": "fadeOut",
    //         "tapToDismiss": false
    //       }
    //       toastr["error"]( "<br"+ exception.message+"/>", "Error Occured")
    //     }
    //   };
    // }

})();
