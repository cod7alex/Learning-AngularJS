(function() {
    "use strict";

    angular.module("common")
        .directive("pageHeader", pageHeader);

    function pageHeader() {
        return {
            templateUrl: "./common/directives/pageHeader/pageHeader.html",
            controllerAs: "$headerCtrl",
            controller: "PageHeader"
        };
    }

})();