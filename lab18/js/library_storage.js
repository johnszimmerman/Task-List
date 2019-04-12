/*eslint-env browser*/
var storagePrototype = {
    get: function () {
        "use strict";
        var str = localStorage.getItem(this.key) || "";
        return (str === "") ? [] : str.split("|");
    },
    set: function (arr) {
        "use strict";
        if (Array.isArray(arr)) {
            var str = arr.join("|");
            localStorage.setItem(this.key, str);
        }
    },
    clear: function () {
        "use strict";
        localStorage.setItem(this.key, "");
    }
};
var getTaskStorage = function (key) {
    "use strict";
    var storage = Object.create(storagePrototype);
    storage.key = key;
    return storage;
};