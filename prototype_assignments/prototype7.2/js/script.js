/**
 * Move move move
 * Charles Tremblay-Gobeil
 * 
 * A minigame where you can go right, left, up or down with the arrows. 
 * Only one direction is right, if you go the wrong way you die and try again with spacebar.
 */

"use strict";
//array: dialog options
let options = ["Wrong direction, you died. Try again with spacebar", "This was the right direction, you survived",];

//variables for player
let player = {
    x: 250,
    y: 250,
    w: 20,
    h: 80,
    fill: "red"
};

//set scenarios as false, intially
let wrongDirection = false;
let rightDirection = false;


/**
 * create Canvas
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * draw player, background and name functions for text.
*/
function draw() {

    //background
    background(255);

    displayUI();
    displayWrong();
    displayRight();

    //draw player
    noStroke();
    fill(player.fill);
    ellipse(player.x, player.y, player.w, player.h);

}

//display instructions
function displayUI() {
    push();
    fill(0);
    textSize(16);
    textStyle(BOLD);
    textAlign(CENTER, TOP);
    text("Use arrow keys to move. Find the right direction", 15, 18, width - 30, 50);
    pop();
}
// display wrong direction message
function displayWrong() {
    if (wrongDirection) {
        push();
        fill("red");
        textSize(25);
        textStyle(BOLD);
        textAlign(CENTER, TOP);
        text(options[0], 15, 68, width - 30, 150);
        pop();
    }
}
//display right direction message
function displayRight() {
    if (rightDirection) {
        push();
        fill("green");
        textSize(25);
        textStyle(BOLD);
        textAlign(CENTER, TOP);
        text(options[1], 15, 68, width - 30, 150);
        pop();
    }
}
// Move with the arrow keys; moving right is the correct direction.
function keyPressed() {
    if (key === " ") {
        player.x = 250;
        player.y = 250;
        wrongDirection = false;
        rightDirection = false;
        return false;
    }

    if (wrongDirection || rightDirection) {
        return;
    }

    if (keyCode === UP_ARROW) {
        player.y -= 100;
        wrongDirection = true;
    } else if (keyCode === DOWN_ARROW) {
        player.y += 100;
        wrongDirection = true;
    } else if (keyCode === LEFT_ARROW) {
        player.x -= 100;
        wrongDirection = true;
    } else if (keyCode === RIGHT_ARROW) {
        player.x += 100;
        rightDirection = true;
    } else {
        return;
    }

    return false;
}