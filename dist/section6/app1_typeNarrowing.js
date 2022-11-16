"use strict";
//* typeof guards
function trancate(value, condition) {
    if (typeof value === "number") {
        return value.toString().slice(0, condition);
    }
    return value.slice(0, condition);
}
//* Equality Narrowing
function compareValue(num1, num2) {
    if (num1 === num2) {
        console.log("num1 เท่ากับ num2");
    }
    else {
        console.log("num1 ไม่เท่ากับ num2");
    }
}
