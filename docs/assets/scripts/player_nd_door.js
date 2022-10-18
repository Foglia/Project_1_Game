// Player elements

class Player {
    constructor(x, y, w, h, color, ctx) {
       this.x = x;
       this.y = y;
       this.w = w;
       this.h = h;
       this.color = color;
       this.ctx = ctx;
       this.speedX = 5; 
       this.speedY = 0;
       this.image = new Image();
       this.image.src = "/docs/assets/images/oldlady.png";
    }
    draw(){

        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
    }

    resetPosition() {
        this.x = 1200; 
        this.y = 340;  
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

  

