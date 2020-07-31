
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	
}
function setup() {
	
	createCanvas(800,700);
	
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
box1 =new Box1(448,550,10,200);
box2 = new Box2(750,550,10,200);
box3 = new Box3(600,655,320,30);
ground=new Ground(200,680,1200,20);
circle1=new Circle(30,380, 20)

	Engine.run(engine);
  
}


function draw() {
 
  background(0);
 
     

box1.display();
box2.display();
box3.display();
circle1.display();
ground.display();



}
 
function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(circle1.body,circle1.body.position,{x:70,y:-70});
	}
}


