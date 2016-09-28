(function() {
    "use strict";

    angular.module("common")
        .controller("PageHeader", PageHeader);

    PageHeader.$inject = ["model", "todoService"];
    function PageHeader(model, todoService) {
        let $ctrl = this;

        $ctrl.todo = model;

        Object.assign($ctrl, todoService);
    }

})();