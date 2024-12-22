// Crear el formulario dinámicamente
document.body.innerHTML = `
    <div class="formulario">
        <img src="img/Marca.png" alt="Logo de Minikbook">
        <form id="loginForm">
            <div class="nombre">
                <label for="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" placeholder="Write here">
            </div>
            <div class="contrasena">
                <label for="contrasena">Password</label>
                <input type="password" id="contrasena" name="contrasena" placeholder="Write here">
            </div>
            <div class="recordar">Did you forget your password?</div>
            <button type="submit">Enviar</button>
            <div class="registrar"><a href="#">I don't have an account</a></div>
        </form>
    </div>
`;

// Manejar el evento de envío del formulario
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir el envío del formulario

    const username = document.getElementById('nombre').value;
    const password = document.getElementById('contrasena').value;

    if (username === 'minik' && password === 'gnx') {
        // Crear el contenido de la página "home.html"
        const homeContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Home</title>
            </head>
            <body>
                <h1>Welcome to Minikbook!</h1>
                <p>You have successfully logged in as admin.</p>
            </body>
            </html>
        `;

        // Crear y abrir un archivo `home.html` (Simulación en navegadores)
        const blob = new Blob([homeContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);

        // Redirigir a la página "home.html"
        window.location.href = url;
    } else {
        alert('Invalid username or password. Please try again.');
    }
});
