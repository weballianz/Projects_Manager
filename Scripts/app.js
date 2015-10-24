var app = angular.module('ProjectManager', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider.when('#p:id', {
        templateUrl: 'tasksList.html',
        controller: 'viewController'
    })
});

app.controller('viewController', ['$scope', '$routeParams', function ($scope, $routeParams) {
}]);

app.controller('managerController', ['$scope', '$log', function ($scope, $log) {
    

    $scope.tempName = '';
    $scope.tempID = '';
    $scope.tempTaskName = '';
    var pID_init = 1;
    var tID_init = 1;

    $scope.Projects_List = [];

    function Task() {
       var id = tID_init++;
        var name = '';
        var isDone = false;

        this.SetName = function (new_name) {
            name = new_name;
        };

        this.GetName = function () {
            return name;
        };

        this.GetID = function () {
            return id;
        };

        this.SetTaskStatus = function (val) {
            isDone = val;
        };

        this.GetTaskStatus = function () {
            return isDone;
        };
    };

    function Project() {
        var id = pID_init++;
        var name = '';
        var tasksList = ['task1', 'task2'];

        this.SetName = function (new_name) {
            name = new_name;
        };

        this.GetName = function () {
            return name;
        }

        this.GetID = function () {
            return id;
        };

        $scope.addTask = function (task) {
            $scope.task = new Task();
            this.task.SetName(this.tempTaskName);
            this.TasksList.push(this.task);
        };

        $scope.removeTask = function () {
            RemoveItemByName(this.TasksList, this.tempTaskName);
        }

        $scope.getTaskList = function () {
            return tasksList;
        };


    }
    

    $scope.addProject = function () {
        $scope.project = new Project();
        this.project.SetName(this.tempName);
        this.Projects_List.push(this.project);
    };

    var RemoveItemByName = function (arr, val) {
        var i = arr.length;
        while (i--) {
            var obj = arr[i];
            if (obj.GetName() === val) arr.splice(i, 1)
        };
    }

    $scope.removeProjectByName = function() {
        RemoveItemByName(this.Projects_List, this.tempName)
    };


}]);