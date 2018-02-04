(function () {
    'use strict';

    var isDlgOpen;

    angular
        .module('fuse')
        .controller('IndexController', IndexController);

    /** @ngInject */
    function IndexController(fuseTheming) {
        var vm = this;

        vm.themes = fuseTheming.themes;
    }
})();
