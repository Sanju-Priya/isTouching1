var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
 movingRect = createSprite(200,200,50,50);
 movingRect.shapeColor="red";
  movingRect.debug=true;
 fixedRect=createSprite(400,200,60,80);
 fixedRect.shapeColor="yellow";
 fixedRect.debug=true;

}

function draw() {
  background(0); 

  //console.log(movingRect.x-fixedRect.x);

  if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x-movingRect.x < fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 &&
    fixedRect.y-movingRect.y < fixedRect.height/2+movingRect.height/2){
    movingRect.shapeColor="orange";
    fixedRect.shapeColor="orange";
  }else
  {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="yellow";
  }

   movingRect.y= World.mouseY;

   movingRect.x=World.mouseX;
  drawSprites();
}