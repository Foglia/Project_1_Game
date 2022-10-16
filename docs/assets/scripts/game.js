class Game {
    constructor(ctx, width, height, player) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.player = player;
    this.obstacle = []; // []; //this.obstacle = obstacle
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
    this.player.draw();
    this.player.newPos();
    this.updateObstacles();
   }
   updateObstacles() {
    for (let i = 0; i < this.obstacle.length; i++){
      this.obstacle[i].y++;
      this.obstacle[i].draw(); 
     };
    
    if (this.frames % 300 === 0 ){ // space between the fallinng elements

      this.obstacle.push(new Obstacles(1100, 50, 20, 20, 'black'));
      this.obstacle.push(new Obstacles(100, 70, 20, 20, 'black'));
      this.obstacle.push(new Obstacles(900, -7, 20, 20, 'white'));
      this.obstacle.push(new Obstacles(550, 0, 20, 20, 'white'));
  }
  }
   stop() {
   clearInterval(this.intervalId);
   }
}