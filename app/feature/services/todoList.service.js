(function () {
    "use strict";

    angular.module("feature")
        .factory("todoListService", todoListService);

    todoListService.$inject = ["$http", "$q"];
    function todoListService($http, $q) {

        return {
            getTodoItems
        };

        function getTodoItems() {
            return $q((resolve, reject) => {
                $http
                    .get("todo.json")
                    .then(response => {
                        let result = response.data.map(function (item) {
                            item.deadline = moment(item.deadline, "MM-DD-YYYY");
                            return item;
                        });

                        resolve(result);
                    })
                    .catch((reason) => reject(reason));
            });
        }
    }

})();