/**
 * Lines (Loops challenge)
 * Charles Tremblay-Gobeil
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {

    //add a gradient made out of lines to the background
    let c1 = color(255, 0, 0);
    let c2 = color(0, 0, 255);
    for (let x = 0; x < width; x += 0.5) {
        stroke(lerpColor(c1, c2, x / width));
        line(x, 0, x, height);
    }



    //use a while loop to draw lines across the canvas with increasing thickness and gradually lightening colour
    let x = 0;
    let strokeValue = 0;
    while (x < width) {
        stroke(strokeValue);
        line(x, 0, x, height);
        x += 50;
        strokeValue += 25;
    }

    //do the same thing with horizontal lines
    let y = 0;
    let strokeValue2 = 0;
    while (y < height) {
        stroke(strokeValue2);
        line(0, y, width, y);
        y += 50;
        strokeValue2 += 25;
    }


}