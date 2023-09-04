const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll(".slider img");
    if (index >= slides.length) {
        slideIndex = 0;
    }
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach((slide) => (slide.style.display = "none"));
    slides[slideIndex].style.display = "block";
}

showSlide(slideIndex);

prevBtn.addEventListener("click", () => {
    slideIndex--;
    showSlide(slideIndex);
});

nextBtn.addEventListener("click", () => {
    slideIndex++;
    showSlide(slideIndex);
});

// Auto-advance to the next slide every 3 seconds (adjust as needed)
setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
}, 3000);