(function() {
    angular.module("feature")
        .controller("Paging", Paging);

    function Paging() {
        let $ctrl = this;

        $ctrl.collectionLength = 0;
        $ctrl.pages = [];
        $ctrl.currentPageSize = $ctrl.pageSize;

        $ctrl.$doCheck = function () {
            if($ctrl.collection && $ctrl.collection.length != $ctrl.collectionLength) {
                $ctrl.collectionLength = $ctrl.collection.length;
                $ctrl.pages = getPages();
            }

            if($ctrl.currentPageSize != $ctrl.pageSize) {
                $ctrl.currentPageSize = $ctrl.pageSize;
                $ctrl.pages = getPages();
            }
        };

        function getPages() {
            let pages= [];
            let pagesCount = Math.ceil($ctrl.collectionLength / $ctrl.pageSize);

            for (var i = 0; i < pagesCount; i++) {
                pages.push({
                    number: i + 1,
                    index: i
                });
            }

            return pages;
        }
    }

})();