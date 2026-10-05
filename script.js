let totalProperties = 4;
let availableProperties = 4;
let rentedProperties = 0;

function rentProperty(propertyName) {

    if (availableProperties > 0) {

        availableProperties--;
        rentedProperties++;

        document.getElementById("availableProperties").innerText =
            availableProperties;

        document.getElementById("rentedProperties").innerText =
            rentedProperties;

        document.getElementById("message").innerText =
            propertyName + " has been selected for rental.";

    } else {

        document.getElementById("message").innerText =
            "No properties are currently available.";
    }
}

function searchProperty() {

    let searchValue =
        document.getElementById("search").value.toLowerCase();

    let properties =
        document.querySelectorAll(".property");

    properties.forEach(function(property) {

        let location =
            property.getAttribute("data-location").toLowerCase();

        if (location.includes(searchValue)) {
            property.style.display = "block";
        } else {
            property.style.display = "none";
        }

    });
}

function sendMessage() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let query = document.getElementById("query").value;

    if (name === "" || email === "" || query === "") {

        document.getElementById("contactMessage").innerText =
            "Please fill all the fields.";

    } else {

        document.getElementById("contactMessage").innerText =
            "Thank you, " + name + "! Your message has been submitted.";

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("query").value = "";
    }
}