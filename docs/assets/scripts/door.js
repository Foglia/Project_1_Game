class Door {
    constructor(x, y, w, h, color) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.color = color;
        this.ctx = ctx; //without it would not work
        this.image = new Image();
        this.image.src = "docs/assets/images/door.png";
    }
    draw(){
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
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