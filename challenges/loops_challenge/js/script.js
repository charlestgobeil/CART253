/**
 * Lines (Loops challenge)
 * Charles Tremblay-Gobeil
 * 
 * A series of lines across the canvas
 */

"use strict";
let x1 = 50;
let y1 = 0;
let x2 = 50;
let y2 = lenght;

let strokeValue = 0;

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
    background("pink");


    //use a while loop to draw lines across the canvas with increasing thickness and gradually lightening colour
    let x = 0;
    let strokeValue = 0;
    while (x < width) {
        stroke(strokeValue);
        line(x, 0, x, height);
        x += 50;
        strokeValue += 25;
    }
}