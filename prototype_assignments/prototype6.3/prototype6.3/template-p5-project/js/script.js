/**
 * Lines of doom
 * Charles Tremblay-Gobeil
 * 
 * A set of lines that move in unisson from left to right to left and so on
 */

"use strict";
let barre = {
    x: 20,
    y: 5,
    w: 40,
    h: 5
}

let barspeed = 4
/**
 * pink background
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(200, 0, 200)
    drawLine(barre.x, barre.y, barre.w, barre.h)

}

function drawLine(x, y, w, h) {
    noStroke();
    fill(0);
    rect(x, y + 20, w, h);
    rect(x, y + 40, w, h);
    rect(x, y + 60, w, h);
    rect(x, y + 80, w, h);
    rect(x, y + 100, w, h);
    rect(x, y + 120, w, h);
    rect(x, y + 140, w, h);
    rect(x, y + 160, w, h);
    rect(x, y + 180, w, h);
    rect(x, y + 200, w, h);
    rect(x, y + 220, w, h);
    rect(x, y + 240, w, h);
    rect(x, y + 260, w, h);
    rect(x, y + 280, w, h);
    rect(x, y + 300, w, h);
    rect(x, y + 320, w, h);
    rect(x, y + 340, w, h);
    rect(x, y + 360, w, h);
    rect(x, y + 380, w, h);
    rect(x, y + 400, w, h);
    rect(x, y + 420, w, h);
    rect(x, y + 440, w, h);
    rect(x, y + 460, w, h);
    rect(x, y + 480, w, h);


    barre.x = barre.x + barspeed

    if (barre.x >= 460) {
        barspeed = -4
    }
    if (barre.x <= 0) {
        barspeed = 4
    }
}


