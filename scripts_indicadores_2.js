document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".numero");
    const speed = 150; // Velocidad de la animación

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    const runCounters = () => {
        counters.forEach(counter => {
            if (isInViewport(counter) && !counter.classList.contains('counted')) {
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
                counter.classList.add('counted');
            }
        });
    };

    window.addEventListener('scroll', runCounters);
    runCounters(); // Para verificar si ya están en el viewport al cargar la página
});
