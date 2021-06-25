
var bk, bkk;

var alien1, alienR;

var alien2, alienC;

var nameP, nameBk;

var info, infoUp, infoDown;

var level, levelUp, levelDown;

var levelD, infoD;


function preload() {

  bkk = loadAnimation("alienbk 1.png", "alienbk 2.png", "alienbk 3.png", "alienbk 2.png", "alienbk 1.png");

  nameBk = loadImage("nameP.png");

  alienR = loadAnimation("Alien run 1.png", "Alien run 2.png");

  alienC = loadAnimation("Alien climb 1.png", "Alien climb 2.png");

  infoUp  = loadImage("info up.png");

  infoDown  = loadImage("info down.png");

  levelUp  = loadImage("levels up.png");

  levelDown  = loadImage("levels down.png");

  levelD  = loadImage("levels details.png");

  infoD  = loadImage("info details.png");

}

function setup() {

  createCanvas(windowWidth, windowHeight);
  background("black");

  bk = createSprite(width/2, height/2, width, height);
  bk.addAnimation("bk",bkk);
  //bk.scale = 2;

  nameP = createSprite(width/2, 300, 200, 50);
  nameP.addImage(nameBk);
  nameP.scale = 0.85;

  info = createSprite(100, 200, 20, 20);
  info.addImage(infoUp);
  info.scale = 0.25;

  level = createSprite(width - 100, 200, 20, 20);
  level.addImage(levelUp);
  //level.scale = 0.80;

  alien1 = createSprite(width/2 - 525, info.y + 200, 50, 50);
  alien1.addAnimation("run", alienR);
  alien1.setCollider("rectangle", 0, 0, 65, 85, 0)

  alien2 = createSprite(width/2 + 525, level.y + 200, 50, 50);
  alien2.addAnimation("climb", alienC);
  alien2.setCollider("rectangle", 0, 0, 65, 85, 0)


  
}

function draw() {

  if(mousePressedOver(info)){
    info.addImage(infoDown);
    nameP.addImage(infoD);

  }
  else{
  info.addImage(infoUp);
  }

  if(mousePressedOver(level)){
    level.addImage(levelDown);
    nameP.addImage(levelD);


  }
  else{
  level.addImage(levelUp);
  }

  drawSprites();

}

// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.fontSize = "7.5px";
  } else {
    document.getElementById("header").style.fontSize = "20px";
  }
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}