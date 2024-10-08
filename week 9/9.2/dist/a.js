"use strict";
function isLegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
function greet(user) {
    console.log("Hello " + user.name + ", your age is " + user.age);
}
let a = isLegal({
    age: 20,
    // name : "kushagra"
});
greet({
    age: 20,
    name: "Kushagra Garg"
});
console.log(a);
