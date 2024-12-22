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
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Prevenir el envío del formulario

        const username = document.getElementById('nombre').value;
        const password = document.getElementById('contrasena').value;

        if (username === 'admin' && password === 'admin') {
            window.location.href = "home.html";
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});


