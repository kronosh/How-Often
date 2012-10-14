'use strict';

/* Models */

/* Model structure

 Tasks []
    Task
        string Description
        datetime Occurrences []

*/

/* Task */

function Task(description) {
    this.Description = description;
    this.Occurrences = new Array();
}

