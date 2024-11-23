function saveData(key, data) {
    // Recuperamos los datos actuales del localStorage o inicializamos un array vacío
    let storedData = JSON.parse(localStorage.getItem(key)) || [];

    // Agregamos el nuevo dato al array
    storedData.push(data);

    // Guardamos el array actualizado en localStorage
    localStorage.setItem(key, JSON.stringify(storedData));
}

function getData(key) {
    return JSON.parse(localStorage.getItem(key)) || [];
}


document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe de manera tradicional

    
    // Obtener los valores de los campos

    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const gender = document.getElementById("gender").value;

    // Validar si todos los campos están completos
    if (!firstName || !lastName || !email || !password || !gender) {
        alert("Por favor, completa todos los campos.");
        return; // Salir si falta algún campo
    }

    // Crear un objeto con los datos del usuario
    const user = {
        firstName,
        lastName,
        email,
        password,
        gender
    };

    saveData('users', user);
    const users = getData('users');
    console.log(users); // Muestra el array con los objetos guardados


    // Notificar al usuario que el registro fue exitoso
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");

    // Redirigir a la página de inicio de sesión
        window.location.href = "login.html"; 
});



