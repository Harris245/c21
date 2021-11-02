const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;
var ground, right,left,up;
var ball
var b1,b2;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;
  rectMode(CENTER);
  ellipseMode(RADIUS);

  ground = new Ground(200, 390, 400, 20)
  right = new Ground(390,200,20, 400)
  left = new Ground(10,200,20,400)
  up = new Ground(200, 10,400,20 )

  var ballOptions = {
    restitution: 0.95
  }
  ball = Bodies.circle(200,100,20,ballOptions);
  World.add(world,ball)

  b1 = createImg("right.png")
  b1.position(20,20)
  b1.size(50,50)
  b1.mouseClicked(hForce)

  b2 =createImg("up.png")
  b2.position(20,350)
  b2.size(50,50)
  b1.mouseClicked(hForce)
}

function draw() 
{
  background(51);
  ground.show()
  right.show()
  left.show()
  up.show()

  ellipse(ball.position.x,ball.position.y,20)
  Engine.update(engine);
}

function hForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}
function vForce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0.05})
}
