document.addEventListener("DOMContentLoaded", function () {
  const addTaskButton = document.getElementById("addTaskButton");
  const taskInputContainer = document.getElementById("taskInputContainer");
  const submitTaskButton = document.getElementById("submitTaskButton");
  const taskInput = document.getElementById("taskInput");
  const taskDate = document.getElementById("taskDate");
  const taskTime = document.getElementById("taskTime");
  const taskList = document.querySelector(".task-list");
  const taskCount = document.querySelector(".task-count");

  taskInputContainer.style.display = "none";

  addTaskButton.addEventListener("click", () => {
    taskInputContainer.style.display = "block";
  });

  submitTaskButton.addEventListener("click", () => {
    const taskName = taskInput.value;
    const date = taskDate.value;
    const time = taskTime.value;

    if (taskName && date && time) {
      const newTask = document.createElement("div");
      newTask.classList.add("task");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("task-checkbox");

      const taskContent = document.createElement("p");
      taskContent.textContent = `${taskName} - ${date} at ${time}`;

      checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
          taskContent.style.textDecoration = "line-through";
          taskContent.style.color = "green";
        } else {
          taskContent.style.textDecoration = "none";
          taskContent.style.color = "black";
        }
      });

      newTask.appendChild(checkbox);
      newTask.appendChild(taskContent);

      taskList.appendChild(newTask);

      taskInput.value = "";
      taskDate.value = "";
      taskTime.value = "";

      taskCount.textContent = taskList.children.length;

      taskInputContainer.style.display = "none";
    } else {
      alert("Please fill in all fields");
    }
  });
});
