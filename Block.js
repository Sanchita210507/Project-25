class block{

    constructor(x, y, width, height){
        
        var options = {
    
            isStatic: true 
                
             }
            this.body = Bodies.rectangle(x, y, width, height,options);
            this.image = loadImage("sprites/dustbinImage.png")

           this.width = width;
           this.height = height;
           
           fill("red");
           noStroke();
             World.add(world, this.body); 
    
             
    
    }
    
    display(){
    
    var pos = this.body.position;
    
        rectMode(CENTER);
        rect(pos.x, pos.y,this.width, this.height); 
    image(this.image,290,510,220,180);
    
    }
    
    }