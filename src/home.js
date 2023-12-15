/* 
'home.js' contain loadHome() that load home page, then export to 'index.js'
*/


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

/* Exported function: Append home page in main div */
function loadHome() {
    const main = document.getElementById("main");
    main.textContent = ""; // clear previous content
    main.appendChild(createHome());
}

export default loadHome;