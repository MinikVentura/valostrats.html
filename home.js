// Agregar eventos de clic a todas las imágenes
document.querySelectorAll('.photo img').forEach(image => {
    image.addEventListener('click', function () {
        const page = this.getAttribute('data-page'); // Obtener el nombre del archivo HTML del atributo data-page
        if (page) {
            window.location.href = page; // Redirigir a la página especificada
        } else {
            console.error('No se encontró un archivo HTML para esta imagen.');
        }
    });
});

// Función de logout
function logout() {
    // Redirigir a la página de inicio de sesión
    window.location.href = "index.html"; // Asegúrate de que el archivo de inicio de sesión se llame index.html
}
