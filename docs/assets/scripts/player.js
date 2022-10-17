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
    draw(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }
    newPos() {
        this.x += this.speedX;
    }
    moveLeft() {
        this.x -= 1;
    }
    moveRight() {
        this.x += 1;
    }
    reStart() {
        this.x = 1200; 
        this.y = 350;  
    }

    top() {
      return this.y;
    }
  
    bottom() {
      return this.y + this.h;
    }
  
    left() {
      return this.x;
    }
  
    right() {
      return this.x + this.w;
    }

    crashWith(obstacles) {
        return !(
          this.bottom() < obstacles.top() ||
          this.top() > obstacles.bottom() ||
          this.right() < obstacles.left() ||
          this.left() > obstacles.right()
        );
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
    top() {
        return this.y;
      }
      bottom() {
        return this.y + this.h;
      }
      left() {
        return this.x;
      }
      right() {
        return this.x + this.w;
      }
  }

  class Obstacles2 {
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
    top() {
        return this.y;
      }
      bottom() {
        return this.y + this.h;
      }
      left() {
        return this.x;
      }
      right() {
        return this.x + this.w;
      }
  }

  class Obstacles3 {
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
    top() {
        return this.y;
      }
      bottom() {
        return this.y + this.h;
      }
      left() {
        return this.x;
      }
      right() {
        return this.x + this.w;
      }
  }