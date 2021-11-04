document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("#create-task-form");

  // grab form add submit listener initiate build function, prevent default adn reset input
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let person = form["new_task_person"].value;
    let todo = form["new-task-description"].value;
    let color = form["selectPriority"].value;
    buildToDo(person, todo, color);
    form.reset();
  });
});

function buildToDo(person, todo, color) {
  // newList
  let newListItem = document.createElement("li");
  newListItem.className = "list-item";
  newListItem.textContent = `${person}: ${todo}`;
  newListItem.style.color = color;

  // button
  let btn = document.createElement("button");
  btn.addEventListener("click", handleDelete);
  btn.textContent = "✔";
  newListItem.appendChild(btn);

  // get children of ul
  let tasksNode = document.getElementById("tasks");
  let taskList = [];
  while (tasksNode.firstChild) {
    const oldChild = tasksNode.removeChild(tasksNode.firstChild);
    taskList.push(oldChild);
  }
  // add new li
  taskList.push(newListItem);

  // sort by color(priority)
  taskList.sort((a, b) => {
    const colorA = a.style.color;
    const colorB = b.style.color;

    if (colorA === colorB) {
      return 0;
    } else if (colorA === "red" && colorB !== "red") {
      return -1;
    } else if (colorA === "orange" && colorB === "green") {
      return -1;
    } else {
      return 1;
    }
  });

  // append to DOM
  tasksNode.append(...taskList);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
