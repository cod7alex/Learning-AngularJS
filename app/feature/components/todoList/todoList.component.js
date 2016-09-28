(function() {
    "use strict";

    angular.module("feature")
        .component("todoList", {
            templateUrl: "./feature/components/todoList/todoList.html",
            controller: "TodoList",
            controllerAs: "$todoCtrl"
        });

})();