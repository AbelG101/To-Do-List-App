/**
 * @jest-environment jsdom
 */

 import {
  addTaskToPage,
  addOnLocalStorage,
  loadTasksFromLS,
  modifyTask,
  highlightTask,
  removeTask,
  getTasksList,
  setTasksList,
  clearCompletedTasks,
  addTaskToArray,
} from './taskOperations';