function patternA(x, y, z) {
  strokeWeight(2);
  stroke(0);
  noFill();
  rectMode(CENTER);
  rect(x, y, z);

  stroke(255, 0, 0);
  let midLeftX = x - z / 2;
  let midLeftY = y;
  let midRightX = x + z / 2;
  let midRightY = y;
  line(midLeftX, midLeftY, midRightX, midRightY); //a red horizontal line

  let bottomLeftX = x - z / 2;
  let bottomLeftY = y + z / 2;
  let topRightX = x + z / 2;
  let topRightY = y - z / 2;
  line(bottomLeftX, bottomLeftY, topRightX, topRightY);
  // a red diagonal line centered on the axis between the lower left and upper right corners
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  for (let b = 0; b < windowHeight; b += random(30, 120)) {
    // draw a row of the pattern
    for (let a = 0; a < windowWidth; a += random(30, 120)) {
      push();
      translate(a, b);
      angleMode(DEGREES);
      //let d = random(10);
      //let e = random(-10);
      //let de = random([-10, 10]);
      //if (de > 0) {
      //rotate(d);
      //} else {
      //rotate(e);
      //}
      let numRotations = floor(random(6, 11)); // Random number of rotations between 6 and 10
      let c = random(5, 60); //random size of pattern
      // Rotate and draw patternA based on the random number of rotations
      for (let i = 0; i < numRotations; i++) {
        push();
        let angle = 360 / numRotations; // Calculate the angle based on the number of rotations
        rotate(i * angle); // Rotate by the calculated angle for each iteration
        patternA(0, 0, c); // Draw the pattern at the current rotation
        pop();
      }
      //patternA(a, b, c);
      //patternA(a*2, b*2, c*2);
      //patternA(a*4, b*4, c*4);
      pop();
    }
  }
}

function draw() {}
