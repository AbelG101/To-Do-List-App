import './index.css';

const tasksList = [
  {
    description: 'Wash Dishes',
    completed: false,
    index: 0,
  },
  {
    description: 'Complete to do list project',
    completed: false,
    index: 1
  }
];

const loadTasksToPage = () => {
  const tasksContainerElt = document.querySelector('.tasks-container');
  tasksList.forEach((task) => {
    const labelElt = document.createElement('label');
    const inputElt = document.createElement('INPUT');
    labelElt.setAttribute('class', 'task');
    inputElt.setAttribute('type', 'checkbox');
    inputElt.checked = task.completed;
    labelElt.appendChild(inputElt);
    labelElt.appendChild(document.createTextNode(task.description));
    tasksContainerElt.appendChild(labelElt);
  });
};
const onPageLoad = () => {
  loadTasksToPage();
};

window.onload = onPageLoad();