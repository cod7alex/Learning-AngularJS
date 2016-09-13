(function() {
    "use strict";

    angular.module("feature")
        .directive("highlightMissed", highlightMissed);

    function highlightMissed() {
        return {
            link: function(scope, element) {
                scope.$watch("item", function (newValue) {
                    if(newValue.deadline.isBefore(moment()) && !newValue.done) {
                        element.css("background-color", "red");
                    } else {
                        element.css("background-color", "");
                    }
                }, true);

            }
        }
    }

})();