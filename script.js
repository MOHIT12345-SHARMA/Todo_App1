import render from './render.js'
import {addTodo , removeTodo , toogleCompleted} from './store.js';


window.addEventListener('todoschange' , ()=>{
    render();
})
// try to get store from localStorage 
const storeFromLocalStorage = JSON.parse(localStorage.getItem('store'));
if(storeFromLocalStorage?.todos.length > 0){
    store.todos = storeFromLocalStorage.todos;
}
else{
    render();
}
// todos: [] --> reference types 
render();
// form get
const form = document.querySelector('#form');
const todoTitleInput = document.querySelector("#todo-title-input");
form.addEventListener('submit' , (event)=>{
    event.preventDefault();
    const todoTitle = todoTitleInput.value ;
    const newTodo = {id : crypto.randomUUID() , title : todoTitle , completed: false};
    addTodo(newTodo); 
})
const todos = document.querySelector('.todos'); // event delegation concept
todos.addEventListener('click' , (event) => {
    if(event.target.classList.contains('delete-todo-button')){
        const id = event.target.closest('.todo').dataset.id;
        removeTodo(id);
    }   
})
todos.addEventListener('change' , event => {
    if(event.target.classList.contains('todo-checkbox')){
        const id = event.target.closest('.todo').dataset.id;
        const completed = event.target.checked;
        toogleCompleted(id , completed);
    }
})