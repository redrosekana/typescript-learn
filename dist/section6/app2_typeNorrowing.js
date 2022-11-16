"use strict";
//* instanceof Norrowing
class Car {
}
class Van {
}
function compareClass(op) {
    if (op instanceof Car) {
        console.log("Class Car");
    }
    else if (op instanceof Van) {
        console.log("Class Van");
    }
}
function calculateShape(shape) {
    if (shape.type === "rectangle") {
        return shape.height * shape.width;
    }
    else if (shape.type === "triangle") {
        return 0.5 * shape.base * shape.height;
    }
    else {
        throw new Error("กำหนดข้อมูลไม่ถูกต้อง");
    }
}
