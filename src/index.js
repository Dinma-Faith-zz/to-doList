import './style.css';
import Task from './list.js';
import showPage from './todotasks.js';

const addBtn = document.querySelector('.fa-solid.fa-plus.fa-lg');

let todoList = [];
const textInput = document.getElementById('textInput');
todoList = JSON.parse(localStorage.getItem('taskDetail')) || [];
showPage(todoList);

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const putTask = new Task(textInput.value);
  putTask.addTask(todoList);

  textInput.value = '';
  showPage(todoList);
});
