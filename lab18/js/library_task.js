/*eslint-env browser*/

var Task = function (task) {
    "use strict";
    this.text = task;
};
Task.prototype.isValid = function () {
    "use strict";
    if (this.text === "") {
        return false;
    } else {
        return true;
    }
};
Task.prototype.toString = function () {
    "use strict";
    var first = this.text.substring(0, 1);
    return first.toUpperCase() + this.text.substring(1);
};