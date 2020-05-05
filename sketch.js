const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var raindrop=[]

function setup() {
  createCanvas(1200,400);
  engine = Engine.create()
  world = engine.world

  for(i=0;i<500;i++){
    raindrop[i] = new RainDrops ();
  }
}

function draw() {
  background(255,255,255);  
  Engine.update(engine)

  for(i=0;i<raindrop.length;i++){

  raindrop[i].display();
  raindrop[i].fall();
  }
  //drawSprites();
}