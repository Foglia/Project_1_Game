class Game {
    constructor(ctx, width, height, player,) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.door = door;
    this.player = player;
    this.intervalId = null;     //the def. of game's interval
    this.obstacles = []; // []; //this.obstacle = obstacle
    this.obstacles2 = [];
    this.obstacles3 = [];
    this.intervalId = null;     //the def. of game's interval
    this.frames = 0;          // Can use for ex. track of the time / frequency of enemies 
   }
   
   start() {
    this.intervalId = setInterval(this.update, 1000 / 60); //last element is the vel
  }

   clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    ctx.fillStyle = 'lightblue'
    ctx.fillRect (0, 0, 1300, 400);
    ctx.fillStyle = 'lightgrey'
    ctx.fillRect (0, 400, 1300, 100);
  }

   update = () => {
    this.frames++;           //increase things based on frames - see the func below
    this.clear();
    this.door.draw();
    this.player.draw();
    this.player.newPos();
    this.updateObstacles();
    this.checkGameOver();
  }
  // stop() {
  //   clearInterval(this.intervalId);
  //   }

  updateObstacles() {
  for (let i = 0; i < this.obstacles.length; i++){
    this.obstacles[i].y++;
    this.obstacles[i].draw(); 
  };
  for (let i = 0; i < this.obstacles2.length; i++){
    this.obstacles2[i].y++;
    this.obstacles2[i].draw(); 
  };
  for (let i = 0; i < this.obstacles3.length; i++){
    this.obstacles3[i].y++;
    this.obstacles3[i].draw(); 
  };


  if (this.frames % 700 === 0 ){ // space between the fallinng elements     
     this.obstacles.push(new Obstacles(Math.floor(Math.random() * 1300), 0, 20, 20, 'black'));
     this.obstacles.push(new Obstacles(Math.floor(Math.random() * 1300), Math.floor(Math.random() * 500), 20, 20, 'black'));
     this.obstacles.push(new Obstacles(Math.floor(Math.random() * 1300), 0, 20, 20, 'black'));
     this.obstacles.push(new Obstacles(Math.floor(Math.random() * 1300), 0, 20, 20, 'black'));
     this.obstacles.push(new Obstacles(Math.floor(Math.random() * 1300), Math.floor(Math.random() * 500), 20, 20, 'black'));
  }
  if (this.frames % 520 === 0 ){ // space between the fallinng elements
     this.obstacles2.push(new Obstacles2(Math.floor(Math.random() * 1300), 0, 20, 20, 'white'));
     this.obstacles2.push(new Obstacles2(Math.floor(Math.random() * 1300), 0, 20, 20, 'white'));
 }
  if (this.frames % 900 === 0 ){ // space between the fallinng elements
     this.obstacles3.push(new Obstacles3(Math.floor(Math.random() * 1300), 0, 20, 20, 'red'));
 }
}

stop() {
  clearInterval(this.intervalId);
}

checkGameOver() {
    const crashed = this.obstacles.some((obstacles) => {
    return this.player.crashWith(obstacles);
  });
  
  if (crashed) {
    this.stop();
  }
}
}
