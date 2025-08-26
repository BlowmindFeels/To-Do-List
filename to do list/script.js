// Seleccionar elementos del DOM ( ͡❛ ͜ʖ ͡❛) 
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Funcion para agregar tareas 
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Por favor escribe una tarea.");
    return;
  }

  // Crear texto y btn de la tarea
  const li = document.createElement("li");
  li.textContent = taskText;

  // Boton de borrar
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.className = "deleteBtn";
  
  // Evento para eliminar
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  // Evento para marcar como completada
  li.onclick = () => {
    li.classList.toggle("completed");
  };

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // Limpiar input ( ͡❛ ͜ʖ ͡❛) 
  taskInput.value = "";
}

// Evento al presionar botón
addBtn.addEventListener("click", addTask);

// Evento al presionar Enter en el input ( ͡❛ ͜ʖ ͡❛) 
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
