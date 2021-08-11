var bg, boy
function preload(){
  bg=loadImage("snow3.jpg")
  boyimg=loadAnimation("boy1.png","boy2.png")
}

function setup() {
  createCanvas(1200,700);
 boy=createSprite(600, 550, 50, 50);
 boy.addAnimation("walking",boyimg)
 boy.scale=1.3
}

function draw() {
  background(bg);  

  drawSprites();
}