var squares = [];

function setup() {
  createCanvas(displayWidth, displayHeight);
  for(let i = 0; i < 100; i++) {
    squares[i] = new zoomie();
  }
}

function draw() {
  background(245, 229, 171);

  for(let s in squares) {
    squares[s].exist();
  }
}


class zoomie {
  constructor() {
    this.x = random(0, displayWidth);
    this.y = random(0, displayHeight);
    this.size = random(5, 300);
    this.c = color(random(20,255), random(20,255), random(20,255), random(100,150));
    this.vel = random(-4, -0.5);
  }

  reset() {
    this.size = random(5, 300);
    this.x = displayWidth + 5 + this.size/2;
    this.y = random(0, displayHeight);
    this.c = color(random(20,255), random(20,255), random(20,255), random(100,150));
    this.vel = random(-4, -0.5);
  }

  move() {
    this.x += this.vel;
  }

  exist() {
    rectMode(CENTER);
    this.move();
    fill(this.c);
    strokeWeight(0);
    rect(this.x, this.y, this.size);

    if(this.x < -this.size) {
      this.reset();
    }
  }
}