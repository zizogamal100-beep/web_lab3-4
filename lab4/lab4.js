const tasks = [];

const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

function addTask() {
  const text = taskInput.value.trim();
  
  if (text === '') {
    alert('Please enter a task!');
    return;
  }

  tasks.push({ description: text });

  const taskItem = document.createElement('div');

  const taskText = document.createElement('span');
  taskText.textContent = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  
  deleteBtn.addEventListener('click', () => {
    taskItem.remove();
  });

  taskItem.appendChild(taskText);
  taskItem.appendChild(deleteBtn);
  taskList.appendChild(taskItem);

  taskInput.value = '';
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') addTask();
});