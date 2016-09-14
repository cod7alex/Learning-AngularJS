(function() {
    "use strict";

    angular.module("feature")
        .controller("Form", Form);

    Form.$inject = ["$scope", "todoService"];
    function Form($scope, todoService) {
        let $ctrl = this;

        Object.assign($ctrl, todoService);

        $ctrl.todo = $scope.$parent.$headerCtrl.todo;
        
        $scope.$on("currentItemChanged", function (event, args) {
            $ctrl.editItem = args.editItem;
            $ctrl.newItem = args.newItem;

        });

        $ctrl.saveChanges = function () {
            if($ctrl.editItem) {
                todoService.editItem($ctrl.todo.items, $ctrl.editItem, $ctrl.newItem);
                $ctrl.editItem = null;
            } else {
                todoService.addNewItem($ctrl.todo.items, $ctrl.newItem);
                $ctrl.editItem = null;
            }
            $("#myModal").modal('hide');
        }
    }

})();