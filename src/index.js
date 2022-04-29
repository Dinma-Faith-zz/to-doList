import './style.css';
import Task from './list.js';
import showPage from './todotasks.js';

const addBtn = document.querySelector('.fa-plus');

let todoList = [];
const textInput = document.getElementById('textInput');
todoList = JSON.parse(localStorage.getItem('taskDetail')) || [];
showPage(todoList);

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const putTask = new Task(textInput.value);
  putTask.addTask(todoList);
  console.log(todoList);

  textInput.value = '';
  showPage(todoList);
});

const edit = document.querySelectorAll('.fa-solid.fa-pen-clip');
edit.forEach((edits, index) => edits.addEventListener('click', () => Task.editTask(taskList, index)));