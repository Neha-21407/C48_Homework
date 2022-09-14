class Basketball {
    constructor(x, y) 
    {
      var options = {
        isStatic: true
      };
      this.r = 50;
      this.body = Bodies.circle(x, y, this.r, options);
      this.image = loadImage("./assets/Basketball.png");
      this.trajectory = [];
      World.add(world, this.body);
    }
  
    shoot() {
    Matter.Body.setStatic(this.body, false);
      Matter.Body.setVelocity(this.body, {
        x: 6.5, y: -10});
    }
  
    display() 
    {
      var pos = this.body.position;
      push();
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.r, this.r);
      pop();

      if (
        this.body.position.x > 0
      ) {
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }
  
      for (var i = 0; i < this.trajectory.length; i++) {
        image(this.image, this.trajectory[i][0], this.trajectory[i][1], 5, 5);
      }
    }

    //create an invisible object on the hoop so that we can check collision
    /*collision(this.body, hoop) {
        if (this.body.position.x >= width || this.body.position.y >= height - 50) {
            waterSound.play()  
            ball.remove(index);
          }
    }
    */
  }