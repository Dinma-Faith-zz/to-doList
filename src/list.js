export default class Task {
  constructor(taskEntry) {
    this.taskEntry = taskEntry;
    this.completed = false;
    this.index = 0;
  }
  
  addTask(todoList) {
    const myTask = new Task(this.taskEntry);
    myTask.index = todoList.length;
    todoList.push(myTask);
    localStorage.setItem('taskDetail', JSON.stringify(todoList));
  }
  
  static delTask(index, todoList) {
    todoList = todoList.filter((tasks, i) => index !== i);
    localStorage.setItem('taskDetail', JSON.stringify(todoList));
    window.location.reload();
    todoList.forEach((taskindex, i) => {
    taskindex.index = i;
    localStorage.setItem('taskDetail', JSON.stringify(taskList)); 
   });
  }
}