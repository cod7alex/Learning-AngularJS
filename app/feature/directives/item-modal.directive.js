(function() {
    "use strict";

    angular.module("feature")
        .directive("itemModal", itemModal);

    function itemModal() {
        return {
            templateUrl: "./feature/directives/modal.html"
        };
    }

})();