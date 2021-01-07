var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,600);
  speed=random(55,80);
  weighi.random(400,1500)
  wall=createSprite(1500,200,60,hight/2);
  wall.shapeColour=("grey");
  car=createSprite(50,200,50,50);
  car.velocityX=speed;
  
}

function draw() {
  background("black");
  
  if(wall.x-car.x <(car.width+wall.width)/2)
    {car.velocityX=0;
      var deformation=0.5 * weight * speed * speed/22509;
      if(deformation>180)
        {    
      car.shapeColour=("red")
       }
      if(deformation<180)
          {
            car.shapeColour=("yellow")
          }
      if(deformation<100)
        {
          car.shapeColour=("green")
        }

    }

  drawSprites() ;
  
}