//* generic class && default type class
class Stack<T=number>{
    private arrayStack:T[] = []

    public pushStack(value:T){
        this.arrayStack.push(value)
    }
}

const stack1 = new Stack<string>()
stack1.pushStack("kana")
stack1.pushStack("tuta")


