function patternA(x, y, z, z) {
  strokeWeight(2);
  stroke(0); // 设置线条颜色为黑色
  noFill(); // 不填充正方形
  rectMode(CENTER);
  rect(x, y, z, z); // 绘制正方形

  stroke(255, 0, 0); // 设置线条颜色为红色
  let midLeftX = x - z / 2; // 左侧中点的x坐标
  let midLeftY = y; // 左侧中点的y坐标
  let midRightX = x + z / 2; // 右侧中点的x坐标
  let midRightY = y; // 右侧中点的y坐标
  line(midLeftX, midLeftY, midRightX, midRightY); // 绘制水平线
  // 红色对角线（左下角到右上角）
  let bottomLeftX = x - z / 2; // 左下角的x坐标
  let bottomLeftY = y - z / 2; // 左下角的y坐标
  let topRightX = x + z / 2; // 右上角的x坐标
  let topRightY = y + z / 2; // 右上角的y坐标
  line(bottomLeftX, bottomLeftY, topRightX, topRightY); // 绘制对角线
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
