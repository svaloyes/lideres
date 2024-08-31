document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    const rejectCookiesBtn = document.getElementById('reject-cookies');

    // Verifica si el usuario ya ha aceptado o rechazado las cookies
    if (localStorage.getItem('cookiesAccepted') === 'true') {
        setCookies(); // Captura las cookies si ya aceptaron
        cookieBanner.style.display = 'none';
    } else if (localStorage.getItem('cookiesRejected') === 'true') {
        cookieBanner.style.display = 'none'; // Oculta el banner si rechazaron
    } else {
        cookieBanner.style.display = 'flex'; // Muestra el banner si no hay preferencia
    }

    // Función para capturar las cookies cuando el usuario acepta
    acceptCookiesBtn.addEventListener('click', () => {
        setCookies();
        localStorage.setItem('cookiesAccepted', 'true');
        localStorage.removeItem('cookiesRejected');
        cookieBanner.style.display = 'none';
    });

    // Función para ocultar el banner cuando el usuario rechaza
    rejectCookiesBtn.addEventListener('click', () => {
        localStorage.setItem('cookiesRejected', 'true');
        localStorage.removeItem('cookiesAccepted');
        cookieBanner.style.display = 'none';
    });

    // Función para establecer cookies (ejemplo)
    function setCookies() {
        setCookie("usuario", "Juan", 7); // Ejemplo de configuración de cookie
        console.log("Cookies capturadas.");
        // Añadir aquí más cookies que quieras capturar
    }

    // Función para establecer una cookie
    function setCookie(nombre, valor, dias) {
        let date = new Date();
        date.setTime(date.getTime() + (dias * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = nombre + "=" + valor + ";" + expires + ";path=/";
    }
});
