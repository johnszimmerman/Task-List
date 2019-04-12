var tasklist = {
    tasks: [],
    storage: getTaskStorage("tasks_li_1"),
    displayDiv: null,
    deleteClickHandler: null,
    load: function () {
        "use strict";
        if (this.tasks.length === 0) {
            tasklist.tasks = this.storage.get();
        }
    },
    save: function () {
        "use strict";
        this.storage.set(this.tasks);
    },
    sort: function () {
        "use strict";
        this.tasks.sort();
    },
    add: function (task) {
        "use strict";
        this.tasks.push(task.toString());
    },
    deletetask: function (i) {
        "use strict";
        this.tasks.splice(i, 1);
    },
    clear: function () {
        "use strict";
        this.tasks.length = 0;
        this.storage.clear();
        this.displayDiv.innerHTML = "";
    },
    display: function () {
        "use strict";
        var html = "", i, links;
        this.sort();
        
        //CREATE AND LOAD HTML STRING FROM SORTED ARRAY
        for (i in this.tasks) {
            html = html.concat("<p>");
            html = html.concat("<a href='#' title='", i, "'>Delete</a>");
            html = html.concat(this.tasks[i]);
            html = html.concat("</p>");
            this.displayDiv.innerHTML = html;
        }
        
        //GET LINKS, LOOP AND ADD ONCLICK EVENT HANDLER
        links = this.displayDiv.getElementsByTagName("a");
        for (i = 0; i < links.length; i += 1) {
            if (links[i].innerHTML === "Delete") {
                links[i].onclick = this.deleteClickHandler;
            } else {
                links[i].onclick = this.editClickHandler;
            }
        }
    }
};