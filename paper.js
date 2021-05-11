class Paper{
	constructor(x,y,r)
	{
	var options = {
        isStatic:false,
		restitution:0.3,
		friction:0,
		density:0.5
	}

		this.body=Bodies.circle(x, y, r,options)
		this.image = loadImage("paper.png")

		this.x = x
		this.y = y
		this.r = r
		World.add(world, this.body);

		

	}

	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			imageMode(CENTER)
			image(this.image,0,0,this.r,this.r)
			pop()
	}

}