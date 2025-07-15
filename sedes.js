$(document).ready(function() {

    let currentSlide = 0;
    const slides = $('.banner-text-slide');
    const slideCount = slides.length;


    slides.eq(currentSlide).addClass('active');

    function nextSlide() {

        slides.eq(currentSlide).removeClass('active');

        currentSlide = (currentSlide + 1) % slideCount;

        slides.eq(currentSlide).addClass('active');
    }

    setInterval(nextSlide, 4000);

    const searchInput = document.getElementById('search-input');
    const sedeCards = document.querySelectorAll('.sedes-grid-full .sede-card');

    function filterSedes(searchTerm) {
        const lowerCaseSearchTerm = searchTerm.toLowerCase().trim();

        sedeCards.forEach(card => {
            const sedeName = card.querySelector('p').textContent.toLowerCase();

            if (sedeName.includes(lowerCaseSearchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', (event) => {
        filterSedes(event.target.value);
    });

});