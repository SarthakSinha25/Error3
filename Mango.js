class Mango {
    constructor(x,y,height,width){
        var options = {
            'isStatic':true,
            'restitution':0,
            'friction':1
        }
       this.body = Bodies.rectangle(x,y,width,height,options)
       this.height = height;   
       this.width = width;
       this.image = loadImage("img/mango.png");
       World.add(world, this.body)
    }
     display(){
         push()
         translate(this.body.position.x, this.body.position.y);
         imageMode(CENTER);
         image(this.image, 0, 0, this.width, this.height);
         pop()
     } 
   }