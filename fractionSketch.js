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
var plus = 0;
var printErrorGo = 0;
var xloc;

function setup() {
  var canvas  = createCanvas(400, 400);
  angleMode(DEGREES);
  background(225,236,243);
	var sketchHolder = document.getElementById("sketch-holder-fraction");
	canvas.parent(sketchHolder);
}

function drawFractionOne() {
	numerator = document.fraction1.numerator1.value;
	denominator = document.fraction1.denominator1.value;
		if (360 % denominator == 0) {
  		angleOriginal = 360 / denominator;
    	angleNew = 0;
    	setDraw = 1;
    	xLocation = 100;
			plus = 0;
			printErrorGo = 0;
    	document.getElementById("secondFraction").style.display = "block";
		} else {
			setDraw = 0;
			printErrorGo = 1;
			xloc = 50;
			document.getElementById("secondFraction").style.display = "none";
		}
}

function drawFractionTwo() {
	numerator2 = document.fraction2.numerator2.value;
    denominator2 = document.fraction2.denominator2.value;
	if (360 % denominator2 == 0) {
    	angleOriginal2 = 360 / denominator2;
    	angleNew2 = 0;
   		setDraw2 = 1;
    	xLocation2 = 300;
		plus = 0;
		printErrorGo = 0;
    	document.getElementById("combineFractions").style.display = "block";
	} else {
		setDraw2 = 0;
		printErrorGo = 1;
		xloc = 200;
	}
}

function drawOneCombined() {
    angleOriginal = 360 / denominator;
    angleNew = 0;
    setDraw = 3;
    xLocation = 100;
}

function drawTwoCombined() {
    angleOriginal2 = 360 / denominator2;
    angleNew2 = 0;
    xLocation2 = 300;
}


function combineFractions() {
    xLocation = 200;
    xLocation2 = 200;
	plus = 1;
	document.getElementById("helpText").innerHTML = "Can you figure out the total?  If not, why not?";
	document.getElementById("needHintOne").style.display = "block";
}

function getHintOne() {
	document.getElementById("needHintOne").style.display = "none";
	document.getElementById("needHintTwo").style.display = "block";
}

function getHintTwo() {
	document.getElementById("needHintTwo").style.display = "none";
	document.getElementById("needHintThree").style.display = "block";
}


function lcm_two_numbers(x, y) {
  lcmFraction = (Math.abs((x * y) / gcd_two_numbers(x, y)));
  return setNumerators(lcmFraction);
}

function gcd_two_numbers(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

function setNumerators(x) {
  	var multiplier = x / denominator;
	var multiplier2 = x / denominator2;
	numerator = numerator * multiplier2;
	numerator2 = numerator2 * multiplier;
	denominator = lcmFraction;
	denominator2 = lcmFraction;
	}

function getHintThree() {
	xLocation = 100;
	xLocation2 = 300;
	drawOneCombined();
	drawTwoCombined();
	document.getElementById("needHintThree").style.display = "none";
  	return lcm_two_numbers(denominator, denominator2);
	}


function draw() {
	background(225,236,243);
	if (printErrorGo == 1) {
		push();
		textSize(14);
		var errorText = "Please, use one of the following numbers in the denominator: 1, 2, 3, 4, 5, 6, 8, 9, 10, or 12.";
		text(errorText,xloc,100,200,200);
		pop();
	}
  //1st fraction
  if (setDraw == 1) {
    noFill();
    push();
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
			line(0, 0, ((radius*(cos(angleLine)))),((radius*(sin(angleLine)))));
			angleLine += 1;
      	    }
        }
    }
    //draw the red dividing line
	for (i = 0; i < denominator; i++) {
		stroke(0);
		line(0, 0, ((radius*(cos(angleNew)))), ((radius*(sin(angleNew)))));
    	angleNew = angleOriginal * (i + 2);
    }
    //draw outside red circle
    circle(0, 0, 2 * radius);
    pop();
    //write fraction
	writeFraction(100, 100, numerator, denominator, 'red');
}

  //2nd fraction
  if (setDraw2 == 1) {
    noFill();
    push();
    translate(xLocation2,200);
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
    pop();
	writeFraction(300, 300, numerator2, denominator2, 'blue');
  }
  if (plus == 1) {
    line(190,70,210,70);
    line(200,60,200,80);
  }

// showme Fractions
if (setDraw == 3) {
	background(225,236,243);
    //write 1st fraction
  	writeFraction(100, 97, numerator, denominator, 'red');
    //write 2nd fraction
  	writeFraction(300, 298, numerator2, denominator2, 'blue');
	//plus
    line(190,70,210,70);
    line(200,60,200,80);
	// directions
	textSize(12);
	text("Change the numbers in the text boxes above", 50, 200);
	text("to match these fractions", 50, 215);
	text("Hit submit for each one, then add", 50, 230);
	}
}

function writeFraction(xloc1, xloc2, num, den, color) {
	textSize(24);
	fill(color);
	text(num, xloc1, 60);
	fill(0);
	strokeWeight(2);
	line(xloc1-10, 70, xloc1+20, 70);
	fill(0);
	text(den, xloc2, 100);
}
