let tasks = [
  { id: 1, description: "Estudiar para el examen", completed: false },
  { id: 2, description: "Comprar víveres", completed: false },
  { id: 3, description: "Hacer ejercicio", completed: false }
];

function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const row = document.createElement("tr");

    const idCell = document.createElement("td");
    idCell.textContent = task.id;

    const descCell = document.createElement("td");
    descCell.textContent = task.description;
    if (task.completed) {
      descCell.classList.add("completed-task");
    }

    const completeCell = document.createElement("td");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.onclick = () => toggleTask(index);
    completeCell.appendChild(checkbox);

    const deleteCell = document.createElement("td");
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Eliminar";
    deleteBtn.onclick = () => deleteTask(index);
    deleteCell.appendChild(deleteBtn);

    row.appendChild(idCell);
    row.appendChild(descCell);
    row.appendChild(completeCell);
    row.appendChild(deleteCell);

    taskList.appendChild(row);
  });

  updateSummary();
}

function updateSummary() {
  document.getElementById("total-tasks").textContent = tasks.length;
  document.getElementById("completed-tasks").textContent = tasks.filter(task => task.completed).length;
}

function addTask() {
  const input = document.getElementById("task-input");
  const description = input.value.trim();
  if (description === "") return;

  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    description,
    completed: false
  };

  tasks.push(newTask);
  input.value = "";
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function toggleTask(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

window.onload = renderTasks;
