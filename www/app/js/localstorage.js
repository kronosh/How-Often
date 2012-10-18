'use strict';

/* LocalStorage */

function LocalStorage() {

    this.storageKey = "kronosh.howOften.data";

    this.Save = function(value)
    {
        if (!window.localStorage)
        {
            return;
        }

        window.localStorage.setItem(this.storageKey, JSON.stringify(value));
    };

    this.Load = function()
    {
        if (!window.localStorage)
        {
            return;
        }

        var jsonData = window.localStorage.getItem(this.storageKey);

        return JSON.parse(jsonData);
    };
}

