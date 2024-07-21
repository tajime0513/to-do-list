import { temporaryStorageTodo } from './createTodo.js';
import { restInputFields } from './resetInputFields.js';

const formEl = document.querySelector('form');

const submitTodo = () => {
  formEl.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData();

    const tempTodo = temporaryStorageTodo();
    for (let key in tempTodo) {
      const undefiendKey = key === undefined;
      const undefiendValue = tempTodo[key] === undefined;
      const notUndefiendData = !undefiendKey && !undefiendValue;
      if (notUndefiendData) {
        formData.append(key, tempTodo[key]);
      }
    }
    restInputFields();
  });
};

export { submitTodo };
