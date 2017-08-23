app.controller('homeController', function($scope) {
    var slidesCollection = document.getElementsByClassName("slides");
    alert = slidesCollection.length;
    showSlides();

    function showSlides() {
        for (var i=0; i<slidesCollection.length; i++) {
            slidesCollection[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slidesCollection.length) {
            slideIndex = 1;
        }
        slidesCollection[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000);
    }
});