/**
 * Numbers
 * Charles Tremblay-Gobeil
 * 
 * A project where the user can press any number key from 0-9 and it makes the number appear
 */

"use strict";

//setup the loading of font
let font = undefined;

//create an array for the text for every number key
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
 * Canvas is created and preload font 
*/
async function setup() {
    createCanvas(500, 500);
    font = await loadFont("assets/font/maisty.regular.ttf");
}
/**
 * draws a new background every frame
 * draws instructions
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

    //draw the number that the user presses
    if (key in numberNames) {
        push();
        fill("#ff0000");
        textFont(font);
        textSize(100);
        textAlign(CENTER, CENTER);
        text(numberNames[key], width / 2, height / 2);
        pop();
    }
}