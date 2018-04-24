var mic;

function setup() {
  createCanvas (windowWidth,windowHeight);
  mic = new p5.AudioIn ()
  mic.start ();
}

function draw() {
  micLevel = mic.getLevel ();
  var adjutedMicLevel1 = micLevel * 1800;
  var adjustedMicLevel2 = micLevel * 7000;
  var  adjustedMicLevel3 = micLevel * 7700;
  var adjustedMicLevel4 = micLevel * 5900;
  var adjustedMicLevel5 = micLevel * 9000;
  var adjustedMicLevel6 = micLevel * 300;
  var adjustedMicLevel7 = micLevel * 4000;
  background (191,239,255);
  strokeWeight (20);
  fill (191,239,255);
  stroke (255,173,adjustedMicLevel2);
  fill (198,191,255);
  //triangle (100,1000,500,200,900,1000);
  //triangle (adjutedMicLevel1, adjustedMicLevel2,adjustedMicLevel3, adjustedMicLevel4,adjustedMicLevel5,adjustedMicLevel6)
  triangle (100,1000,adjustedMicLevel3, adjustedMicLevel4, 900, 1000);
  
}