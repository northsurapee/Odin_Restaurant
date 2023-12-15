/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createContact() {
    const contact = document.createElement("div");
    contact.classList.add("contact");

    const phoneNumber = document.createElement("p");
    phoneNumber.textContent = "📞 123 456 789";

    const address = document.createElement("p");
    address.textContent = "🏠 Unio Charan 3, Wat Thrapha, Bangkok Yai, Bangkok, Thailand";

    const locationImage = document.createElement("img");
    locationImage.src = "images/map.jpeg";
    locationImage.alt = "Frieren Café location";

    contact.appendChild(phoneNumber);
    contact.appendChild(address);
    contact.appendChild(locationImage);

    return contact;
}

function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

// create Home's main content
function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const chefImage = document.createElement("img");
    chefImage.src = "images/chef.jpg";
    chefImage.alt = "Chef";

    home.appendChild(createParagraph("📌 Best café in this era"));
    home.appendChild(createParagraph("Made with passion since 1,000 years ago 🍵"));
    home.appendChild(chefImage);
    home.appendChild(createParagraph("✨ Frieren the hero party's mage 🧝🏻‍♀️"));

    return home
}

// Append Home in main section of the page
function loadHome() {
    const main = document.getElementById("main");
    main.textContent = ""; // clear previous content
    main.appendChild(createHome());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

// Create menu card
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

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = ""; // clear previous content
    main.appendChild(createMenu());
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




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
        (0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }});

    const menuButton = document.createElement("button");
    menuButton.classList.add("button-nav");
    menuButton.textContent = "Menu";
    menuButton.addEventListener("click", (e) => {{
        // Already clicked -> do nothing
        if (e.target.classList.contains("active")) return; 
        // Not clicked -> switch to "Home" page
        setActiveButton(menuButton);
        (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
    }});

    const contactButton = document.createElement("button");
    contactButton.classList.add("button-nav");
    contactButton.textContent = "Contact";
    contactButton.addEventListener("click", (e) => {{
        // Already clicked -> do nothing
        if (e.target.classList.contains("active")) return; 
        // Not clicked -> switch to "Home" page
        setActiveButton(contactButton);
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
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
(0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7Ozs7Ozs7Ozs7Ozs7O0FDM0JmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7QUM5QnZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxtQkFBbUI7QUFDdkQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQSxpRUFBZSxRQUFROzs7Ozs7VUNwRnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ044QjtBQUNBO0FBQ007O0FBRXBDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBUTtBQUNoQixNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGlEQUFRO0FBQ2hCLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVc7QUFDbkIsTUFBTTs7QUFFTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hELGlEQUFRLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbl9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluX3Jlc3RhdXJhbnQvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQ29udGFjdCgpIHtcbiAgICBjb25zdCBjb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWN0LmNsYXNzTGlzdC5hZGQoXCJjb250YWN0XCIpO1xuXG4gICAgY29uc3QgcGhvbmVOdW1iZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9IFwi8J+TniAxMjMgNDU2IDc4OVwiO1xuXG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIvCfj6AgVW5pbyBDaGFyYW4gMywgV2F0IFRocmFwaGEsIEJhbmdrb2sgWWFpLCBCYW5na29rLCBUaGFpbGFuZFwiO1xuXG4gICAgY29uc3QgbG9jYXRpb25JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgbG9jYXRpb25JbWFnZS5zcmMgPSBcImltYWdlcy9tYXAuanBlZ1wiO1xuICAgIGxvY2F0aW9uSW1hZ2UuYWx0ID0gXCJGcmllcmVuIENhZsOpIGxvY2F0aW9uXCI7XG5cbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHBob25lTnVtYmVyKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQobG9jYXRpb25JbWFnZSk7XG5cbiAgICByZXR1cm4gY29udGFjdDtcbn1cblxuZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJylcbiAgICBtYWluLnRleHRDb250ZW50ID0gJydcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3QoKSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgbG9hZENvbnRhY3QiLCJmdW5jdGlvbiBjcmVhdGVQYXJhZ3JhcGgodGV4dCkge1xuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIHBhcmFncmFwaC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgcmV0dXJuIHBhcmFncmFwaDtcbn1cblxuLy8gY3JlYXRlIEhvbWUncyBtYWluIGNvbnRlbnRcbmZ1bmN0aW9uIGNyZWF0ZUhvbWUoKSB7XG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZS5jbGFzc0xpc3QuYWRkKFwiaG9tZVwiKTtcblxuICAgIGNvbnN0IGNoZWZJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY2hlZkltYWdlLnNyYyA9IFwiaW1hZ2VzL2NoZWYuanBnXCI7XG4gICAgY2hlZkltYWdlLmFsdCA9IFwiQ2hlZlwiO1xuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChjcmVhdGVQYXJhZ3JhcGgoXCLwn5OMIEJlc3QgY2Fmw6kgaW4gdGhpcyBlcmFcIikpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoY3JlYXRlUGFyYWdyYXBoKFwiTWFkZSB3aXRoIHBhc3Npb24gc2luY2UgMSwwMDAgeWVhcnMgYWdvIPCfjbVcIikpO1xuICAgIGhvbWUuYXBwZW5kQ2hpbGQoY2hlZkltYWdlKTtcbiAgICBob21lLmFwcGVuZENoaWxkKGNyZWF0ZVBhcmFncmFwaChcIuKcqCBGcmllcmVuIHRoZSBoZXJvIHBhcnR5J3MgbWFnZSDwn6ed8J+Pu+KAjeKZgO+4j1wiKSk7XG5cbiAgICByZXR1cm4gaG9tZVxufVxuXG4vLyBBcHBlbmQgSG9tZSBpbiBtYWluIHNlY3Rpb24gb2YgdGhlIHBhZ2VcbmZ1bmN0aW9uIGxvYWRIb21lKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7IC8vIGNsZWFyIHByZXZpb3VzIGNvbnRlbnRcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUhvbWUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRIb21lOyIsImZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKFwibWVudVwiKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJTYWxzaWNjaWFcIixcbiAgICAgICAgICAgIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFRvbWF0bywgSG9tZW1hZGUgc2F1c2FnZSwgR2FybGljLCBCYXNpbFwiXG4gICAgICAgIClcbiAgICApO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJHYW1iZXJpXCIsXG4gICAgICAgICAgICBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBTaHJpbXBzLCBGZXRhIGNoZWVzZSwgT2xpdmVzLCBCYXNpbFwiXG4gICAgICAgIClcbiAgICApO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgXCJQZXBlXCIsXG4gICAgICAgICAgICBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBDaGlsbGkgZmxha2VzLCBPbGl2ZXMsIEJhc2lsXCJcbiAgICAgICAgKVxuICAgICk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBcIkRpc2d1c3Rvc29cIixcbiAgICAgICAgICAgIFwiVG9tYXRvIHNhdWNlLCBCYWNvbiwgUGluZWFwcGxlLCBPbGl2ZXMsIEJhc2lsXCJcbiAgICAgICAgKVxuICAgICk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICBcIkNvbG9yYXRvXCIsXG4gICAgICAgICAgICBcIlRvbWF0byBzYXVjZSwgTW96YXJlbGxhLCBPbmlvbiwgUGVwcGVyLCBDaGFtcGlnbm9ucywgQmFzaWxcIlxuICAgICAgICApXG4gICAgKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFwiUG9tb2Rvcm9cIixcbiAgICAgICAgICAgIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIFRvbWF0bywgT25pb24sIEZldGEgY2hlZXNlLCBDaGlsbGlcIlxuICAgICAgICApXG4gICAgKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFwiQ3JlbWFcIixcbiAgICAgICAgICAgIFwiV2hpdGUgc2F1Y2UsIE1vemFyZWxsYSwgU2hyaW1wcywgU2FsbW9uLCBQaW5lYXBwbGUsIE9saXZlcywgQmFzaWxcIlxuICAgICAgICApXG4gICAgKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVNZW51SXRlbShcbiAgICAgICAgICAgIFwiQ2FybmVcIixcbiAgICAgICAgICAgIFwiVG9tYXRvIHNhdWNlLCBNb3phcmVsbGEsIEhvbWVtYWRlIHNhdXNhZ2UsIEJhY29uLCBHYXJsaWMsIFBlcHBlciwgQ2hpbGxpXCJcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICByZXR1cm4gbWVudTtcbn1cblxuLy8gQ3JlYXRlIG1lbnUgY2FyZFxuZnVuY3Rpb24gY3JlYXRlTWVudUl0ZW0obmFtZSwgZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnUtaXRlbVwiKTtcblxuICAgIGNvbnN0IGZvb2RJbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZm9vZEltYWdlLnNyYyA9IGBpbWFnZXMvbWVudXMvJHtuYW1lLnRvTG93ZXJDYXNlKCl9LnBuZ2A7XG4gICAgZm9vZEltYWdlLmFsdCA9IG5hbWU7XG5cbiAgICBjb25zdCBmb29kTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBmb29kTmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgICBjb25zdCBmb29kRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBmb29kRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkZXNjcmlwdGlvbjtcblxuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2RJbWFnZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xuICAgIG1lbnVJdGVtLmFwcGVuZENoaWxkKGZvb2REZXNjcmlwdGlvbik7XG5cbiAgICByZXR1cm4gbWVudUl0ZW07XG59XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9IFwiXCI7IC8vIGNsZWFyIHByZXZpb3VzIGNvbnRlbnRcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZU1lbnUoKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGxvYWRNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRIb21lIGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCBsb2FkTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG4vLyBDcmVhdGUgSGVhZGVyID0gUmVzdGF1cmFudCBOYW1lICsgTmF2XG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlclwiKTtcblxuICAgIGNvbnN0IHJlc3RhdXJhbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIHJlc3RhdXJhbnROYW1lLmNsYXNzTGlzdC5hZGQoXCJyZXN0YXVyYW50LW5hbWVcIik7XG4gICAgcmVzdGF1cmFudE5hbWUudGV4dENvbnRlbnQgPSBcIkZyaWVyZW4gQ2Fmw6lcIjtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0YXVyYW50TmFtZSk7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcblxuICAgIHJldHVybiBoZWFkZXJcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XG5cbiAgICBjb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tbmF2XCIpO1xuICAgIGhvbWVCdXR0b24udGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge3tcbiAgICAgICAgLy8gQWxyZWFkeSBjbGlja2VkIC0+IGRvIG5vdGhpbmdcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkgcmV0dXJuOyBcbiAgICAgICAgLy8gTm90IGNsaWNrZWQgLT4gc3dpdGNoIHRvIFwiSG9tZVwiIHBhZ2VcbiAgICAgICAgc2V0QWN0aXZlQnV0dG9uKGhvbWVCdXR0b24pO1xuICAgICAgICBsb2FkSG9tZSgpO1xuICAgIH19KTtcblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1uYXZcIik7XG4gICAgbWVudUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7e1xuICAgICAgICAvLyBBbHJlYWR5IGNsaWNrZWQgLT4gZG8gbm90aGluZ1xuICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSByZXR1cm47IFxuICAgICAgICAvLyBOb3QgY2xpY2tlZCAtPiBzd2l0Y2ggdG8gXCJIb21lXCIgcGFnZVxuICAgICAgICBzZXRBY3RpdmVCdXR0b24obWVudUJ1dHRvbik7XG4gICAgICAgIGxvYWRNZW51KCk7XG4gICAgfX0pO1xuXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLW5hdlwiKTtcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHt7XG4gICAgICAgIC8vIEFscmVhZHkgY2xpY2tlZCAtPiBkbyBub3RoaW5nXG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIikpIHJldHVybjsgXG4gICAgICAgIC8vIE5vdCBjbGlja2VkIC0+IHN3aXRjaCB0byBcIkhvbWVcIiBwYWdlXG4gICAgICAgIHNldEFjdGl2ZUJ1dHRvbihjb250YWN0QnV0dG9uKTtcbiAgICAgICAgbG9hZENvbnRhY3QoKTtcbiAgICB9fSk7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcblxuICAgIHJldHVybiBuYXY7XG59XG5cbmZ1bmN0aW9uIHNldEFjdGl2ZUJ1dHRvbihjbGlja2VkQnV0dG9uKSB7XG4gICAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYnV0dG9uLW5hdlwiKTtcblxuICAgIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgIGlmIChidXR0b24gIT0gY2xpY2tlZEJ1dHRvbikge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNsaWNrZWRCdXR0b24uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbn1cblxuLy8gQ3JlYXRlIE1haW4gPSBjb250YWluIGNvbnRlbnQgb2YgSG9tZSwgTWVudSBhbmQgQ29udGFjdCBwYWdlcy5cbmZ1bmN0aW9uIGNyZWF0ZU1haW4oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZChcIm1haW5cIilcbiAgICBtYWluLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpblwiKTtcbiAgICByZXR1cm4gbWFpbjtcbn1cblxuLy8gSW5pdGlhbGl6ZSBXZWJzaXRlXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG5jb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1haW4oKSk7XG5zZXRBY3RpdmVCdXR0b24oZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5idXR0b24tbmF2XCIpKTsgLy8gU2V0IEhvbWUoZmlyc3QpIGJ1dHRvbiBhY3RpdmVcbmxvYWRIb21lKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9