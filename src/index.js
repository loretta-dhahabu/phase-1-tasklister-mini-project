document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById("create-task-form");
  const list = document.getElementById("tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTask = document.getElementById("new-task-description");
    createListItem(newTask.value);
    form.reset();
  })

  function createListItem(listItem) {
    const newListItem = document.createElement("li");
    newListItem.textContent = `${listItem} `;

    const newButton = document.createElement("button");
    newButton.addEventListener("click", handleDelete)
    newButton.textContent = "X";
    newListItem.appendChild(newButton);

    list.append(newListItem);
  }

  function handleDelete(e) {
    e.target.parentNode.remove();
  }
});
