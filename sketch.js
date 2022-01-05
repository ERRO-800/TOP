var top

function setup() {
  createCanvas(400,400);
top=createSprite(200,200,30,30);
}

function draw() 
{
  background(30);
drawSprites();
if (keyIsDown (RIGHT_ARROW)) {
top.x+=4;   
}
if (keyIsDown (LEFT_ARROW)) {
  top.x-=4;   
  }
  if (keyIsDown (UP_ARROW)) {
    top.y-=4;   
    }
    if (keyIsDown (DOWN_ARROW)) {
      top.y+=4;   
      }    
}




