class Paper extends BaseClass{
    constructor(x,y,width,height){
        super(x,y,width,height);
        this.image=loadImage("sprites/paperim.png");
        
    }
   display(){
       imageMode(CENTER);
       super.display();
   }

    }
   