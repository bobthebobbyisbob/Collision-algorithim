var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  //movingRect.velocityX = -5;
  //fixedRect.velocityX = 5;


}

function draw() {
  background(0,0,0);  

  rebound(movingRect,fixedRect);
  
  drawSprites();
}


