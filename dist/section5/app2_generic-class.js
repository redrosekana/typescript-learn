"use strict";
//* generic class && default type class
class Stack {
    constructor() {
        this.arrayStack = [];
    }
    pushStack(value) {
        this.arrayStack.push(value);
    }
}
const stack1 = new Stack();
stack1.pushStack("kana");
stack1.pushStack("tuta");
