document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        // Uncheck all radio buttons to reset the automatic slide change
        document.querySelectorAll('input[type="radio"]').forEach(radio => radio.checked = false);
        // Check the radio button corresponding to the current slide
        document.getElementById(`slide${currentSlide + 1}`).checked = true;
    }

    setInterval(nextSlide, 5000); // Change slide every 4 seconds
});
