(function() {
    'use strict';

    angular
        .module('fuse')

    /** @ngInject */

    .run(['msNavigationService', '$rootScope', '$timeout', '$cookieStore', '$state', '$location', 'StoreService','$translate',
        function(msNavigationService, $rootScope, $timeout, $cookieStore, $state, $location, StoreService,$translate) {


        var stateChangeStartEvent = $rootScope.$on('$stateChangeStart', function (event, toState){
            // Activate loading indicator
            $rootScope.loadingProgress = true;
            // check if user is logged int(has valid token)
            $rootScope.globals = $cookieStore.get('loggedInUser');

            $rootScope.pageTitle = toState.data.name || "";
            if($rootScope.globals===undefined&&$location.path() !== '/login'&& $location.path()!== '/register'){
              //if no valid token, send the idiot to the loggin page
              event.preventDefault();
              $location.path('/login');
              $state.go('app.login');
            }
        });

        // De-activate loading indicator
        var stateChangeSuccessEvent = $rootScope.$on('$stateChangeSuccess', function ()
        {
          console.log('change state success');
          $rootScope.$broadcast('handleBroadcast', { pageTitle: $rootScope.pageTitle,showShiftMenu: $rootScope.showShiftMenu,shiftNumber:$rootScope.shiftNumber});
          $rootScope.loadingProgress = false;

        });


        // Store state in the root scope for easy access
        $rootScope.state = $state;

        // Cleanup
        $rootScope.$on('$destroy', function ()
        {
            stateChangeStartEvent();
            stateChangeSuccessEvent();
        });

    }]);
})();
