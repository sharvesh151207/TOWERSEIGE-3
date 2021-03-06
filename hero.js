class Hero {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png");
        
        World.add(world, this.body);
      }
      display(){
        push();
        var pos =this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x, pos.y, this.width, this.height);
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,50,50)
        pop();
      }
    };