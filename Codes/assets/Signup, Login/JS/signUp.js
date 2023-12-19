async function fetchUsersData() {
    const response = await fetch('./user.json');
    const data = await response.json()
    return data;
}

async function signUp() {
    const users = await fetchUsersData();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;
    const user = {
        username,
        password,
        confirmPassword,
        email
    }
    if (password !== confirmPassword) {
        alert('Password and Confirm Password are not the same');
        return;
    }
    if (users.some(user => user.username === username)) {
        alert('Username is already taken');
        return;
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Sign up successfully');
    window.location.href = './login.html';
}
