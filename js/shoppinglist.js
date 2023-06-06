
//hjelp fra chatGTP for å implimentere local storage og loop på clear liste

const inputElement = document.getElementById('product');
const buttonAddElement = document.getElementById('addbutton');
const ulShoppingListElement = document.getElementById('ul-li');
const removeallButton = document.getElementById('removebutton');

buttonAddElement.addEventListener('click', renderList);
window.addEventListener('keyup', (event) => {
    if(event.code === 'Enter') {
        renderList();
    }
});

// Fetch the shopping list items from local storage on page load
window.addEventListener('load', () => {
    const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
    shoppingList.forEach((item) => {
        renderList(item.value, item.checked);
    });
});

function renderList(value = inputElement.value, checked = false) {
    const liElement = document.createElement('li');
    ulShoppingListElement.appendChild(liElement);
    liElement.textContent = value;
    inputElement.value = '';

    const liCheckbox = document.createElement('input');
    liCheckbox.type = 'checkbox';
    liCheckbox.className = 'checkbox';
    liCheckbox.checked = checked;

    liElement.prepend(liCheckbox);
    liCheckbox.addEventListener('click', () => {
        liElement.classList.toggle('li-checked');
        updateShoppingList();
    });

    const buttonRemove = document.createElement('button');
    const imgRemoveIcon = document.createElement('img');
    imgRemoveIcon.setAttribute('src', './assets/x.svg');
    buttonRemove.appendChild(imgRemoveIcon);
    liElement.appendChild(buttonRemove);
    buttonRemove.addEventListener('click', () => {
        ulShoppingListElement.removeChild(liElement);
        updateShoppingList();
    });

    updateShoppingList();
}

function updateShoppingList() {
    const shoppingList = Array.from(ulShoppingListElement.children).map((li) => {
        return {
            value: li.textContent,
            checked: li.querySelector('.checkbox').checked,
        };
    });

    localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
}

removeallButton.addEventListener('click', () => {
    while (ulShoppingListElement.firstChild) {
        ulShoppingListElement.removeChild(ulShoppingListElement.firstChild);
    }
    updateShoppingList();
});




// Testet og astet kode:

/* const inputElement = document.getElementById('product');

const buttonAddElement = document.getElementById('addbutton');

const ulShoppingListElement = document.getElementById('ul-li');

const removeallButton = document.getElementById('removebutton');

buttonAddElement.addEventListener('click', renderList);
window.addEventListener('keyup', (event) => {
    if(event.code === 'Enter') {
        renderList();
    }
});

function renderList() {
    const liElement = document.createElement('li');
    ulShoppingListElement.appendChild(liElement);
    liElement.textContent = inputElement.value;
    inputElement.value = '';

    const liCheckbox = document.createElement('input');
    liCheckbox.type = 'checkbox';
    liCheckbox.className = 'checkbox';
    
    //https://developer.mozilla.org/en-US/docs/Web/API/Document/prepend
    liElement.prepend(liCheckbox);
    liCheckbox.addEventListener('click', () => {
        liElement.classList.toggle('li-checked');
    });

    //const divElement = document.createElement('div')
    //divElement.appendChild(textContent);
    //divElement.appendChild(liCheckbox);
    // help?
    
    const buttonRemove = document.createElement('button');
    const imgRevomeIcon = document.createElement('img');
    imgRevomeIcon.setAttribute('src', './assets/x.svg');
    buttonRemove.appendChild(imgRevomeIcon);
    liElement.appendChild(buttonRemove);
    buttonRemove.addEventListener('click', () => {
        ulShoppingListElement.removeChild(liElement);
    });

};

// fikk hjelp av ChatGPT for å lage denne loopen.
removeallButton.addEventListener('click', () => {
    while (ulShoppingListElement.firstChild) {
        ulShoppingListElement.removeChild(ulShoppingListElement.firstChild);
    }
}); */



//prøve å lage checked function
//checkedElement.addEventListener('click', function () {
//});

//const imgCheckbox = document.createElement('img');
    //imgCheckbox.setAttribute('src', './assets/box.svg');
    //const imgChecked = document.createElement('img');
    //imgChecked.setAttribute('src','./assets/v.svg');
    //liCheckbox.appendChild('imgCheckbox')
    //liElement.appendChild('liCheckbox')

//const item = { value: input_field.value, checked: false };

    /* liCheckbox.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            liCheckbox.checked = !liCheckbox.checked;
        }
        item.checked = event.target.checked;
    }); */
    /* liCheckbox.addEventListener('click', (event) => {
        console.log(event)
        //item.checked = event.target.checked;
        alert('clicked')
        liElement.classList.add('li-checked');
    }); */

    /* const lispanElement = document.createElement('span');
    lispanElement.type = 'span';
    lispanElement.className = 'span';
    lispanElement.innerText = item.value;
    liElement.appendChild('lispanElement') */

    //listElement.addEventListener('click', (event) => {
    //    if (event.target.checked == true)
    //        event.target.classList.toggle('linje')
    //});

    //event.target.checked = event.target.line;
    //liCheckbox.addEventListener('on click', (event) => {
    //    li.style.textDecoration = "line-through";
    //});

    //liElement.addEventListener('on click', function (event) {
    //      if (event.target.checked === 'li') {
    //        event.target.classList.toggle('toggle');
    //      }
    //    }, false);
//const toggleBotton = document.createElement('checkbox');
    //toggleBotton.appendChild('checkbox')
    //liElement.appendChild(toggleBotton);
    //toggleBotton.addEventListener('click'() => {
    //    if(checked)
    //});
//let list = document.querySelector('ul');
//list.addEventListener('click', function(ev) {
//  if (ev.target.tagName === 'LI') {
//    ev.target.classList.toggle('checked');
//  }
//}, false);

// Add a "checked" symbol when clicking on a list item
//https://www.w3schools.com/howto/howto_js_todolist.asp
//let list = document.querySelector('ul');

//listElement.addEventListener('click', function(ev) {
//    if (ev.target.getElementById === 'text') {
//    ev.target.classList.toggle('line');
//    }
//}, false);