 import {makeObservable,observable, action} from 'mobx'
 class TodoStore{
    todos=[];
    constructor(){
        makeObservable(this, {
            todos: observable,
            addTodo: action,
            removeTodo:action
        })
    }
    addTodo(task){
        this.todos.push({
            text:task,
            id:Math.random()*10000
        })
    }

    removeTodo(id){
        const newTodos = this.todos.filter((item)=>item.id!=id);
        this.todos=newTodos
    }


}
const todoStore = new TodoStore();

export default todoStore;