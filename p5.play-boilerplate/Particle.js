class Particle{
    constructor(x,y,r,angle){
        var options={
            isStatic:false
        }
        this.body = Bodies.circle(x,y,r,options)
        this.r = r;
        World.add(world,this.body);
    }
    display(){
      
        var pos = this.body.position;
        ellipseMode(CENTER)
        fill("white")
        stroke("black")
        ellipse(0,0,this.r,this.r)

    }
}