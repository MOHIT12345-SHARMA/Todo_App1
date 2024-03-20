const store = {
    todos: [
        {
            id : '1',
            title : 'Complete Task A',
            completed : false
        },
        {
            id : '2',
            title : 'Read Book',
            completed : true
        },
        {
            id : '3',
            title : 'Write Code',
            completed : true
        }
    ]
}
const storeHandler = {
    get(target , property){
        console.log('Oh you are trying to get ' , property);
        return target[property];
    },
    set(target , property , value){
        target[property] = value;
        if(property == 'todos'){
            window.dispatchEvent(new Event('todoschange'));
        }
        localStorage.setItem('store' , json.stringfy(store));
        return true;
    }
}
const storeProxy = new Proxy(store , storeHandler);
function addTodo(newTodo){
    storeProxy.todos = [...storeProxy.todos , newTodo];
}
function removeTodo(id){
    storeProxy.todos = storeProxy.todos.filter(todo => todo.id !== id);
}
function toogleCompleted(id , completed){
    storeProxy.todos = storeProxy.todos.map(todo => {
        if(todo.id == id){
            return {...todo , completed : completed};
        }
        else{
            return todo;
        }
    })
}
export {addTodo , removeTodo , toogleCompleted} ;
export default storeProxy;