
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
	//Create the Bodies Here.
	
	
	
	
	block1 = new block(400, 645, 200, 20);
	block2 = new block(310, 600, 20, 100);
	block3 = new block(490, 600, 20, 100);

	ball1 = new BALL(100, 645, 20);

	ground = new Ground(600,height,1200,20);
	
	
}


function draw() {
  rectMode(CENTER);
  background("pink");
  
ground.display();

  block1.display();
  block2.display();
  block3.display();

  ball1.display();

  ground.display();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){

    	Matter.Body.applyForce(ball1.body, ball1.body.position, {x:74, y:-75});
	
	}

}

