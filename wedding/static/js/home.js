let slideIndex = 1;
showslide(slideIndex);

// Automatically change slides every 2 seconds
setInterval(() => {
    changeSlide(1); // Move to the next slide
}, 2000);

function changeSlide(n) {
    showslide(slideIndex += n);
}

function currentSlide(n) {
    slideIndex = n;
    showslide(slideIndex);
}

function showslide(n) {
    let slides = document.getElementsByClassName("review-slide");

    if (n > slides.length) {
        slideIndex = 1;
    }
    
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}



document.addEventListener("DOMContentLoaded", function () {
    let textElement = document.getElementById("home_text");
    let words = textElement.innerText.split(" "); // Split text into words
    console.log(words);
    
    if (words.length > 20) {
      textElement.innerText = words.slice(0, 20).join(" ") + "..."; // Keep first 150 words
    }
  });