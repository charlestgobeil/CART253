/**
 * Paint it all
 * Charles Tremblay-Gobeil
 * 
 * A minigame where you have to move the brush in order to 
 */

"use strict";
let gameOver = false
let score = 0
/**
 // Make background white
*/
function setup() {
    createCanvas(500, 500)
    background(255, 255, 255);
}


/**
 //Make the mouse a brush, display instructions and create win message function

*/
function draw() {
    noStroke();
    fill(random);
    ellipse(mouseX, mouseY, 90, 90);
    //display instructions
    fill("#dc0909");
    textAlign(CENTER, CENTER);
    textSize(28);
    text("Use your mouse to fill the canvas black", width / 2, height / 3 - 40);
    //
    let mouseSpeed = (abs(movedX) + abs(movedY));
    if (mouseSpeed > 0) {
        score += 1
    }
    if (score >= 10) {
        gameOver = true
    }
    if (gameOver) {
        push();
        fill(random);
        textSize(40);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("GOOD JOB!", width / 2, height / 3);
        pop();
    }
}