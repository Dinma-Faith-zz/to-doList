import Task from './list.js';

const showPage = (taskList) => {
  const displayPage = document.querySelector('.displayPage');

  displayPage.innerHTML = '';
  taskList.map((task, index) => {
    displayPage.innerHTML += `
<div class="tasktodo"> <input type="checkbox" id= "${index}" ${task.completed ? 'checked' : 'not'}>
<input class="entry" id= "update${index}" value= "${task.taskEntry}"><span><i class="fa-solid fa-pen-clip"></i></span><span class="fa-solid fa-trash-can"></span>
 </div>`;

    const clear = document.querySelectorAll('.fa-trash-can');
    clear.forEach((task, index) => task.addEventListener('click', () => Task.delTask(index, taskList)));
    return taskList;
  });
};
export default showPage;