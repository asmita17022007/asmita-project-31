const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var gr;

var particles = [];
var plinkos =[];
var division = [];

var divisionHeight=300;

function preload()
{
	
}

function setup() {
	createCanvas(500,640);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	gr=new Ground(250,630,500,20);

	for (var k=5; k <=innerWidth; k= k+80){
		division.push(new Divisions(k,540,10,240));
	}
	for (var j=40; j<=width; j=j+50)
	{
		plinkos.push(new Plinko(j,75,10));
	}
	for (var j=15; j<=width-10; j=j+50)
	{
		plinkos.push(new Plinko(j,175,10));
	}
	for (var j=40; j<=width; j=j+50)
	{
		plinkos.push(new Plinko(j,275,10));
	}
	for (var j=15; j<=width-10; j=j+50)
	{
		plinkos.push(new Plinko(j,375,10));
	}

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);

  Engine.update(engine);
  
  gr.display();  
  if(frameCount%60===0){
	particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}

  for(var k=0;k<division.length;k++){
	division[k].display();
  }
  for(var a=0;a<particles.length;a++){
	particles[a].display();
  }
  for(var b=0;b<plinkos.length;b++){
	plinkos[b].display();
  }

  drawSprites();
 
}


