/**
 * Title of Project
 * Author Name
 * 
 * A minigame where you have to press the spacebar 10 times before the timer runs out. If you don't, game over!
 */

"use strict";
let timer = 5;
let score = 0;
let gameOver = false;
let gameWon = false;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255, 255, 255);
    //display timer and score
    fill("#dc0909");
    textAlign(CENTER, CENTER);
    textSize(28);
    text("Press SPACE as fast as you can!", width / 2, height / 3 - 40);
    fill("#000000");
    textSize(24);
    text("Time remaining: " + ceil(timer), width / 2, height / 3);
    text("Score: " + score, width / 2, height / 3 + 40);



    console.log(gameOver);

    //make timer decrease by 1 every second. If timer reaches 0, gameOver=true
    if (!gameOver) {
        //make time decrease by 1 every second
        timer -= 0.013;

        console.log(timer);
    }
    //If timer reaches 0, gameOver=true. Display game over message
    if (timer <= 0) {
        gameOver = true;
        fill(255, 0, 0);
        textSize(24);
        textAlign(CENTER, CENTER);
        text("Game over, gotta be quicker than that buddy!", width / 2, height / 7);
    }
    //If score=10, display win message and stop timer from decreasing
    if (score >= 10) {
        gameWon = true;
        fill(0, 255, 0);
        textSize(48);
        textAlign(CENTER, CENTER);
        text("You win!", width / 2, height / 3);

    }

}