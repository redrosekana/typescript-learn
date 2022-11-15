"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* type assertion
let a = "Hello TypeScript";
function specific(value) {
    return value.toUpperCase();
}
console.log(specific(a));
console.log(specific(a));
