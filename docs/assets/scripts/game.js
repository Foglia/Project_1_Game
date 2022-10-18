// Updates and Functions
class Game {
    constructor(ctx, width, height, player) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.door = door;
    this.player = player;
    this.obstacles = [];  
    this.turbo = [];
    this.key = [];
    this.intervalId = null;     //the def. of game's interval
    this.frames = 0;          // Can use for ex. track of the time / frequency of enemies 
    this.hasKey = false;
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
    //this.player.newPos();
    this.updateObstacles();
    this.checkGameOver();
    this.checkGameKey();
    this.checkDoor();
    this.checkGameUp();
}

  updateObstacles() {
  for (let i = 0; i < this.obstacles.length; i++){
    this.obstacles[i].y++;
    this.obstacles[i].draw(); 
};
  for (let i = 0; i < this.turbo.length; i++){
    this.turbo[i].y++;
    this.turbo[i].draw(); 
  };
  for (let i = 0; i < this.key.length; i++){
    this.key[i].y++;
    this.key[i].draw(); 
};

  if (this.frames % 700 === 0 ){ // time / space between the falling elements     
     this.obstacles.push(new Obstacles(Math.floor(Math.random() * 1300), 0, 30, 40));
     this.obstacles.push(new Obstacles(Math.floor(Math.random() * 1300), Math.floor(Math.random() * 500), 40, 50));
     this.obstacles.push(new Obstacles(Math.floor(Math.random() * 1300), 0, 30, 40));
     this.obstacles.push(new Obstacles(Math.floor(Math.random() * 1300), 0, 30, 40));
     this.obstacles.push(new Obstacles(Math.floor(Math.random() * 1300), Math.floor(Math.random() * 500), 40, 50));
 }
  if (this.frames % 520 === 0 ){ 
     this.turbo.push(new Turbo(Math.floor(Math.random() * 1300), 0, 40, 60, 'white'));
     this.turbo.push(new Turbo(Math.floor(Math.random() * 1300), 0, 30, 50, 'white'));
 }
  if (this.frames % 900 === 0 ){ 
     this.key.push(new Key(Math.floor(Math.random() * 1300), 0, 20, 20, 'red'));
 }
}
stop() {
  clearInterval(this.intervalId);
  //window.location.reload(); // reload the initial screen, not a true restart
 }
checkGameOver() {
    const crashed = this.obstacles.some((obstacles) => {
    return this.player.crashWith(obstacles);
});
  if (crashed) {
    this.stop();
    alert('TRY HARDER, GRANNY!!')
  }}
checkDoor() {
    const crashed = this.player.crashWith(door); 
  if (crashed && this.hasKey && this.player.x < 140) {
    this.stop()
    alert('YOU WON!!')
  }}
checkGameUp() { 
    const crashed = this.turbo.some((turbo, index) => {
      if(this.player.crashWith(turbo)){
        this.turbo.splice(index, 1)
      }
    return this.player.crashWith(turbo);    
});
  if (crashed) {
    player.speedX += 1
   // !! change the values !! //
   }}
checkGameKey() {  
  const crashed = this.key.some((key, index) => {
    if(this.player.crashWith(key)){
      this.key.splice(index, 1)
    }
     return this.player.crashWith(key); 
});
if (crashed) {
  this.hasKey = true;
  }}
}