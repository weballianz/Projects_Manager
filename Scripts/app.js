var app = angular.module('ProjectManager', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/:id', {
        templateUrl: 'tasks.html',
        controller: 'ProjectManagerController'
    });
} ]);

app.service('ProjectService', function () {
    var uid = 1;
    var Projects = [{
            id : 0,
            'name' : 'null project',
            'tasks' : new Array()
        }]
    
    this.addProject = function (project) {
        if (project.id == null) {
            project.id = uid++;
            project.tasks = new Array();
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
            if (i == id) {
                Projects[i] = null;
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
    function setTaskList(id, tasklist){
        for (i in Projects) {
            if (Projects[i].id == id) {
                Projects[i].tasks = taskslist;
            }
        }
    }
    
    this.insertTask = function (id, task) {
       for (i in Projects) {
            if (Projects[i].id == id) {
                Projects[i].tasks.push(task);
            }
        } 
    }
});

app.service('TaskService', function () {
    var uid = 1;
    var Tasks = [{
            id : 1,
            'name' : 'null task',
            'isDone' : 'false'
        }]
    
    this.addTask = function (task) {
      if (task.id == null) {
          task.id = uid++;
          task.isDone = 'false';
          Tasks.push(task);
      } else {
          for (i in Tasks) {
              if (Tasks[i].id == task.id) {
                  Tasks[i] = task;
              }
          }
      }
    }
    
    this.getTask = function (id) {
        for (i in Tasks) {
            if (Tasks[i].id == id) {
                return Tasks[i];
            }
        }
    }
    
    this.deleteTask = function (id) {
        for (i in Tasks) {
            if (Tasks[i].id == id) {
                Tasks.splice(i, 1);
            }
        }
    }
    
    this.getTasksList = function () {
        return Tasks;
    }
    
    this.checkStatus = function (id) {
        for (i in Tasks) {
            if (Tasks[i].id == id) {
                return tasks[i].isDone;
            }
        }
    }
    
    this.setStatus = function (id, isDone) {
        for (i in Tasks) {
            if (Tasks[i].id == id) {
                Tasks[i].isDone = isDone;
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