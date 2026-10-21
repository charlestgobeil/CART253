/**
 * Paint it all
 * Charles Tremblay-Gobeil
 * 
 * A minigame where you have to move the brush in order to get your score to increase. Reach 50 to win!
 */

"use strict";
let gameOver = false
let score = 0
/**
 // Make background white
*/
function setup() {
    createCanvas(500, 500);
    background(255, 255, 255);

}


/**
 //Make the mouse a brush, display instructions and create win message function

*/
function draw() {
    noStroke();
    fill(random(150, 255), random(150, 255), random(150, 255));
    ellipse(mouseX, mouseY, 90, 90);
    //display instructions as well as score. Since score changes every second, add white rectangle
    fill("#070707");
    textAlign(CENTER, CENTER);
    textSize(20);
    text("DONT STOP MOVING MOUSE, REACH 50 SCORE", width / 2, height / 3 - 40);
    fill(255);
    rect(width / 2 - 150, height / 3 + 95, 300, 90);
    fill("#000000");
    textSize(60);
    text("Score: " + ceil(score), width / 2, height / 3 + 140);

    //make score increase when mouse moves
    let mouseSpeed = (abs(movedX) + abs(movedY));
    if (mouseSpeed > 0) {
        score += 0.1
    }
    //make game end and display message when score reaches 50
    if (score >= 50) {
        gameOver = true
    }
    if (gameOver) {
        push();
        fill("#050504");
        textSize(40);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("GOOD JOB!", width / 2, height / 3);
        pop();
    }
}