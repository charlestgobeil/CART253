/**
 * A coin in the dark
 * Charles Tremblay-Gobeil
 * 
 * A minigame where with the arrow keys, you must try every direction until you find the coin. You are in the dark. Good luck!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
//make variables for coin and player. make variables for wrong direction and found coin
let coin = {
    x: 250,
    y: 420,
    r: 25
};
let player = {
    x: 250,
    y: 250,
    w: 20,
    h: 80
};
let wrongDirection = false;
let foundCoin = false;
//create canvas
function setup() {
    createCanvas(500, 500);
}
function draw() {
    //draw black background. display UI and wrong direction message. if player is not in the wrong direction and is below the coin, draw the coin. 
    background(0);
    DisplayUI();
    DisplayWrong();

    if (!wrongDirection && player.y > 250) {
        fill("#ffcf0e");
        noStroke();
        ellipse(coin.x, coin.y, coin.r * 2, coin.r * 2);
    }

    noStroke();
    fill(255, 0, 0);
    ellipse(player.x, player.y, player.w, player.h);

    DisplayRight();
}
//make initial instruction text
function DisplayUI() {
    push();
    fill(255);
    textSize(16);
    textStyle(BOLD);
    textAlign(CENTER, TOP);
    text("You're in the dark! Use the arrow keys to find the coin.", 15, 18, width - 30, 50);
    pop();
}
//make text for when player is in the wrong direction
function DisplayWrong() {
    if (wrongDirection) {
        push();
        fill(255);
        textSize(16);
        textStyle(BOLD);
        textAlign(CENTER, TOP);
        text("Wrong direction! Press space to try again.", width / 2, 88);
        pop();
    }
}
//make text for when player finds coin
function DisplayRight() {
    if (foundCoin) {
        push();
        fill(255);
        textSize(20);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("You found the coin!", width / 2, height / 2);
        pop();
    }
}
//make initial position of player correspond to wrong direction and found coin to be false.
function keyPressed() {
    if (key === " ") {
        player.x = 250;
        player.y = 250;
        wrongDirection = false;
        foundCoin = false;
        return false;
    }

    if (wrongDirection || foundCoin) {
        return false;
    }
    //make player move with every arrow key press. if player is in the wrong direction, set wrong direction to true. if player is in the right direction, set found coin to true
    if (keyCode === DOWN_ARROW) {
        player.y = min(player.y + 100, height - player.h / 2);
        foundCoin = dist(player.x, player.y, coin.x, coin.y) <= coin.r + player.h / 2;
    } else if (keyCode === LEFT_ARROW) {
        player.x -= 100;
        wrongDirection = true;
    } else if (keyCode === RIGHT_ARROW) {
        player.x += 100;
        wrongDirection = true;
    } else if (keyCode === UP_ARROW) {
        player.y -= 100;
        wrongDirection = true;
    }

    return false;
}