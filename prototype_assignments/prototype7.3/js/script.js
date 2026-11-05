/**
 * Title of Project
 * Author Name
 * 
 * A project where the user can press any number key from 0-9 and it makes the number appear
 */

"use strict";
const numberNames = {
    "0": "ZERO",
    "1": "ONE",
    "2": "TWO",
    "3": "THREE",
    "4": "FOUR",
    "5": "FIVE",
    "6": "SIX",
    "7": "SEVEN",
    "8": "EIGHT",
    "9": "NINE",
}
/**
 * Canvas is created and instructions are displayed
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * draws a new background every frame
 * draws the number that the user presses on the keyboard
 * 
*/
function draw() {
    background('white');

    //instructions
    push();
    fill(0);
    textSize(16);
    textStyle(BOLD);
    textAlign(CENTER, TOP);
    text("Press number keys", 15, 18, width - 30, 50);
    pop();


}