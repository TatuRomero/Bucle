function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  background(244, 208, 63);
  fill(27, 79, 114);
  noStroke();
  // square (20,20, 25)
  for (let x = 10; x < width; x += 10)
    // // circle(x,20, 10)
    for (let y = 10; y < height; y += 10)
      // circle(x,y,10)
      square(x, y, random(2, 10));
}
