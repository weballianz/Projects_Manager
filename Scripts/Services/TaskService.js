angular.module('TaskService', []).
    service('TaskService', function () {
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