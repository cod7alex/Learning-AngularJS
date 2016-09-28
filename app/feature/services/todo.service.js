(function () {
    "use strict";

    angular.module("feature")
        .factory("todoService", todoService);

    function todoService() {
        return {
            incompleteCount,
            warningLevel,
            addNewItem,
            deleteItem,
            isItemValid,
            isCompletedItemPresent,
            removeCompleted,
            editItem
        };

        function incompleteCount(items) {
            let count = 0;

            angular.forEach(items, (item) => {
                if(!item.done) count++;
            });

            return count;
        }

        function warningLevel(items) {
            return incompleteCount(items) < 3 ? "label-success" : "label-warning";
        }

        function addNewItem(items, newItem) {
            if(newItem && isItemValid(newItem)) {
                items.push({
                    action: newItem.action,
                    done: false,
                    deadline: moment(newItem.deadline, "MM-DD-YYYY"),
                    responsible: newItem.responsible,
                    hours: newItem.hours
                });

                newItem.action = "";
                newItem.deadline = "";
                newItem.responsible = "";
                newItem.hours = "";
            }
        }

        function deleteItem(items, item) {
            var index = items.indexOf(item);
            if(index != -1)
                items.splice(index, 1);
        }

        function isItemValid(item) {
            return item && item.action && item.deadline && moment(item.deadline, "MM-DD-YYYY").isValid() && item.responsible && item.hours && !isNaN(item.hours);
        }

        function isCompletedItemPresent(items) {
            return items && items.length > 0 && items.filter((element) => element.done == true).length > 0;
        }

        function removeCompleted(items) {
            return items.filter((item) => item.done != true);
        }

        function editItem(items, item, updatedItem) {
            deleteItem(items, item);
            addNewItem(items, updatedItem);

            updatedItem.action = "";
            updatedItem.deadline = "";
            updatedItem.responsible = "";
            updatedItem.hours = "";
        }
    }
})();