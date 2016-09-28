(function() {
    angular.module("feature")
        .component("paging", {
            templateUrl: "./feature/components/paging/paging.html",
            bindings: {
                collection: "<",
                pageSizes: "<",
                changePageSize: "&onChangeSize",
                pageSize: "<",
                nextPage: "&onNextPage",
                prevPage: "&onPrevPage",
                changePage: "&onChangePage"
            },
            controller: "Paging"
        });

})();