/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');
    complexCircles();
    complexCircles_2();
    complexCircles_3();
    complexCircles_P(width / 2, height / 2);
}

function complexCircles() {
    push();
    fill(255, 191, 0);
    ellipse(width / 2, height / 2, 80, 80);
    fill(255, 2, 255);
    ellipse(width / 2, height / 2, 60, 60);
    fill(255, 191, 0);
    ellipse(width / 2, height / 2, 40, 40);
    pop();
}
function complexCircles_2() {
    push();
    fill(255, 191, 0);
    ellipse(width / 2 - 100, height / 2, 80, 80);
    fill(255, 2, 255);
    ellipse(width / 2 - 100, height / 2, 60, 60);
    fill(255, 191, 0);
    ellipse(width / 2 - 100, height / 2, 40, 40);
    pop();
}
function complexCircles_3() {
    push();
    fill(255, 191, 0);
    ellipse(width / 2 - 100, height / 2 - 100, 80, 80);
    fill(255, 2, 255);
    ellipse(width / 2 - 100, height / 2 - 100, 60, 60);
    fill(255, 191, 0);
    ellipse(width / 2 - 100, height / 2 - 100, 40, 40);
    pop();
}
function complexCircles_P(x, y) {
    push();
    fill(255, 191, 0);
    ellipse(x, y, 80, 80);
    fill(255, 2, 255);
    ellipse(x, y, 60, 60);
    fill(255, 191, 0);
    ellipse(x, y, 40, 40);
    pop();
}