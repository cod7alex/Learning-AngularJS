(function() {
    "use strict";

    angular.module("common")
        .controller("Header", Header);

    Header.$inject = ["model", "todoService"];
    function Header(model, todoService) {
        let $ctrl = this;

        $ctrl.todo = model;

        Object.assign($ctrl, todoService);
    }

})();