const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;

var particle,particle1,particle2,particle3,particle4,particle5,particle6,particle7,particle8;
var particle11,particle12,particle13,particle14,particle15,particle16,particle17,particle18;
var particle9,particle10,particle19,particle20,particle21,particle22,particle23,particle24;

function setup() {
  var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
particle1 = new Particle(100,50,15)
particle2 = new Particle(200,50,15)
particle3 = new Particle(300,50,15)
particle4 = new Particle(400,50,15)
particle5 = new Particle(500,50,15)
particle6 = new Particle(600,50,15)

particle7 = new Particle(150,100,15)
particle8 = new Particle(250,100,15)
particle9 = new Particle(350,100,15)
particle10 = new Particle(450,100,15)
particle11 = new Particle(550,100,15)
particle12 = new Particle(650,100,15)

particle13 = new Particle(100,150,15)
particle14 = new Particle(200,150,15)
particle15 = new Particle(300,150,15)
particle16 = new Particle(400,150,15)
particle17 = new Particle(500,150,15)
particle18 = new Particle(600,150,15)

particle19 = new Particle(150,200,15)
particle20 = new Particle(250,200,15)
particle21 = new Particle(350,200,15)
particle22 = new Particle(450,200,15)
particle23 = new Particle(550,200,15)
particle24 = new Particle(650,200,15)
}

function draw() {
  background(0);  
mousePressed();
  Engine.update(engine);
particle1.display();
particle2.display();
particle3.display();
particle4.display();
particle5.display();
particle6.display();

particle7.display();
particle8.display();
particle9.display();
particle10.display();
particle11.display();
particle12.display();

particle13.display();
particle14.display();
particle15.display();
particle16.display();
particle17.display();
particle18.display();

particle19.display();
particle20.display();
particle21.display();
particle22.display();
particle23.display();
particle24.display();

}
 function mousePressed(){
   if(mousePressed.isPressed){
     particle = new Particle(x,y,15)
     particle.isStatic= true
   }
 }