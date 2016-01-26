var NoiseScale = 0.004;
var NoiseOffsetX = 0;
var NoiseOffsetY = 0;
var i = 0;
var z = 0;

function setup() {
  // uncomment this line to make the canvas the full size of the window
  createCanvas(windowWidth, windowHeight);
  background(0);
  // smooth();
}

function draw() {
  // draw stuff here
	background(0);

    stroke(255,255, 255, 64);

	// noiseOffsetXOne += 5;
 //    noiseOffsetYOne += 7.1;
    var streamOne = new stream(0, 0);
    streamOne.update();
    var streamTwo = new stream(1000, 1000);
    streamTwo.update();
    i++;
}


function stream(noiseX, noiseY) {
  var x = 0;
  var y = windowHeight/2.0;
  // var y = random(windowHeight);
  var vx = 0;
  var vy = 0;
  var pcnt = 100;

	  this.update = function() {
	  	while ( (x >= 0) && (x < windowWidth) && (y < windowHeight) && (y >= 0)) {
	    point(x, y);

	    var xNoise = noise((pcnt + noiseX + frameCount) * NoiseScale);
	    var yNoise = noise((pcnt + noiseY + frameCount) * NoiseScale);

	    vx = ((2 * vx) + 1 + map(xNoise, 0, 1, -1, 1)) / 4;
	    vy = ((3 * vy) + map(yNoise, 0, 1, -1, 1)) / 4;
	    // println(pcnt);
	    x += vx;
	    y += vy;
	    pcnt++;
	    // println(x);
	  }
  }
  
  
}