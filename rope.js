class Rope{
	constructor(bodyA,bodyB,pointA,pointB)
{
	var options=
	{bodyA:bodyA,
		bodyB:bodyB,
		pointB:{x:pointA,y:pointB}}
this.rope=Constraint.create(options)
World.add(world,this.rope)
this.pointA=pointA 
this.pointB=pointB
	//create rope constraint here

	}


    //create display() here 
display(){
line (this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.rope.bodyB.position.x+this.pointA,this.rope.bodyB.position.y+this.pointB)

}
}
