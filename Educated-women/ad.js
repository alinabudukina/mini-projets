// Animation des images des femmes
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 9000); // Change image every 2 seconds
}

// Animation du texte : nom et bio
var slideIndex = 0;
slide();

function slide() {
  var i;
  var x = document.getElementsByClassName("myText");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(slide, 9000); // Change text every 9 seconds
}

// Animation du chapeau
var hatIndex = 0;
moveHat();

function moveHat() {
  var i;
  var x = document.getElementsByClassName("hat");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  hatIndex++;
  if (hatIndex > x.length) {
    hatIndex = 1;
  }
  x[hatIndex - 1].style.display = "block";
  setTimeout(moveHat, 9000); // Move hat every 9 seconds
}
