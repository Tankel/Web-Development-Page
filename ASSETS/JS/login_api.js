document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => {
            //const token = json.token;
            //localStorage.setItem('authToken', token);

            window.location.href = 'carrito.html';
        })
        .catch(error => {
            //console.error('Login failed:', error);
            const errorMessage = document.getElementById('error-message');
            errorMessage.innerText = 'Invalid username or password.\nPlease try again.';
        });
    });
})