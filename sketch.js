
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
//var dustbin;
var ball;
var wall1,wall2,wall3;
var binImage,bin;

function preload()
{
	binImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,650,800,20);
	//dustbin = new Dustbin(623,570,130,150);

	bin = createSprite(600,580,180,150);
	bin.addImage("bin",binImage)
	bin.scale = 0.4;

	wall1 = new Dustbin(600,630,120,20);
	
	wall2 = new Dustbin(538,580,20,120);
	
	wall3 = new Dustbin(650,580,20,120);
	
	ball = new Paper(100,500,70,70);
	


	Engine.run(engine);
	
  
}


function draw() {

	wall1.visible = false;
	wall2.visible = false;
	wall3.visible = false;
	//console.log(mouseX,mouseY)
	
 
  background(225);
  ground.display();
  //dustbin.display();
  ball.display();
  wall1.display();
  wall2.display();
  wall3.display();
  
  drawSprites();


  
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball.body,ball.body.position,{x:110,y:-80});


	}
}



