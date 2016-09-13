(function() {
    "use strict";

    angular.module("feature")
        .directive("todoList", todoList);

    function todoList() {
        return {
            templateUrl: "./feature/directives/table.html"
        };
    }

})();