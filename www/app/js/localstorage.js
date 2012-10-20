'use strict';

/* LocalStorage */

function LocalStorage() {

    var $this = this;
    this.storageKey = "kronosh.howOften.data";

    this.Save = function(value)
    {
        console.log('Save - local storage');

        if (!window.localStorage)
        {
            console.log('no local storage');
            return;
        }

        var jsonString = JSON.stringify(value);

        console.log(jsonString);

        window.localStorage[$this.storageKey] = jsonString;
    };

    this.Load = function()
    {
        console.log('Load - local storage');

        if (!window.localStorage)
        {
            console.log('no local storage');
            return;
        }

        console.log($this.storageKey);

        var jsonData = window.localStorage[$this.storageKey];

        console.log(jsonData);

        if (!jsonData)
        {
            return null;
        }

        return JSON.parse(jsonData);
    };
}

