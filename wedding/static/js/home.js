let slideIndex = 1;
showslide(slideIndex);

function changeSlide(n){
    showslide(slideIndex += n);
}

function currentSlide(n){
    slideIndex = n;
    showslide(slideIndex);
}   

function showslide(n){
    let i;
    let slides = document.getElementsByClassName("review-slide");

    if(n > slides.length){
        slideIndex = 1;
    }
    
    if(n < 1){
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block"
}

console.log("Hello");

