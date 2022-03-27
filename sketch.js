  var shipImg, ship
  var seaImg, sea

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,500);
  
//CRIANDO O MAR
  sea = createSprite(600,300);
  sea.addAnimation("moving",seaImg)
  sea.scale = 0.5;
  sea.velocityX =-1;
  
//CRIANDO O BARCO
  ship = createSprite(50,200,20,50);
  ship.addAnimation("moving", shipImg);
  ship.scale = 0.25;
  ship.x = 180;
  ship.y = 300;
}

function draw() {
  background("blue");
  if(keyDown("right")){
   ship.velocityX = 5;
  }
  if(keyDown("Left")){
    ship.velocityX = -5;
  }
  if(keyDown("space")){
    ship.velocityX = 0
  }
  if(sea.x < 0 ){
     sea.x = sea.width/3;
  }
 drawSprites();
}