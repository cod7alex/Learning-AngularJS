(function() {
    angular.module("feature")
        .directive("paging", paging);

    function paging() {
        return {
            templateUrl: "./feature/directives/pages.html",
            link: function(scope, element, attributes) {
                scope.$watchCollection(attributes["collection"], function (newValue) {
                    let res = [];

                    let pageSize = attributes["size"];
                    console.log(pageSize);
                    if(newValue) {
                        let pagesCount = Math.ceil(newValue.length / pageSize);

                        for (var i = 0; i < pagesCount; i++) {
                            res.push({
                                number: i+1,
                                index: i
                            });
                        }
                    }
                    console.log(scope);
                    scope.pages = res;
                });
            }
        }
    }

})();