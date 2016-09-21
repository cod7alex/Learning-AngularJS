(function() {
    "use strict";

    angular.module("feature")
        .controller("Todo", Todo);

    Todo.$inject = ["$scope", "todoService", "model"];
    function Todo($scope, todoService, model) {
        let $ctrl = this;

        Object.assign($ctrl, todoService);

        $ctrl.todo = model;

        $ctrl.showCompleted = true;

        $ctrl.sortType = 'deadline';
        $ctrl.sortReverse = false;

        $ctrl.filterItems = function(value) {
            if(!$ctrl.filterText) {
                return true;
            }
            let lowerCaseFilterText = $ctrl.filterText.toLowerCase();

            return !!(value.action.toLowerCase().includes(lowerCaseFilterText) || value.responsible.toLowerCase().includes(lowerCaseFilterText));
        };

        $ctrl.startItem = 0;
        $ctrl.pageSize = 5;
        $ctrl.pageSizes = [{name: "5 items", count: 5}, {name: "10 items", count: 10}, {name: "15 items", count: 15}];

        $ctrl.nextPage = function () {
            if($ctrl.startItem + $ctrl.pageSize < $ctrl.todo.items.length) {
                $ctrl.startItem += $ctrl.pageSize;
            }
        };

        $ctrl.prevPage = function () {
            if($ctrl.startItem - $ctrl.pageSize >= 0) {
                $ctrl.startItem -= $ctrl.pageSize;
            }
        };

        $ctrl.changePage = function(index) {
            $ctrl.startItem = index * $ctrl.pageSize;
        };

        $ctrl.pages = [];

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