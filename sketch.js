let wrench;
let spacing = 200;

function preload(){
  wrench = loadModel('tattooobject.obj', true);

}

function setup() {
  createCanvas(800, 800, WEBGL);
}

function draw() {
  background(0);

 noStroke();

normalMaterial()


for (x = 0; x <= width; x += spacing){
  for (y = 0; y <= width; y += spacing){

  push();
  translate(-400 + x, -400 + y)
  rotateX(frameCount * 0.01 + x);
  rotateY(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  scale(1);
  model(wrench);
  pop();
  }
}
}
