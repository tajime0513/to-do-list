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
      return inputEventHandler(inputElement);
    }
  });
  changeHandler();
};

const changeHandler = () => {
  priorityEls.forEach((radio) => {
    radio.addEventListener('change', (event) => {
      const { name, value } = event.target;
      todo = { ...todo, [name]: value };
      return todo;
    });
  });
};

const inputEventHandler = (targetEl) => {
  if (targetEl) {
    console.log(targetEl);
    targetEl.addEventListener('input', (event) => {
      const { name, value } = event.target;
      temporaryStorageTodo(name, value);
    });
  }
};

export const temporaryStorageTodo = (name, value) => {
  todo = { ...todo, [name]: value };
  return todo;
};

getQuerySelector();

console.log(todo);
