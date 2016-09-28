(function() {
    "use strict";

    angular.module("common")
        .directive("menuGroup", menuGroup);

    function menuGroup() {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
                title: "@menuTitle"
            },
            template: "<li>{{ title }}<ul ng-transclude></ul></li>",
            replace: true
        };
    }

})();
