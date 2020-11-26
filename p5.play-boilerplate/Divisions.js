class Divisions{
    constructor(x,y,weight,height){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
      
        var pos = this.body.position;
        rectMode(CENTER)
        fill("white")
        stroke("black")
        rect(0,0,this.width,this.height)

    }
}

