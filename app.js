// Define UI Variables
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const filter = document.querySelector('#filter');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners(){
  // Add task event
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click', removeTask);
  // Clear Task Event
  clearBtn.addEventListener('click', clearTasks);
  // Filter tasks Event
  filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(event){
  if(taskInput.value === ''){
    alert('Add a task');
  }

  // Create li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //Create new link element
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  // Add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // Append the link to li
  li.appendChild(link);
  // Append li to ul
  taskList.appendChild(li);

  // Clear input
  taskInput.value = '';

  //console.log(li);

  event.preventDefault();
}

// Remove Task
function removeTask(event){
  //console.log(event.target);
  if(event.target.parentElement.classList.contains('delete-item')){
    //console.log(event.target);
    if(confirm('Are you sure??')){
      event.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Tasks - way one
function clearTasks(){
  //taskList.innerHTML = '';

  //Faster way
  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter Tasks
function filterTasks(event){
  const text = event.target.value.toLowerCase();
  //console.log(text);
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  });
}