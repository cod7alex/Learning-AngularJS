(function() {
    "use strict";

    angular.module("feature")
        .filter("checkedItems", checkedItems);

    function checkedItems() {
        return function(items, showCompleted) {
            let resultsArr = [];
            if(angular.isArray(items)) {
                angular.forEach(items, (item) => {
                    if(!item.done || showCompleted) {
                        resultsArr.push(item);
                    }
                });

                return resultsArr;
            } else {
                return items;
            }
        }
    }

})();