class BaseClass{
    constructor(x,y,width,height){
        var options = {
            'restitution':0.1,
            'friction':3,
            'density':1
        }
        
      
        this.body=Matter.Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        
        
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();    
    }
}