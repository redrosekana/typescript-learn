"use strict";
const test2 = {
    displayScreen1: function () {
        return 2 + 2;
    },
    displayScreen2() {
        return "3" + "3";
    }
};
console.log(test2.displayScreen1());
console.log(test2.displayScreen2());
