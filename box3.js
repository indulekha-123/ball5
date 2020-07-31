class Box3 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = 20;
      this.height = 300;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("pink");
      rect(pos.x, pos.y,320,30);
    }
  }