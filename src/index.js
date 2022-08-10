import './index.css';
import {
   addTaskToArray, highlightTask, loadTasksFromLS, modifyTask, removeTask 
} from './JS/taskOperations.js';

const onPageLoad = () => {
  loadTasksFromLS();
};
window.onload = onPageLoad();

const addTaskInput = document.querySelector('.task-adder-input');
addTaskInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    addTaskToArray(addTaskInput.value);
  }
});
document.addEventListener('click', (e) => {
  if (!(e.target.matches('.task-value') || e.target.matches('.trash-icon'))) {
    return;
  }
  if (e.target.matches('.task-value')) {
    const tasks = document.querySelectorAll('.task-value');
    tasks.forEach((task, index) => {
      if (e.target === task) {
        highlightTask(index);
      }
    });
  } else {
    const deleteBtn = document.querySelectorAll('.trash-icon');
    deleteBtn.forEach((btn, index) => {
      if (e.target === btn) {
        removeTask(index);
      }
    });
  }
});
document.addEventListener('change', (e) => {
  if (!e.target.matches('.task-value')) {
    return;
  }
  const tasks = document.querySelectorAll('.task-value');
  tasks.forEach((task, index) => {
    if (e.target === task) {
      modifyTask(task.value, index);
    }
  });
});
