(function() {
    "use strict";

    angular.module("common")
        .directive("pageHeader", pageHeader);

    function pageHeader() {
        return {
            templateUrl: "./common/directives/page-header.html"
        };
    }

})();