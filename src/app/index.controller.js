(function () {
    'use strict';

    var isDlgOpen;

    angular
        .module('fuse')
        .controller('IndexController', IndexController);

    /** @ngInject */
    function IndexController(fuseTheming,msNavigationService) {
        var vm = this;

        vm.themes = fuseTheming.themes;
        console.log('index controller is called...');

        vm.loggedInUser = localStorage.getItem('loggedInUser');
        if(vm.loggedInUser!=undefined||vm.loggedInUser!='undefined'){
          vm.loggedInUser = JSON.parse(vm.loggedInUser);
        }

        if (vm.loggedInUser&&vm.loggedInUser.roles!='USER'&&vm.loggedInUser.roles!='LINE_MANAGER') {
          msNavigationService.deleteItem('appraisals.newappraisal');
        }

        if(vm.loggedInUser&&vm.loggedInUser.roles=='USER'){
          msNavigationService.deleteItem('appraisals.manageappraisal');
        }
        if(vm.loggedInUser&&(vm.loggedInUser.roles=='USER'||vm.loggedInUser.roles=='LINE_MANAGER')){
          msNavigationService.deleteItem('settings');
        }
    }
})();
