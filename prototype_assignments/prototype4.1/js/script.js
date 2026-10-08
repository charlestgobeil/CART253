/**
 * Circus
 * Charles Tremblay-Gobeil
 * 
 *Description: A ball that changes color based on how close the mouse gets to its center
 */

"use strict";

let ball = {
    x: 250,
    y: 250,
    w: 250,
    h: 250,
}
/**
white background
*/
function setup() {
    createCanvas(500, 500);
    background(255, 255, 255);
}


/**
 * Make the ball change color with a series of fraction. For each distance, a different color is assigned.
*/
function draw() {

    let distance = dist(ball.x, ball.y, mouseX, mouseY);
    if (distance < ball.w / 7) {
        fill(0, 255, 255);
    } else if (distance < ball.w / 6) {
        fill(255, 0, 255);
    } else if (distance < ball.w / 5) {
        fill(255, 255, 0);
    } else if (distance < ball.w / 4) {
        fill(0, 0, 255);
    } else if (distance < ball.w / 3) {
        fill(0, 255, 0);
    } else if (distance < ball.w / 2) {
        fill(255, 255, 255);
    } else if (distance > ball.w) {
        fill(255, 0, 0);
    } else {
        fill(0, 0, 0);
    }

    ellipse(ball.x, ball.y, ball.w, ball.h);
}


