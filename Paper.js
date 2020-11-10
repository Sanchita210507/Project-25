class BALL{

    constructor(x, y, radius){
        
    
        var options = {
    
            isStatic: false, 
            'restitution': 0.3,
            'friction': 0.5,
            'density': 1.2
                
             }

             this.radius = radius;
            this.object = Bodies.circle(x, y, radius, options);
            this.image = loadImage("sprites/paperImage.png")
          
        
           
           
         World.add(world, this.object); 
   
    }
    
    display(){
    
    var pos = this.object.position;
    var angle = this.object.angle;
    push();

   translate(pos.x, pos.y);

   

        ellipseMode(CENTER);
       //ellipse(0, 0,this.radius);
       
    pop();
    imageMode(CENTER) 
   image(this.image,pos.x, 680,33,33);
    }
    }

    class Paper{
    constructor(){
        var options ={
            
            restitution :0,
            friction :0,
            density :1.2
            
        }
        this.body = Bodies.circle(250,540,20,options);
        this.width =33;
        this.image = loadImage("Images/paper.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("white");
        rotate(angle);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,33,33);
    }
}
