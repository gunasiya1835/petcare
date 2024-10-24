// Simple form validation for login and registration
function validateLogin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!email || !password) {
        alert("Please fill in both fields.");
        return false;
    }
    alert("Login Successful!");
    return true;
}

function validateRegistration() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phone = document.getElementById('phone').value;

    if (!name || !email || !password || !phone) {
        alert("All fields are required.");
        return false;
    }
    if (password.length < 6) {
        alert("Password should be at least 6 characters long.");
        return false;
    }
    alert("Registration Successful! You can now log in.");
    return true;
}

// Search Functionality for Sitters
function searchSitter() {
    const searchInput = document.getElementById('searchSitter').value.toLowerCase();
    const sitters = document.querySelectorAll('.sitter-card');

    sitters.forEach(sitter => {
        const sitterName = sitter.querySelector('h3').innerText.toLowerCase();
        const sitterLocation = sitter.querySelector('p').innerText.toLowerCase();

        if (sitterName.includes(searchInput) || sitterLocation.includes(searchInput)) {
            sitter.style.display = "block";
        } else {
            sitter.style.display = "none";
        }
    });
}

// Search Functionality for Clinics
function searchClinic() {
    const searchInput = document.getElementById('searchClinic').value.toLowerCase();
    const clinics = document.querySelectorAll('.clinic-card');

    clinics.forEach(clinic => {
        const clinicName = clinic.querySelector('h3').innerText.toLowerCase();
        const clinicLocation = clinic.querySelector('p').innerText.toLowerCase();

        if (clinicName.includes(searchInput) || clinicLocation.includes(searchInput)) {
            clinic.style.display = "block";
        } else {
            clinic.style.display = "none";
        }
    });
}
