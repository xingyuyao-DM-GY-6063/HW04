function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240, 240, 240);
  noFill();

  // draw a column of rows
  for (let y = 10; y < windowHeight; y += 30) {
    // draw a row of squares
    for (let x = 10; x < windowWidth; x += 30) {
      let rr = random(255);
      let rg = random(255);
      let rb = random(255);

      stroke(rr, rg, rb);
      push();
      let c = random(10);
      strokeWeight(c);
      translate(x, y);
      angleMode(DEGREES);
      let d = random(15);
      let e = random(-15);
      let de = random([-15,15]);
      if (de > 0) {
        rotate(d);
      } else {
        rotate(e);
      }
      rect(0, 0, 22, 22, 2, 2, 2, 2);
      pop();
    }
  }
}

function draw() {}
