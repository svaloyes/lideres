document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".numero");
    const speed = 150; // Velocidad de la animación

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            // Calcular la velocidad de incremento
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
