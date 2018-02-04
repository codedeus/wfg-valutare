(function(){
    'use strict';

    angular.module('app.settings.passwordchange',[])
        .config(config);

        function config($stateProvider){
            $stateProvider.state('app.passwordchange',{
                url:'/passwordchange',
                data:{
                    name:'Password Change',
                    role:'passwordChange'
                },
                views:{
                    'content@app':{
                        templateUrl:'app/main/apps/settings/passwordchange/passwordchange.html',
                        controller:'PasswordChangeController as vm'
                    }
                }
            });
        }
})();