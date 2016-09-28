(function() {
    "use strict";

    angular.module("common")
        .directive("menu", menu);

    function menu() {
        return {
            restrict: 'E',
            transclude: true,
            template: "<ul ng-transclude></ul>",
            replace: true
        };
    }

})();
