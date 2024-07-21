import { temporaryStorageTodo } from './createTodo.js';
import { restInputFields } from './resetInputFields.js';

const formEl = document.querySelector('form');

const submitTodo = () => {
  formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData();
    const tempTodo = temporaryStorageTodo();
    for (let key in tempTodo) {
      formData.append(key, tempTodo[key]);
    }
    restInputFields();
  });
};

export { submitTodo };
