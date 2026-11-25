/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let circleX = 250;
let circleY = 250;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    background('skyblue');
    let newVal = squareNum(2);
    let newVal_2 = squareNum(5);
    console.log(newVal);
    console.log(newVal_2);

}
function squareNum(num) {
    let squaredNumValue = num * num

    return d;
}


function calculateDistance(objX, objY) {
    let d = dist(mouseX, mouseY, objX, objY)
    let mappedX = map()

    return d;
}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    complexCircles();
    complexCircles_2();
    complexCircles_3();
    complexCircles_P(circleX, circleY, 80, 80);
    complexCircles_O(width / 2 - 100, height / 2, 80, 80);

    let d = calculateDistance(circleX, circleY);
    console.log(d);
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