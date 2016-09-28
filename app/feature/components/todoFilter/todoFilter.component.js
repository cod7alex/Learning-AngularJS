(function() {
    "use strict";

    angular.module("feature")
        .component("todoFilter", {
            templateUrl: "./feature/components/todoFilter/todoFilter.html",
            bindings: {
                changeFilter: "&onFilterChange"
            },
            controller: function() {
                let $ctrl = this;

                $ctrl.changeFilterText = function () {
                    $ctrl.changeFilter({text: $ctrl.filterText});
                }
            }
        });

})();