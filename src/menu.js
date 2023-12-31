/* 
'menu.js' contain loadMenu() that load menu page, then export to 'index.js'
*/

// Create menu div and append all menuItem card in it
function createMenu() {
    const menu = document.createElement("div");
    menu.classList.add("menu");

    menu.appendChild(
        createMenuItem(
            "Salsiccia",
            "Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Gamberi",
            "Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Pepe",
            "Tomato sauce, Mozarella, Chilli flakes, Olives, Basil"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Disgustoso",
            "Tomato sauce, Bacon, Pineapple, Olives, Basil"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Colorato",
            "Tomato sauce, Mozarella, Onion, Pepper, Champignons, Basil"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Pomodoro",
            "Tomato sauce, Mozarella, Tomato, Onion, Feta cheese, Chilli"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Crema",
            "White sauce, Mozarella, Shrimps, Salmon, Pineapple, Olives, Basil"
        )
    );
    menu.appendChild(
        createMenuItem(
            "Carne",
            "Tomato sauce, Mozarella, Homemade sausage, Bacon, Garlic, Pepper, Chilli"
        )
    );

    return menu;
}

// Create menuItem card that contain in menu div
function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const foodImage = document.createElement("img");
    foodImage.src = `images/menus/${name.toLowerCase()}.png`;
    foodImage.alt = name;

    const foodName = document.createElement("h2");
    foodName.textContent = name;

    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);

    return menuItem;
}

// Exported function: Append menu page in main div 
function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = ""; // clear previous content
    main.appendChild(createMenu());
}

export default loadMenu;