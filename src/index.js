import _ from 'lodash';
import './style.css';

const displayPage = document.querySelector('.displayPage');

const todoList = [
  { id: 0, description: 'Wash the dishes', completed: false },
  { id: 1, description: 'Go to the gym', completed: true },
  { id: 2,description: 'Eat breakfast', completed: false },
  { id: 3, description: 'Go for a walk', completed: true },
];
  displayPage.innerHTML = ' ';
  todoList.map((todo) => {
  todoList.sort((x, y) => x - y);
displayPage.innerHTML += `
<div class="tasktodo" id= ${todo.id}> <input type="checkbox" ${todo.completed ? 'checked' : 'unchecked'}>
<span class="description">${todo.description}</span><div class="fa-solid fa-ellipsis-vertical fa-lg"></div>
  </div>`;
  return todo;
});