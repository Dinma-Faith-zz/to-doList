import './style.css';
import Task from './list.js';
import showPage from './todotasks.js';

const addBtn = document.querySelector('.fa-plus');

let taskList = [];
const textInput = document.getElementById('textInput');
taskList = JSON.parse(localStorage.getItem('taskDetail')) || [];
showPage(taskList);

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const putTask = new Task(textInput.value);
  putTask.addTask(taskList);

  textInput.value = '';
  showPage(taskList);
});

const edit = document.querySelectorAll('.fa-solid.fa-pen-clip');
edit.forEach((edits, index) => edits.addEventListener('click', () => Task.editTask(taskList, index)));
