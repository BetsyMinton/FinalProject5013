var radius = 70;

var xLocation;
var numerator;
var denominator;
var angleOriginal ;
var angleNew;
var angleLine = 0;
var redDoneAngle;

var xLocation2;
var numerator2;
var denominator2;
var angleOriginal2;
var angleNew2;
var angleLine2 = 0;
var blueDoneAngle;

var setDraw = 0;
var setDraw2 = 0;

function drawFractionOne() {
    numerator = document.fraction1.numerator1.value;
    denominator = document.fraction1.denominator1.value;
    angleOriginal = 360 / denominator;
    angleNew = 0;
    setDraw = 1;
    xLocation = 100;
    document.getElementById("secondFraction").style.display = "block";
}

function drawFractionTwo() {
    numerator2 = document.fraction2.numerator2.value;
    denominator2 = document.fraction2.denominator2.value;
    angleOriginal2 = 360 / denominator2;
    angleNew2 = 0;
    setDraw2 = 1;
    xLocation2 = 200;
    document.getElementById("combineFractions").style.display = "block";
}

function combineFractions() {
    xLocation = 200;
    xLocation2 = 0;
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  background(200);
}

function draw() {
  background(240);
  //1st fraction
  if (setDraw == 1) {
    noFill();
    translate(xLocation,200);
    stroke(0);
    //fill in the fraction
    for (d = 0; d < denominator; d++) {
      //draw all the red lines
      for (n = 0; n < numerator; n++) {
        //draw 1 set of red lines
        for (l = 0; l < angleOriginal; l++) {
          stroke(255,0,0,20);
          line(0, 0, ((radius*(cos(angleLine)))), ((radius*(sin(angleLine)))));
          angleLine += 1;
          }
      }
      redDoneAngle = angleLine;
      //draw empty sections
      for (diff = 0; diff < (denominator - numerator); diff++) {
        //draw 1 set of empty lines
        for (e = 0; e < angleOriginal; e++) {
          noStroke();
          line(0, 0, ((radius*(cos(angleLine)))), ((radius*(sin(angleLine)))));
          angleLine += 1;
          }
        }
    }
    //draw the red dividing lines
    for (i = 0; i < denominator; i++) {
      stroke(0);
      line(0, 0, ((radius*(cos(angleNew)))), ((radius*(sin(angleNew)))));
      angleNew = angleOriginal * (i + 2);
      }
    //draw outside red circle
    circle(0, 0, 2 * radius);
  }


  //2nd fraction
  if (setDraw2 == 1) {
    noFill();
    translate(xLocation2,0);
    stroke(0);
    angleLine2 = redDoneAngle;
    //fill in the fraction
    for (d2 = 0; d2 < denominator2; d2++) {
      //draw all the blue lines
      for (n2 = 0; n2 < numerator2; n2++) {
        //draw 1 set of blue lines
        for (l2 = 0; l2 < angleOriginal2; l2++) {
          stroke(0,0,255,20);
          line(0, 0, ((radius*(cos(angleLine2)))), ((radius*(sin(angleLine2)))));
          angleLine2 += 1;
          }
      }
      //draw empty sections
      for (diff2 = 0; diff2 < (denominator2 - numerator2); diff2++) {
        //draw 1 set of empty lines
        for (e2 = 0; e2 < angleOriginal2; e2++) {
          noStroke();
          line(0, 0, ((radius*(cos(angleLine2)))),((radius*(sin(angleLine2)))));
          angleLine2 += 1;
          }
        }
    }
    //draw the blue dividing lines
    angleNew2 = redDoneAngle;
    for (i2 = 0; i2 <= denominator2; i2++) {
      stroke(0);
      line(0, 0, ((radius*(cos(angleNew2)))), ((radius*(sin(angleNew2)))));
      angleNew2 = redDoneAngle + (angleOriginal2 * (i2 + 2));
      }
    //draw outside red circle
    circle(0, 0, 2 * radius);

  }
}
