(function() {
    "use strict";

    angular.module("feature")
        .controller("Todo", Todo);

    function Todo(model, todoService) {
        let $ctrl = this;
        $ctrl.todo = model;

        Object.assign($ctrl, todoService);

        $ctrl.showCompleted = true;

        $ctrl.sortType = 'deadline';
        $ctrl.sortReverse = false;

        $ctrl.removeCompletedItems = function () {
            $ctrl.todo.items = todoService.removeCompleted($ctrl.todo.items);
        };

        $ctrl.setCurrentItem = function (item) {
            $ctrl.editItem = item;

            $ctrl.newItem = {
                action: item.action,
                done: item.done,
                deadline: item.deadline,
                responsible: item.responsible,
                hours: item.hours
            };
        };

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
    Todo.$inject = ["model", "todoService"];

})();