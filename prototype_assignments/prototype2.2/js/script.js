/**
 * (Very) evil face
 * Charles Tremblay-Gobeil
 * 
 * This is a very, very evil face created as simply as possible. Don't stare too long at it's eyes.
 */

"use strict";

/**
 * canvas creation and black background
*/
function setup() {

    createCanvas(500, 500);
    background(0, 0, 0);
}


/**
 * Draws face
*/
function draw() {
    fill(245, 190, 200)
    ellipse(250, 250, 250, 400)
    //Draws eyes and pupils
    fill(255, 255, 255)
    circle(320, 220, 40)
    circle(180, 220, 40)

    fill(255, 20, 70)
    circle(320, 220, 15)
    circle(180, 220, 15)

    stroke(120, 50, 70)
    strokeWeight(8)
    noFill()
    line(130, 140, 220, 190)
    line(280, 190, 370, 140)
    //Draws mouth
    fill(255, 110, 130)
    arc(250, 300, 140, 90, 0, PI)




}