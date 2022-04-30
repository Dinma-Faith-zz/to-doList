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

  const completechecker = () => {
    const checked1 = document.querySelectorAll('input[type=checkbox]');

    checked1.forEach((e) => {
      e.addEventListener('change', () => {
        if (e.checked === true) {
          taskList[e.id].completed = true;
        } else {
          taskList[e.id].completed = false;
        }
        localStorage.setItem('taskDetail', JSON.stringify(taskList));
      });
    });
  };

  const clearAll = document.querySelector('.clear-items');
  clearAll.addEventListener('click', () => {
    taskList = taskList.filter((t) => !t.completed);
    localStorage.setItem('taskDetail', JSON.stringify(taskList));
    window.location.reload();
  });
  completechecker();
};
export default showPage;