function signUp() {
    var user = fetchUserData();
    var isValid = validateUserData(user);
    if (isValid) {
        var users = JSON.parse(localStorage.getItem("users"));
        if (users == null) {
            users = [];
        }
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
        alert("User registered successfully.");
        window.location.href = "login.html";
    }
}

function fetchUserData() {
    var user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        confirmPassword: document.getElementById("confirmPassword").value
    }
    return user;
}

function validateUserData(user) {
    var name = user.name;
    var email = user.email;
    var password = user.password;
    var confirmPassword = user.confirmPassword;
    var error = "";
    if (name == "") {
        error += "Name is required.\n";
    }
    if (email == "") {
        error += "Email is required.\n";
    }
    if (password == "") {
        error += "Password is required.\n";
    }
    if (confirmPassword == "") {
        error += "Confirm Password is required.\n";
    }
    if (password != confirmPassword) {
        error += "Password and Confirm Password must be same.\n";
    }
    if (error != "") {
        alert(error);
        return false;
    }
    return true;
}