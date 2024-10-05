function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240,240,240);
  noFill();





  // draw a column of rows
  for (let y = 10; y < windowHeight; y += 30) {
    // draw a row of squares
    for (let x = 10; x < windowWidth; x += 30) {
      let rr = random(255);
      let rg = random(255);
      let rb = random(255);
    
      stroke(rr, rg, rb);
      rect(x, y,20,20,2,2,2,2);
      let c = random(10);
      strokeWeight(c);

    }
  }

}

function draw() {

}
