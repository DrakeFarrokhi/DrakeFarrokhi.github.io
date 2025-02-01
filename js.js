var slideIndex = 1;
var rotateSlides;

document.addEventListener("DOMContentLoaded", function () {
    rotateImages();
    showSlide(slideIndex);
});

function showSlide(n){
    var x = document.getElementsByClassName("slideshowImage");
    if (n > x.length) {slideIndex = 1};
    if (n < 1) {slideIndex = x.length};
    for (var i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}
function rotateImages(){
    var x = document.getElementsByClassName("slideshowImage");
    for (var i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    slideIndex--;
    if (slideIndex > x.length) {slideIndex = 1};
    x[slideIndex].style.display = "block";
    rotateSlides = setTimeout(rotateImages, 4000);
    showSlide(slideIndex);
}
