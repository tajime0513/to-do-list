import { To_Do_Array } from './constansts.js';

let todo = {
  task: '',
  priority: '',
  startDate: '',
  endDate: '',
};

const priorityEls = document.querySelectorAll('input[name="priority"]');

const getQuerySelector = () => {
  To_Do_Array.map((targetEl) => {
    if (targetEl !== 'priority') {
      const inputElement = document.querySelector(`input[name="${targetEl}"]`);
      if (inputElement) {
        inputEventHandler(inputElement);
      }
    }
  });
  changeHandler();
};

const inputEventHandler = (targetEl) => {
  if (targetEl) {
    targetEl.addEventListener('input', (event) => {
      const { name, value } = event.target;
      temporaryStorageTodo(name, value);
    });
  }
};

const temporaryStorageTodo = (name, value) => {
  todo = { ...todo, [name]: value };
  return todo;
};

const changeHandler = () => {
  priorityEls.forEach((radio) => {
    radio.addEventListener('change', (event) => {
      const { name, id } = event.target;
      temporaryStorageTodo(name, id);
    });
  });
};
export { getQuerySelector, temporaryStorageTodo, todo };
