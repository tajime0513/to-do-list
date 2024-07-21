import { To_Do_Array } from './constansts.js';

let todo = {
  task: '',
  priority: '',
  startDate: '',
  endDate: '',
};

const priorityEls = document.querySelectorAll('input[name="priority"]');

function getQuerySelector() {
  To_Do_Array.map((targetEl) => {
    if (targetEl !== 'priority') {
      const inputElement = document.querySelector(`input[name="${targetEl}"]`);
      return inputEventHandler(inputElement);
    }
  });
}

function changeHandler() {
  priorityEls.forEach((radio) => {
    radio.addEventListener('change', (event) => {
      const { name, value } = event.target;
      todo = { ...todo, [name]: value };
      return todo;
    });
  });
}

function inputEventHandler(targetEl) {
  if (targetEl) {
    console.log(targetEl);
    targetEl.addEventListener('input', (event) => {
      const { name, value } = event.target;
      todo = { ...todo, [name]: value };
      return todo;
    });
    changeHandler();
  }
}

getQuerySelector();
