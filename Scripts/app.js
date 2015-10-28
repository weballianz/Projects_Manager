(function () {
    var app = angular.module('ProjectManager', ['ngRoute', 'ProjectService', 'TaskService'])

    app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/:id', {
            templateUrl: 'tasks.html',
            controller: 'ProjectManagerController'
        });
    } ]);

    app.controller('ProjectManagerController', function ($scope, $routeParams, ProjectService, TaskService) {
        $scope.id = $routeParams.id;
        $scope.projects = ProjectService.getProjectsList();
        $scope.tasks = TaskService.getTasksList();

        $scope.SaveProject = function () {
            ProjectService.addProject($scope.newProject);
            $scope.newProject = {};
        }

        $scope.DeleteProject = function (id) {
            ProjectService.deleteProject(id);

            if ($scope.newProject.id == id) {
               $scope.newProject = {};
            }
        }

        $scope.SaveTask = function (id) {
            TaskService.addTask($scope.newTask);

            for (i in this.projects){
                if (this.projects[i] != null && this.projects[i].id == id) {
                    this.projects[i].tasks.push($scope.newTask);
                }
            }
            $scope.newTask = {};
        }

        $scope.DeleteTask = function (id) {
            TaskService.deleteTask(id);
            if ($scope.newTask.id == id) {
                $scope.newTask = {};
            }
        }

        $scope.log = function(){
            console.clear();
            console.log("------")
            console.log($scope.projects)
            console.log("------")
        }

    });
})();