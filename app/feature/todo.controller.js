(function() {
    "use strict";

    angular.module("feature")
        .controller("Todo", Todo);

    Todo.$inject = ["$scope", "todoService"];
    function Todo($scope, todoService) {
        let $ctrl = this;

        Object.assign($ctrl, todoService);

        $ctrl.todo = $scope.$parent.$headerCtrl.todo;

        $ctrl.showCompleted = true;

        $ctrl.sortType = 'deadline';
        $ctrl.sortReverse = false;

        $ctrl.removeCompletedItems = function () {
            $ctrl.todo.items = todoService.removeCompleted($ctrl.todo.items);
        };

        $ctrl.setCurrentItem = function (item) {
            let newItem = {
                action: item.action,
                done: item.done,
                deadline: item.deadline.format("l"),
                responsible: item.responsible,
                hours: item.hours
            };

            $scope.$root.$broadcast("currentItemChanged", {
                editItem: item,
                newItem: newItem
            })
        };

        $ctrl.changeSorting = function (fieldName) {
            $ctrl.sortType = fieldName;
            $ctrl.sortReverse = !$ctrl.sortReverse;
        };

        $ctrl.isSortedAscending = function (fieldName) {
            return $ctrl.sortType == fieldName && $ctrl.sortReverse == false;
        };

        $ctrl.isSortedDescending = function (fieldName) {
            return $ctrl.sortType == fieldName && $ctrl.sortReverse == true;
        };
        
        $ctrl.makeAllDone = function () {
            $ctrl.todo.items.forEach((item) => {
                item.done = $ctrl.allDone ? true : false;
            });
        }
    }

})();