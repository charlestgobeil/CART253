/**
 * Heat it up
 * Charles Tremblay-Gobeil
 * 
 * If the mouse moves faster, the brush changes color (from white to red).
 */

"use strict";
let ball = {
    fill1: "#fffefe",
    fill2: "#ffc5c5",
    fill3: "#ff7a7a",
    fill4: "#ff4747",
    fill5: "#ff0000",
    size: 120

}
/**
 * white background
*/
function setup() {
    createCanvas(500, 500);
    background(255, 255, 255);
}


/**
 * draw ball and apply function 
*/
function draw() {
    noStroke();
    fill(ball.fill1);
    ellipse(mouseX, mouseY, ball.size, ball.size);

    let mouseSpeed = (abs(movedX) + abs(movedY));
    if (mouseSpeed < 10) {
        ball.fill1 = ball.fill1;
    } else if (mouseSpeed < 20) {
        ball.fill1 = ball.fill2;
    } else if (mouseSpeed < 30) {
        ball.fill1 = ball.fill3;
    } else if (mouseSpeed < 40) {
        ball.fill1 = ball.fill4;
    } else {
        ball.fill1 = ball.fill5;
    }
}
