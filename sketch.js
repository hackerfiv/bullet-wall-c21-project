var wall;
var thickness;
var bullet;
var speed;
var weight 




function setup() {
  
  createCanvas(1000,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=speed;
  bullet.shapeColor="yellow";
  wall=createSprite(1000,200,thickness,height/2);
  wall.shapeColor="#fb00ff";

}

function hasCollidded(lBullet,lWall) {
  var bulletRightEdge=lBullet.x+lBullet.width;
  var wallLeftEdge=lWall.x;

  if (bulletRightEdge>=wallLeftEdge) {
    return true;
  }

return false;

}


function draw() {

  background("pink"); 
  
  if (hasCollidded(bullet,wall)) {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if (damage>10) {
      wall.shapeColor="red";
      
    }
    if (damage<10) {
      wall.shapeColor="greeen";

    }
  }

  drawSprites();
}