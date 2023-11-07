//Slides

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


//artistSlideshow
var artistslideIndex = 1;
        showartistSlides(artistslideIndex);

function plusartistSlides(m) {
  showartistSlides(artistslideIndex += m);
}

function artistcurrentSlide(m) {
  showartistSlides(artistslideIndex = m);
}

function showartistSlides(m) {
  var j;
  var artistslides = document.getElementsByClassName("artistSlides");
  var artistdots = document.getElementsByClassName("artistdot");
  if (m > artistslides.length) {artistslideIndex = 1}    
  if (m < 1) {artistslideIndex = artistslides.length}
  for (j = 0; j < artistslides.length; j++) {
      artistslides[j].style.display = "none";  
  }
  for (j = 0; j < artistdots.length; j++) {
      artistdots[j].className = artistdots[j].className.replace(" active", "");
  }
  artistslides[artistslideIndex-1].style.display = "block";  
  artistdots[artistslideIndex-1].className += " active";
}


//recent articles accordion
function showRecentArticles(){
    var acc = document.getElementsByClassName("recentArticlesAcc");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active2");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
}
//accordion
function showOtherArtists(){
    var acc = document.getElementsByClassName("otherArtistsAcc");
    var j;

    for (j = 0; j < acc.length; j++) {
      acc[j].addEventListener("click", function() {
        this.classList.toggle("active3");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
      });
    }
}

var modal = document.getElementById('subscribe');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
