document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nombreInput = document.getElementById("nombre");
    const contrasenaInput = document.getElementById("contrasena");
    const recordarText = document.querySelector(".recordar");

    // Add form submission logic
    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent default form submission

        const nombre = nombreInput.value.trim();
        const contrasena = contrasenaInput.value.trim();

        // Check if credentials are correct
        if (nombre === "admin" && contrasena === "admin") {
            // Redirect to /home
            window.location.href = "home.html";
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });

    // Interactive 'Forgot Password' text
    recordarText.addEventListener("click", () => {
        alert("Don't worry! We'll help you recover your password soon.");
    });

    // Add hover effects to social media icons
    const socialLinks = document.querySelectorAll(".rrss a img");
    socialLinks.forEach((img) => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.1)";
            img.style.transition = "transform 0.3s ease";
        });

        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });
});
