/**
 * Paint it all
 * Charles Tremblay-Gobeil
 * 
 * A minigame where you have to brush the entire canvas black. Once it is complete, you won!
 */

"use strict";
let gameOver = false
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
    fill(0);
    ellipse(mouseX, mouseY, 90, 90);
    //display instructions
    fill("#dc0909");
    textAlign(CENTER, CENTER);
    textSize(28);
    text("Use your mouse to fill the canvas black", width / 2, height / 3 - 40);

    displayUI();


}
//make the congratulations text appear when canvas is all black
function displayUI() {
    if (gameOver = true);
    push();
    fill("#f3fd39")
    textSize(40);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("GOOD JOB!", width / 2, height / 3);
    pop();
}
//make gameOver become true once canvas is all black