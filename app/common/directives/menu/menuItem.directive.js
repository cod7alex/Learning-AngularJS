(function() {
    "use strict";

    angular.module("common")
        .directive("menuItem", menuItem);

    function menuItem() {
        return {
            restrict: 'E',
            transclude: true,
            template: "<li ng-transclude></li>",
            replace: true
        };
    }

})();
