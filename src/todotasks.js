import Task from './list.js';

const showPage = (taskList) => {
  const displayPage = document.querySelector('.displayPage');

  displayPage.innerHTML = '';
  taskList.map((task) => {
    displayPage.innerHTML += `
<div class="tasktodo"> <input type="checkbox" id= "${task.index}" ${task.completed ? 'checked' : 'not'}>
<input class="entry" id= "update${task.index}" value= "${task.taskEntry}"><span class="fa-solid fa-trash-can"></span>
 </div>`;

    const clear = document.querySelectorAll('.fa-trash-can');
    clear.forEach((task, index) => task.addEventListener('click', () => Task.delTask(index, taskList)));
    return taskList;
  });
};
export default showPage;