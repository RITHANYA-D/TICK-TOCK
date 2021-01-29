function setup() {

  createCanvas(1366,657);

  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);

}

function draw() {
  
  background("black");
  
  push()
  hrAngle = map(hr, 0, 60, 0, 360);
  //rotate(hrAngle);
  stroke("red");
  strokeWeight(7);
  line(800, 350, 600, 400);
  pop()

  push()
  mnAngle = map(mn, 0, 60, 0, 360);
  //rotate(mnAngle);
  stroke("blue");
  strokeWeight(7);
  line(600, 300, 600, 400);
  pop()

  push()
  scAngle = map(sc, 0, 60, 0, 360);  
  //rotate(scAngle);
  stroke("lime");
  strokeWeight(7);
  line(500, 500, 600, 400);
  pop()


  drawSprites();

}