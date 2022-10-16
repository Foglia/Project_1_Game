class Player {
    constructor(x, y, w, h, color) {
       this.x = x;
       this.y = y;
       this.w = w;
       this.h = h;
       this.color = color;
       this.ctx = ctx;
       this.speedX = 0; 
       this.speedY = 0;
      }
    newPos() {
        this.x += this.speedX;
    }
    draw(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);

    }
}

// Create the falling obstacles
class Obstacles {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.ctx = ctx; //without it would not work
    }
    move(){
        this.y++;
    }
    draw(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h); 
    }
}