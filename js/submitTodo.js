import {temporaryStorageTodo} from './createTodo.js'

const formEl = document.querySelector('form');

 const submitTodo = (event) => {
    event.preventDefault();
  console.log('sumbitTodo')

}

export {submitTodo}