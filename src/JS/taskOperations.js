let tasksList = [];

const getTasksList = () => tasksList;
const addOnLocalStorage = (task) => {
  tasksList = JSON.parse(localStorage.getItem('tasks: '));
  if (tasksList == null) tasksList = [];
  tasksList.push(task);
  localStorage.setItem('tasks: ', JSON.stringify(tasksList));
};

const addTaskToPage = (taskToBeDone) => {
  const tasksContainerElt = document.querySelector('.tasks-container');
  const taskDiv = document.createElement('div');
  const taskContentDiv = document.createElement('div');
  const taskValue = document.createElement('input');
  const checkboxElt = document.createElement('input');
  const trashIcon = document.createElement('i');
  const dotsIcon = document.createElement('i');
  taskDiv.setAttribute('class', 'task');
  taskContentDiv.setAttribute('class', 'task-content');
  taskValue.setAttribute('class', 'task-value');
  taskValue.setAttribute('type', 'text');
  checkboxElt.setAttribute('type', 'checkbox');
  trashIcon.setAttribute('class', 'fa fa-trash trash-icon');
  dotsIcon.setAttribute('class', 'fa fa-ellipsis-v dots-icon');
  checkboxElt.checked = taskToBeDone.completed;
  taskValue.value = taskToBeDone.description;
  taskContentDiv.appendChild(checkboxElt);
  taskContentDiv.appendChild(taskValue);
  taskDiv.appendChild(taskContentDiv);
  taskDiv.appendChild(trashIcon);
  taskDiv.appendChild(dotsIcon);
  tasksContainerElt.appendChild(taskDiv);
};

const loadTasksFromLS = () => {
  tasksList = JSON.parse(localStorage.getItem('tasks: '));
  if (tasksList !== null) {
    tasksList.forEach((taskToBeDone) => {
      addTaskToPage(taskToBeDone);
    });
  } else {
    tasksList = [];
  }
};

const addTaskToArray = (taskToBeDone) => {
  const task = {
    description: String,
    completed: false,
    index: Number,
  };
  task.description = taskToBeDone;
  task.index = tasksList.length;
  addOnLocalStorage(task);
  addTaskToPage(task);
};

const removeTask = (index) => {
  const tasksElt = document.querySelectorAll('.task');
  tasksList.splice(index, 1);
  tasksElt[index].remove();
  for (let i = tasksList.length - 1; i >= 0; i -= 1) {
    tasksList[i].index = i;
  }
  localStorage.setItem('tasks: ', JSON.stringify(tasksList));
};

const modifyTask = (taskToBeDone, index) => {
  tasksList[index].description = taskToBeDone;
  localStorage.setItem('tasks: ', JSON.stringify(tasksList));
};

const highlightTask = (index) => {
  const moveBtns = document.querySelectorAll('.fa.fa-ellipsis-v.dots-icon');
  const deleteBtns = document.querySelectorAll('.fa.fa-trash.trash-icon');
  const activeTasks = document.querySelectorAll('.task.active');
  const tasksElt = document.querySelectorAll('.task');
  activeTasks.forEach((activeTask) => {
    activeTask.classList.remove('active');
  });
  moveBtns.forEach((btn, index) => {
    btn.classList.remove('active');
    deleteBtns[index].classList.remove('active');
  });

  tasksElt[index].classList.toggle('active');
  moveBtns[index].classList.toggle('active');
  deleteBtns[index].classList.toggle('active');
};

const clearCompletedTasks = () => {
  const tasksElt = document.querySelectorAll('.task');
  tasksList.forEach((task, index) => {
    if (task.completed) {
      tasksElt[index].remove();
    }
  });
  tasksList = tasksList.filter((task) => task.completed === false);
  for (let i = tasksList.length - 1; i >= 0; i -= 1) {
    tasksList[i].index = i;
  }
  localStorage.setItem('tasks: ', JSON.stringify(tasksList));
};
export {
  addTaskToArray,
  loadTasksFromLS,
  modifyTask,
  highlightTask,
  removeTask,
  getTasksList,
  clearCompletedTasks,
};