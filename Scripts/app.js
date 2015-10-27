var app = angular.module('ProjectManager', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/:id', {
            templateUrl: 'tasks.html',
            controller: 'ProjectManagerController'
        });
    }
]);

app.service('ProjectService', function () {
    var uid = 1;
    var Projects = [{
        id : 0,
        'name': null,
        'tasks' : [{}],
    }];
    
    this.addProject = function (project) {
      if (project.id == null) {
          project.id = uid++;
          Projects.push(project);
      } else {
          for (i in Projects) {
              if (Projects[i].id == project.id) {
                  Projects[i] = project;
              }
          }
      }
    }
    
    this.getProject = function (id) {
        for (i in Projects) {
            if (Projects[i].id == id) {
                return Projects[i];
            }
        }
    }
    
    this.deleteProject = function (id) {
        for (i in Projects) {
            if (Projects[i].id == id) {
                Projects.splice(i, 1);
            }
        }
    }
    
    this.getProjectsList = function () {
        return Projects;
    }
    
    this.getTasksList = function (id) {
        for (i in Projects) {
            if (Projects[i].id == id) {
                return Projects[i].tasks;
            }
        }
    }
    
    this.setTasksList = function (id, taskslist) {
        for (i in Projects) {
            if (Projects[i].id == id) {
                Projects[i].tasks = taskslist;
            }
        }
    }
});

app.service('TaskService', function () {
    var uid = 1;
    var tasks = [{
        id : 0,
        'name': null,
        'isDone' : 'false'
    }];
    
    this.addTask = function (task) {
      if (task.id == null) {
          task.id = uid++;
          tasks.push(task);
      } else {
          for (i in tasks) {
              if (tasks[i].id == task.id) {
                  tasks[i] = task;
              }
          }
      }
    }
    
    this.getTask = function (id) {
        for (i in tasks) {
            if (tasks[i].id == id) {
                return tasks[i];
            }
        }
    }
    
    this.deleteTask = function (id) {
        for (i in tasks) {
            if (tasks[i].id == id) {
                tasks.splice(i, 1);
            }
        }
    }
    
    this.getTasksList = function () {
        return tasks;
    }
    
    this.checkStatus = function (id) {
        for (i in tasks) {
            if (tasks[i].id == id) {
                return tasks[i].isDone;
            }
        }
    }
    
    this.setStatus = function (id, isDone) {
        for (i in tasks) {
            if (tasks[i].id == id) {
                tasks[i].isDone = isDone;
            }
        }
    }
});

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
    
    $scope.SaveTask = function () {
        TaskService.addTask($scope.newTask);
        $scope.newTask;
    }
    
    $scope.DeleteTask = function (id) {
        TaskService.deleteTask(id);
        if ($scope.newTask.id == id) {
            $scope.newTask = {};
        }
    }
    
    $scope.AddTasksTotProject = function() {
        for (i in this.projects){
            
        }
    }
    
});