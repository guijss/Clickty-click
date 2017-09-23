var circle = [];
var checkColor = 1;

function setup() {
  var a = 0;
  createCanvas(400, 400);
  for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 15; j++) {
      circle[a] = new ClickCircle(i*26+18, j*26+18);
      a++;
    }
  }
}

function draw() {
  background(0);
  for (var i = 0; i < circle.length;i++){
    circle[i].display();
  }
}

function mousePressed() {
  for (var i = 0; i < circle.length;i++){
    circle[i].clicked();
  }
}

function ClickCircle(x, y) {
  this.x = x;
  this.y = y;
  this.col = color(255, 100);

  this.display = function(){
  stroke(255);
  fill(this.col);
  ellipse(this.x, this.y, 20);
}

  this.clicked = function() {
    if (dist(this.x, this.y, mouseX, mouseY) <= 10){
      if (checkColor == 1) {
        this.col = color(255, 0, 200);
        checkColor = 2;
      } else {
        this.col = color(255, 100);
        checkColor = 1;
      }
    }
  }
}
