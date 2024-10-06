function patternA(x, y, z, z) {
  strokeWeight(2);
  stroke(0); 
  noFill(); 
  rectMode(CENTER);
  rect(x, y, z, z); 

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

  for (let b = 0; b < windowHeight; b += 30) {
    // draw a row of the pattern
    for (let a = 0; a < windowWidth; a += 30) {
      push();
      translate(a, b);
      angleMode(DEGREES);
      let d = random(10);
      let e = random(-10);
      let de = random([-10, 10]);
      if (de > 0) {
        rotate(d);
      } else {
        rotate(e);
      }
      patternA(a, b, 50, 50);
      pop();
    }
  }
}

function draw() {}
