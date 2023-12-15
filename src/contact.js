/* 
'contact.js' contain loadContact() that load contact page, then export to 'index.js'
*/

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

// Exported function: Append contact page in main div 
function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
}

export default loadContact