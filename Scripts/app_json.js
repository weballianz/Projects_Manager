var app = angular.module('ProjectManager', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
        when('#:id', {
            templateUrl: 'taskList.html', 
            controller: 'managerController'
    }).otherwise({
        redirectTo: '/'
    });
}]);

app.controller('managerController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {
    
    $scope.tmpProjectName = $routeParams.id;
    $scope.Projects_List = [];
    
    function Project() {
        var name = '';
        var taskList = [];
        
        function Task(name, isDone){
            var name = name;
            var isDone = isDone;
            
            this.getTaskName = function () {return name;};
            this.getTaskStatus = function () {return isDone};
            this.setTaskName = function (taskName) { name = taskName};
            this.setTaskStatus = function (status) { isDone = status};
        }
        
        this.getName = function () { return name};
        this.setName = function (projectName) { name = projectName};
        
        this.createTask = function (taskName) {
            var task = new Task(taskName, false);
            taskList.push(task);
        };
        this.deleteTask = function (taskID) {
            taskList[taskID].setTaskStatus = true;
        };
    };

    $scope.addProject = function () {
        var name = this.tmpProjectName;
        var project = new Project();
        project.setName(name);
        
        this.Projects_List.push(project);
    };
    
    var RemoveItemByName = function (arr, val) {
        var i = arr.length;
        while (i--) {
            var obj = arr[i];
            if (obj.GetName() === val) arr.splice(i, 1)
        };
    }
    
    $scope.deleteProject = function (ProjectName) {
        RemoveItemByName(this.Projects_List, ProjectName);
    };
    

}]);