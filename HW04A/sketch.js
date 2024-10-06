function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240, 240, 240);
  noFill();

  // draw a column of rows
  for (let y = 10; y < windowHeight; y += random(30, 60)) {
    // draw a row of squares
    for (let x = 10; x < windowWidth; x += random(30, 60)) {
      let rr = random(255);
      let rg = random(255);
      let rb = random(255);
      let alpha = random(100, 255); // Adding random transparency

      stroke(rr, rg, rb, alpha);
      push();
      let c = random(10);
      strokeWeight(c);
      translate(x, y);
      angleMode(DEGREES);
      let d = random(15);
      let e = random(-15);
      let de = random([-15, 15]);
      if (de > 0) {
        rotate(d);
      } else {
        rotate(e);
      }
      let shapeSize = random(10, 25); // Random size of shapes
      let shapeType = random(["rect", "circle", "triangle"]); // Random shape type

      // Randomly draw either a rectangle, circle, or triangle
      if (shapeType === "rect") {
        rect(
          0,
          0,
          shapeSize,
          shapeSize,
          random(0, 10),
          random(0, 10),
          random(0, 10),
          random(0, 10)
        );
      } else if (shapeType === "circle") {
        ellipse(0, 0, shapeSize);
      } else if (shapeType === "triangle") {
        triangle(0, 0, shapeSize, 0, shapeSize / 2, shapeSize);
      }

      pop();
    }
  }
}

function draw() {}
