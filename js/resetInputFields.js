import { To_Do_Array } from './constansts.js';

const restInputFields = () => {
  To_Do_Array.map((targetEl) => {
    if (targetEl) {
      const inputElement = document.querySelector(`input[name="${targetEl}"]`);
      inputElement.checked = true;
      if (targetEl.type !=='radio') {
        inputElement.value = '';
      }
    }
  });
};

export { restInputFields };
