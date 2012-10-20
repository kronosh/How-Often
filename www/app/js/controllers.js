'use strict';

/* Controllers */

function HowOftenCtrl($scope) {
    console.log('Started HowOftenCtrl');

    $scope.newTaskDescription = '';
    $scope.taskRepository = new TasksRepository();
    $scope.tasks = $scope.taskRepository.GetTasks();

    if (!$scope.tasks)
    {
        $scope.tasks = new Array();
    }

    $scope.addTask = function() {
        console.log("Add Task Started - " + $scope.newTaskDescription);

        $scope.tasks.push(new Task($scope.newTaskDescription));

        console.log("Tasks - " + $scope.tasks);

        $scope.taskRepository.SaveTasks($scope.tasks);
    };

    $scope.clearTasks = function() {
        $scope.tasks = new Array();
        $scope.tasksRepository.SaveTasks($scope.tasks);
    };

    $scope.markTask = function(task) {
        task.Occurrences.push(new Date())
        $scope.taskRepository.SaveTasks($scope.tasks);
    };
}