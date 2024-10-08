"use strict";
function GE(user) {
    for (let i = 0; i < user.length; i++) {
        console.log("Good Evening " + user[i].name);
    }
}
GE([{
        name: "kush"
    }, {
        name: "kushagra"
    }, {
        name: "prashant"
    }, {
        name: "gargi"
    }]);
