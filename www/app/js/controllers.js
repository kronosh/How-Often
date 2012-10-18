'use strict';

/* Controllers */

function HowOftenCtrl($scope) {
    $scope.newTaskDescription = '';
    $scope.tasks = new Array();

    $scope.addTask = function() {
         $scope.tasks.push(new Task($scope.newTaskDescription));
    };

    $scope.markTask = function(task) {
        task.Occurrences.push(new Date())
    };
}