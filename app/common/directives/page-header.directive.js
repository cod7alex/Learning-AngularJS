(function() {
    "use strict";

    angular.module("common")
        .directive("pageHeader", pageHeader);

    function pageHeader() {
        return {
            templateUrl: "page-header.html"
        };
    }

})();