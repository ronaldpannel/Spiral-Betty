let cx, cy;
// let angleInc = 0.005;
// let radiusMax = 200;
let img;
let radiusInc = 0.01;

let radiusMaxSlider;
let maxSliderLabel;
let angleIncSlider;
let angleIncLabel;
let imgColorPicker;
let imgColorLabel;
let bgColorPicker;
let bgColorLabel;
let container;
function preload() {
  img = loadImage("rosie.png");
}
function setup() {
  let canvas = createCanvas(400, 400);
  container = document.getElementById("container");
  canvas.parent("container");
  img.resize(width, 0);

  cx = width / 2;
  cy = height / 2;

  GUI();

  upDateCanvas();
}

function GUI() {
  radiusMaxSlider = createSlider(0, 300, 150, 10);
  radiusMaxSlider.position(10);
  radiusMaxSlider.size(260);
  radiusMaxSlider.input(upDateCanvas);
  maxSliderLabel = createP("Max Radius");
  maxSliderLabel.position(300, 390);

  radiusMaxSlider.parent("container");
  maxSliderLabel.parent("container");

  angleIncSlider = createSlider(0.001, 0.01, 0.005, 0.001);
  angleIncSlider.position(10, 430);
  angleIncSlider.size(260);
  angleIncSlider.input(upDateCanvas);

  angleIncLabel = createP("Angle Increment");
  angleIncLabel.position(290, 415);

  angleIncSlider.parent("container");
   angleIncLabel.parent("container");

  imgColorPicker = createColorPicker(color(255, 0, 0));
  imgColorPicker.position(10, 460);
  imgColorPicker.size(260);
  imgColorPicker.input(upDateCanvas);
  imgColorLabel = createP("Image Color");
  imgColorLabel.position(300, 450)

   imgColorPicker.parent("container");
   imgColorLabel.parent("container");


  bgColorPicker = createColorPicker(color(220));
  bgColorPicker.position(10, 505);
  bgColorPicker.size(260);
  bgColorPicker.input(upDateCanvas);
  bgColorLabel = createP(" BG Color");
  bgColorLabel.position(300, 495);

   bgColorPicker.parent("container");
   bgColorLabel.parent("container");
}

function upDateCanvas() {
  fill(255);

  //image(img, 0, 0)
  let angle = 0;
  let radiusMax = radiusMaxSlider.value();
  let angleInc = angleIncSlider.value();
  let imgColor = imgColorPicker.value();
  let bgColor = bgColorPicker.value();
  background(bgColor);
  stroke(imgColor);
  fill(imgColor);
  for (let r = 0; r < radiusMax; r += radiusInc) {
    let x = cx + r * cos(angle);
    let y = cy + r * sin(angle);

    let pixelVal = img.get(x, y);
    let sw = map(brightness(pixelVal), 100, 0, 1, 5);
    strokeWeight(sw);
    ellipse(x, y, 3, 3);
    angle += angleInc;
  }
}

function windowResized() {
  resizeCanvas(400, 400);
}
