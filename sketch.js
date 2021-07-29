var bg , bgImg ;
var soil , soilImg;
var seed , trash1 , trash2 , trash3;
var boy , boyImg ;

function preload(){
  bgImg = loadImage("bg.jpg");
  soilImg = loadImage("soil3.png");
  boyImg = loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png");
  boyImg2 = loadImage("boy5.png");
}

function setup(){
  createCanvas(600,600);
  bg = createSprite(300,200);
  bg.addImage(bgImg);
  bg.scale = 1.0;
  
  soil = createSprite(200,400);
  soil.addImage("soil",soilImg);
  soil.scale = 0.4

  boy = createSprite(50,50);
  boy.addAnimation("boy",boyImg);
  boy.scale = 0.5;
  
}

function draw(__) {
  background("white");

  boy.x = World.mouseX;
  boy.y = World.mouseY;
  
  drawSprites();
}


