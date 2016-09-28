(function() {
    "use strict";

    angular.module("feature")
        .component("taskForm", {
            bindings: {
                collection: "<"
            },
            templateUrl: "./feature/components/taskForm/taskForm.html",
            controller: "TaskForm",
            controllerAs: "$formCtrl"
        });

})();