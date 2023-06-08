//hjelp fra chatGTP for å implimentere local storage og loop på clear liste

const inputElement = document.getElementById("product");
const buttonAddElement = document.getElementById("addbutton");
const ulShoppingListElement = document.getElementById("ul-li");
const removeallButton = document.getElementById("removebutton");

buttonAddElement.addEventListener("click", renderList);
window.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    renderList();
  }
});

// Fetch the shopping list items from local storage on page load
window.addEventListener("load", () => {
  const shoppingList = JSON.parse(localStorage.getItem("shoppingList")) || [];
  shoppingList.forEach((item) => {
    renderList(item.value, item.checked);
  });
});

function renderList(value = inputElement.value, checked = false) {
  const liElement = document.createElement("li");
  ulShoppingListElement.appendChild(liElement);
  liElement.textContent = value;
  inputElement.value = "";

  const liCheckbox = document.createElement("input");
  liCheckbox.type = "checkbox";
  liCheckbox.className = "checkbox";
  liCheckbox.checked = checked;

  liElement.prepend(liCheckbox);
  liCheckbox.addEventListener("click", () => {
    liElement.classList.toggle("li-checked");
    updateShoppingList();
  });

  const buttonRemove = document.createElement("button");
  const imgRemoveIcon = document.createElement("img");
  imgRemoveIcon.setAttribute("src", "./assets/x.svg");
  buttonRemove.appendChild(imgRemoveIcon);
  liElement.appendChild(buttonRemove);
  buttonRemove.addEventListener("click", () => {
    ulShoppingListElement.removeChild(liElement);
    updateShoppingList();
  });

  updateShoppingList();
}

function updateShoppingList() {
  const shoppingList = Array.from(ulShoppingListElement.children).map((li) => {
    return {
      value: li.textContent,
      checked: li.querySelector(".checkbox").checked,
    };
  });

  localStorage.setItem("shoppingList", JSON.stringify(shoppingList));
}

removeallButton.addEventListener("click", () => {
  while (ulShoppingListElement.firstChild) {
    ulShoppingListElement.removeChild(ulShoppingListElement.firstChild);
  }
  updateShoppingList();
});
