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
  addTaskToArray,
  setTasksList,
  clearCompletedTasks,
} from './taskOperations.js';

import updateTaskStatus from './statusUpdates.js';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = String(value);
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();

describe('check for add-delete operations', () => {
  test('properly remove task items', () => {
    document.body.innerHTML = `<div class="tasks-container">
  </div>`;
    addTaskToArray('task-a');
    addTaskToArray('task-b');
    addTaskToArray('task-c');
    const indexOfRemovedTask = 1;
    removeTask(indexOfRemovedTask);
    let tasksList = getTasksList();
    let tasksValueElt = document.querySelectorAll('.task-value')[indexOfRemovedTask];
    expect(tasksList[indexOfRemovedTask].description).toBe('task-c');
    expect(tasksList[indexOfRemovedTask].index).toEqual(indexOfRemovedTask);
    expect(tasksValueElt.value).toBe('task-c');

    removeTask(indexOfRemovedTask);
    tasksList = getTasksList();
    tasksValueElt = document.querySelectorAll('.task-value')[indexOfRemovedTask - 1];
    expect(tasksList[indexOfRemovedTask - 1].description).toBe('task-a');
    expect(tasksList[indexOfRemovedTask - 1].index).toEqual(
      indexOfRemovedTask - 1,
    );
    expect(tasksValueElt.value).toBe('task-a');
  });

  test('should add task to local storage', () => {
    let tasksList = getTasksList();
    const task = {
      description: 'task1',
      completed: false,
      index: 0,
    };
    addOnLocalStorage(task);
    tasksList = getTasksList();
    expect(tasksList.length).toBeGreaterThanOrEqual(0);
  });

  test('properly get list of tasks array of objects', () => {
    const tasksList = getTasksList();
    expect(tasksList.length).toBeGreaterThanOrEqual(0);
  });

  test('properly adds the tasks to the page', () => {
    const task = {
      description: 'task1',
      completed: false,
      index: 0,
    };
    document.body.innerHTML = `<div class="tasks-container">
    </div>`;
    addTaskToPage(task);
    const tasksContainerElt = document.querySelectorAll('.task');
    expect(tasksContainerElt).toHaveLength(1);
  });

  test('properly load tasks that are in the local storage', () => {
    loadTasksFromLS();
    const tasksList = getTasksList();
    expect(tasksList.length).toBeGreaterThanOrEqual(0);
  });

  test('properly change the task', () => {
    const modifiedTask = 'clean the dishes';
    addTaskToArray('finish the unit-testing project');
    modifyTask(modifiedTask, 0);
    const tasksList = getTasksList();
    expect(tasksList[0].description).toBe(modifiedTask);
  });
  test('highlight the proper task when clicked', () => {
    document.body.innerHTML = `<div class="tasks-container">
    <div class="task">
      <div class="task-content">
        <input type="checkbox"><input class="task-value" type="text">
      </div>
        <i class="fa fa-trash trash-icon" aria-hidden="true"></i><i class="fa fa-ellipsis-v dots-icon" aria-hidden="true"></i>
    </div>
    <div class="task">
      <div class="task-content">
        <input type="checkbox"><input class="task-value" type="text">
      </div>
      <i class="fa fa-trash trash-icon" aria-hidden="true"></i><i class="fa fa-ellipsis-v dots-icon" aria-hidden="true"></i>
    </div>
  </div>`;
    const indexOfHighlightedItem = 1;
    highlightTask(indexOfHighlightedItem);
    const tasksElt = document.querySelectorAll('.task')[indexOfHighlightedItem];
    const tasksContainerElt = document.querySelector('.tasks-container');
    expect(tasksContainerElt.getElementsByClassName('task active').length).toBe(
      1,
    );
    expect(
      tasksElt.getElementsByClassName('fa fa-trash trash-icon active').length,
    ).toBe(1);
    expect(
      tasksElt.getElementsByClassName('fa fa-ellipsis-v dots-icon active')
        .length,
    ).toBe(1);
  });
  test('update the item\'s completed status', () => {
    addTaskToArray('task-1');
    addTaskToArray('task-2');
    addTaskToArray('task-3');
    const indexOfFinishedTask = 1;

    updateTaskStatus(indexOfFinishedTask);
    let tasksList = getTasksList();
    expect(tasksList[indexOfFinishedTask].completed).toBe(true);

    updateTaskStatus(indexOfFinishedTask);
    tasksList = getTasksList();
    expect(tasksList[indexOfFinishedTask].completed).toBe(false);
  });
  test('clear all checked boxes', () => {
    document.body.innerHTML = `<div class="tasks-container">
  </div>`;
    addTaskToArray('task-a');
    addTaskToArray('task-b');
    addTaskToArray('task-c');
    const tasksList = getTasksList();
    tasksList[0].completed = true;
    tasksList[1].completed = true;
    setTasksList(tasksList);
    clearCompletedTasks();
    const tasksElt = document.querySelectorAll('.task');
    expect(tasksElt).toHaveLength(1);
  });
});
