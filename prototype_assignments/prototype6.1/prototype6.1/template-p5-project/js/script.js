/**
 * Title: THE EYE
 * Author: Your Name
 *
 * Description:An eye with a pupil of constantly changing colors. 
 */

"use strict";
//Create black canvas
function setup() {
    createCanvas(500, 500);
    background(0);
}
//Draw the components of the eye. Make a function to set the positions of the pupil components.
function draw() {
    // Draw the eye shape before the pupil so it stays visible behind it
    stroke(128);
    strokeWeight(8);
    fill(255);
    ellipse(250, 250, 400, 300);

    //Draw a series of random, constantly changing colored circles for the pupil. 
    // Set variables are the positions, usable for the center and the rings of color
    drawCircle(250, 250);

    //Draw highlight in eye
    fill(255)
    circle(320, 200, 50)
}

function drawCircle(x, y, circleColor) {
    //Draw a series of randomly colored circles. The last one is black (center of eye)
    fill(random(255), random(255), random(255));
    noStroke();
    circle(x, y, 300);

    fill(random(255), random(255), random(255));
    noStroke();
    circle(x, y, 290);

    fill(random(255), random(255), random(255));
    noStroke();
    circle(x, y, 280);

    fill(random(255), random(255), random(255));
    noStroke();
    circle(x, y, 270);

    fill(random(255), random(255), random(255));
    noStroke();
    circle(x, y, 260);

    fill(random(255), random(255), random(255));
    noStroke();
    circle(x, y, 250);

    fill(random(255), random(255), random(255));
    noStroke();
    circle(x, y, 240);

    fill(random(255), random(255), random(255));
    noStroke();
    circle(x, y, 230);

    fill(random(255), random(255), random(255));
    noStroke();
    circle(x, y, 220);

    fill(random(255), random(255), random(255));
    noStroke();
    circle(x, y, 210);

    fill(random(255), random(255), random(255));
    noStroke();
    circle(x, y, 200);

    fill(random(255), random(255), random(255));
    noStroke();
    circle(x, y, 190);

    fill(random(255), random(255), random(255));
    noStroke();
    circle(x, y, 180);

    fill(random(255), random(255), random(255));
    noStroke();
    circle(x, y, 170);

    fill(0);
    noStroke();
    circle(x, y, 160);



}