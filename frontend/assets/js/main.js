const sidebar = document.querySelector('.sidebar');
const toggleBtn = document.querySelector('.sidebar-header-item button');

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('is-closed');

    if(sidebar.classList.contains('is-closed')) {
        toggleBtn.textContent = '>';
    } else {
        toggleBtn.textContent = '<';
    }
});


/* ================== SCROLL REVEAL ANIMATION ================== */

// 1. Seleccionamos todos los elementos que queremos animar
const hiddenElements = document.querySelectorAll('.hidden-element');

// 2. Creamos el "Observador"
// Este observador recibe una función que se ejecuta cuando algo entra/sale de la pantalla
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // Si el elemento está intersectando (es visible en pantalla)
        if (entry.isIntersecting) {
            // Le añadimos la clase que lo hace visible
            entry.target.classList.add('show-element');
            
            // Opcional: Dejamos de observarlo para que no se anime otra vez al subir
            // observer.unobserve(entry.target); 
        } 
        // Si quisieras que desaparezca al salir, añadirías un else aquí para quitar la clase
    });
});

// 3. Le decimos al observador que vigile a cada uno de nuestros elementos ocultos
hiddenElements.forEach((el) => observer.observe(el));