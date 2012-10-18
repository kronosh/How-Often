'use strict';

/* Controllers */

function HowOftenCtrl($scope) {
    $scope.newTaskDescription = '';
    $scope.taskRepository = new TasksRepository();
    $scope.tasks = $scope.taskRepository.GetTasks();

    $scope.addTask = function() {
         $scope.tasks.push(new Task($scope.newTaskDescription));
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