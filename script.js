// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
  console.log("this is a js comment");

  function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    background(255);
  }

  function draw() {

    // Although empty here, draw() is needed so
    // the sketch can process user input events
    // (mouse presses in this case).
      //line(mouseX, 0, mouseX, 250);

    frameRate(20);
    smooth();

    //Fade out
    fill(255,25);
    noStroke();
    rect(0,0,width,height);

    //Change colors
    var r = random(100,255);
    fill(r,9,100);
    noStroke();

    //Ripples
    ellipseMode(CENTER);
    r+=5;
    ellipse(mouseX,mouseY,r,r);

    // Reset y back to 0 when it gets to the bottom of window
    if (r > width+150) {
      r = 0;
    }
  }
