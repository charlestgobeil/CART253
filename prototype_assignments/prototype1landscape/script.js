/**
 * Landscape Prototype
 * Charles Tremblay-Gobeil
 * 
 * A landscpae composed of ellipses forming a ground and sky, both with gradients. The red sun is shining over.
 */

"use strict";

/**
 * Create canvas and add background color
*/
function setup() {
    createCanvas(500, 500);
    background(250, 210, 250);



}


/**
 * Draw the sun
 */
function draw() {
    fill(255, 255, 255);
    ellipse(350, 140, 160, 160);

    fill(0, 0, 0);
    ellipse(350, 140, 150, 150);

    //Draws the ground
    fill(0, 60, 50);
    ellipse(400, 500, 500, 250);
    fill(0, 50, 50);
    ellipse(450, 500, 500, 250);
    fill(0, 40, 50);
    ellipse(500, 500, 500, 250);
    fill(0, 30, 50);
    ellipse(550, 500, 500, 250);
    fill(0, 20, 50);
    ellipse(600, 500, 500, 250);
    fill(0, 10, 50);
    ellipse(650, 500, 500, 250);
    fill(0, 70, 50);
    ellipse(150, 500, 500, 250);
    fill(0, 60, 50);
    ellipse(100, 500, 500, 250);
    fill(0, 50, 50);
    ellipse(50, 500, 500, 250);
    fill(0, 40, 50);
    ellipse(0, 500, 500, 250);
    fill(0, 30, 50);
    ellipse(-50, 500, 500, 250);
    fill(0, 20, 50);
    ellipse(-100, 500, 500, 250);
    fill(0, 10, 50);
    ellipse(-150, 500, 500, 250);
    fill(0, 0, 50);
    ellipse(-200, 500, 500, 250);
    //Draws the sky
    fill(255, 69, 0);
    ellipse(150, 0, 500, 250);
    fill(255, 100, 0);
    ellipse(100, 0, 500, 250);
    fill(255, 125, 0);
    ellipse(50, 0, 500, 250);
    fill(255, 145, 0);
    ellipse(0, 0, 500, 250);
    fill(255, 160, 0);
    ellipse(-50, 0, 500, 250);
    fill(255, 170, 0);
    ellipse(-100, 0, 500, 250);
    fill(255, 185, 0);
    ellipse(-150, 0, 500, 250);
    fill(255, 200, 0);
    ellipse(-200, 0, 500, 250);
    fill(255, 200, 0);
    ellipse(400, 0, 500, 250);
    fill(255, 185, 0);
    ellipse(450, 0, 500, 250);
    fill(255, 170, 0);
    ellipse(500, 0, 500, 250);
    fill(255, 160, 0);
    ellipse(550, 0, 500, 250);
    fill(255, 130, 0);
    ellipse(600, 0, 500, 250);
    fill(255, 100, 0);
    ellipse(650, 0, 500, 250);



}