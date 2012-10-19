'use strict';

/* Controllers */

function HowOftenCtrl($scope, $log) {
    $log.warn('Started controller');

    $scope.newTaskDescription = '';
    $scope.taskRepository = new TasksRepository();
    //$scope.tasks = $scope.taskRepository.GetTasks();
    $scope.tasks = new Array();

    $log.warn('Directly saving to local storage');

    window.localStorage['test'] = 'james';
    $log.warn(window.localStorage['test']);

    $log.warn('Using DAL to save to local storage')

    $scope.DataAccessLayer = new LocalStorage();
    $scope.DataAccessLayer.Save("test")
    $log.warn($scope.DataAccessLayer.Load())

    $log.warn('end of tests');

    $scope.addTask = function() {
        $log.warn('Started addTask');

        $scope.tasks.push(new Task($scope.newTaskDescription));
        $scope.taskRepository.SaveTasks($scope.tasks);
    };

    $scope.clearTasks = function() {
        $log.warn('Started clearTasks');

        $scope.tasks = new Array();
          //$scope.tasksRepository.SaveTasks($scope.tasks);
    };

    $scope.markTask = function(task) {
        $log.warn('Started markTask');

        task.Occurrences.push(new Date())
        //$scope.taskRepository.SaveTasks($scope.tasks);
    };
}