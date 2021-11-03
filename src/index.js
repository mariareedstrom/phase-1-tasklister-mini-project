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
  // set variables,elements,selectors
  let newListItem = document.createElement("li");
  newListItem.className = "list-item";
  let btn = document.createElement("button");

  // assign values
  btn.textContent = "✔";
  newListItem.textContent = `${person}: ${todo}`;
  newListItem.style.color = color;

  // appending to
  newListItem.appendChild(btn);
  document.querySelector("#tasks").appendChild(newListItem);

  // add eventListener
  btn.addEventListener("click", handleDelete);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}
