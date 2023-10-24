let slideIndex = 1;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index > slides.length) {
        slideIndex = 1;
    }
    if (index < 1) {
        slideIndex = slides.length;
    }
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${-100 * (slideIndex - 1)}%)`;
    });
}

function changeSlide(n) {
    showSlide((slideIndex += n));
}

showSlide(slideIndex);
