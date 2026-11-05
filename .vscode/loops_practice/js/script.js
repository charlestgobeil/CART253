/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let clownImage = undefined;
//let xPos = 0;


let x = 20;
let y = 250;
let imageWidth = 40;


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    clownImage = await loadImage("./images/clown.jpg");
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');

    //xPos++;
    while (x < width) {
        image(clownImage, x, y, imageWidth, imageWidth);
        x = x + imageWidth;
    }

    noLoop();
}