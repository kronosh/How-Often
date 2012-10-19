'use strict';

/* LocalStorage */

function LocalStorage() {

    var $this = this;
    this.storageKey = "kronosh.howOften.data";

    this.Save = function(value)
    {
        if (!window.localStorage)
        {
            return;
        }

        window.localStorage[$this.storageKey] = JSON.stringify(value);
    };

    this.Load = function()
    {
        if (!window.localStorage)
        {
            return;
        }

        var jsonData = window.localStorage[$this.storageKey];

        if (!jsonData)
        {
            return null;
        }

        return JSON.parse(jsonData);
    };
}

