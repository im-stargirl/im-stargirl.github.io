// Función para obtener los usuarios almacenados en el localStorage
function getStoredUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

// Función para validar el login
function validateLogin(event) {
    event.preventDefault(); // Prevenir la recarga de la página al hacer submit

    // Obtener los valores ingresados en los campos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Obtener los usuarios almacenados en el localStorage
    const users = getStoredUsers();

    // Validar si el email y la contraseña existen en los datos almacenados
    const user = users.find(user => user.email === email && user.password === password);

    // Si el usuario es encontrado, iniciar sesión
    if (user) {
        // Guardar el estado de sesión en localStorage
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('loggedInUser', JSON.stringify(user)); // Guardar datos del usuario si lo necesitas

        alert('Inicio de sesión exitoso');
        // Redirigir a la página principal o mostrar el contenido protegido
        window.location.href = 'index.html'; // Cambia a la página que desees
    } else {
        alert('Correo o contraseña incorrectos');
    }
}

// Verificar si el usuario ya está autenticado
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        // Si está autenticado, redirigir a la página principal o mostrar el contenido protegido
        window.location.href = 'index.html'; // Cambia a la página que desees
    }
}

// Cerrar sesión
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
    // Redirigir a la página de login o página pública
    window.location.href = 'login.html';
}

// Verificar al cargar la página si el usuario está autenticado
checkLoginStatus();

// Asignar el evento de submit al formulario de login
document.querySelector('.login-form').addEventListener('submit', validateLogin);
