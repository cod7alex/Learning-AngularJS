(function() {
    "use strict";

    angular
        .module("common", [])
        .run(runModule);

    function runModule($http, model) {
        $http
            .get("todo.json")
            .then(response => model.items = response.data.map(function (item) {
                item.deadline = moment(item.deadline, "MM-DD-YYYY");
                return item;
            }));
    }
    runModule.$inject = ["$http", "model"];

})();