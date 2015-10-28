angular.module('ProjectService', []).
    service('ProjectService', function() {
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