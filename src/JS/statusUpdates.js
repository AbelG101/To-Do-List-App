import { getTasksList } from './taskOperations.js';

const updateTaskStatus = (index) => {
  const tasksList = getTasksList();
  if (tasksList[index].completed === true) {
    tasksList[index].completed = false;
  } else {
    tasksList[index].completed = true;
  }
  localStorage.setItem('tasks: ', JSON.stringify(tasksList));
};

export default updateTaskStatus;