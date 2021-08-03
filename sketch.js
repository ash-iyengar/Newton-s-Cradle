const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var bob1, bob2, bob3, bob4, bob5
var rope,rope1,rope2,rope3,rope4

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}
	var bob_options={
		restitution:1
	}
	bob=Bodies.circle(300,300,20,bob_options)
	World.add(world,bob)
	bob1=Bodies.circle(300,300,20,bob_options)
	World.add(world,bob1)
	bob2=Bodies.circle(300,300,20,bob_options)
	World.add(world,bob2)
	bob3=Bodies.circle(300,300,20,bob_options)
	World.add(world,bob3)
	bob4=Bodies.circle(300,300,20,bob_options)
	World.add(world,bob4)

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);
rope=new Rope(bob,roof,0,0)
rope1=new Rope(bob1,roof,-40,0)
rope2=new Rope(bob2,roof,40,0)
rope3=new Rope(bob3,roof,-80,0)
rope4=new Rope(bob4,roof,80,0)


	Engine.run(engine);

	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  

  //call display() to show ropes here
  rope.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()

  //create ellipse shape for multiple bobs here
  ellipse(bob.position.x,bob.position.y,20)
  ellipse(bob1.position.x,bob1.position.y,20)
  ellipse(bob2.position.x,bob2.position.y,20)
  ellipse(bob3.position.x,bob3.position.y,20)
  ellipse(bob4.position.x,bob4.position.y,20)
	
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob3,bob3.position,{x:10,y:-45})
	}
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(bob4,bob4.position,{x:-10,y:-45})
	}
}
