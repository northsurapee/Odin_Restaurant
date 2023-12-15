import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";

// Create Header = Restaurant Name + Nav
function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name");
    restaurantName.textContent = "Frieren Café";

    header.appendChild(restaurantName);
    header.appendChild(createNav());

    return header
}

function createNav() {
    const nav = document.createElement("nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("button-nav");
    homeButton.textContent = "Home";
    homeButton.addEventListener("click", (e) => {{
        // Already clicked -> do nothing
        if (e.target.classList.contains("active")) return; 
        // Not clicked -> switch to "Home" page
        setActiveButton(homeButton);
        loadHome();
    }});

    const menuButton = document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {{
        // Already clicked -> do nothing
        if (e.target.classList.contains("active")) return; 
        // Not clicked -> switch to "Home" page
        setActiveButton(menuButton);
        loadMenu();
    }});

    const contactButton = document.createElement("button");
    contactButton.classList.add("button-nav");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {{
        // Already clicked -> do nothing
        if (e.target.classList.contains("active")) return; 
        // Not clicked -> switch to "Home" page
        setActiveButton(contactButton);
        loadContact();
    }});

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(contactButton);

    return nav;
}

function setActiveButton(clickedButton) {
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button) => {
        if (button != clickedButton) {
            button.classList.remove("active");
        }
    });

    clickedButton.classList.add("active");
}

// Create Main = contain content of Home, Menu and Contact pages.
function createMain() {
    const main = document.createElement("main");
    main.classList.add("main")
    main.setAttribute("id", "main");
    return main;
}

// Initialize Website
const content = document.getElementById("content");
content.appendChild(createHeader());
content.appendChild(createMain());
setActiveButton(document.querySelector(".button-nav")); // Set Home(first) button active
loadHome();