'use strict';

/* Repositories */

/* Task */

function TasksRepository() {

    this.DataAccessLayer = new LocalStorage();

    this.SaveTasks = function(tasks)
    {
        this.DataAccessLayer.Save(tasks);
    };

    this.GetTasks = function()
    {
        return this.DataAccessLayer.Load();
    };
}

