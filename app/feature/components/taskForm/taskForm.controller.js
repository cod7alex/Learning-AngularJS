(function() {
    "use strict";

    angular.module("feature")
        .controller("TaskForm", TaskForm);

    TaskForm.$inject = ["$scope", "todoService"];
    function TaskForm($scope, todoService) {
        let $ctrl = this;

        Object.assign($ctrl, todoService);

        $scope.$on("currentItemChanged", function (event, args) {
            $ctrl.editItem = args.editItem;
            $ctrl.newItem = args.newItem;

        });

        $ctrl.saveChanges = function () {
            if ($ctrl.editItem) {
                todoService.editItem($ctrl.collection, $ctrl.editItem, $ctrl.newItem);
                $ctrl.editItem = null;
            } else {
                todoService.addNewItem($ctrl.collection, $ctrl.newItem);
                $ctrl.editItem = null;
            }
            $("#myModal").modal('hide');
        }
    }

})();