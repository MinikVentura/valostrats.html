const images = ["img/bind_def_default_long.png", "img/bind_def_default_bath.png", "img/bind_def_sentinelsA.png"]; // Lista de imágenes
let currentIndex = 0;

const imageElement = document.getElementById('image');
const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');

function updateImage() {
    imageElement.src = images[currentIndex];
}

leftButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Navega a la imagen anterior
    updateImage();
});

rightButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length; // Navega a la siguiente imagen
    updateImage();
});