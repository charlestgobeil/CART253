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
    createCanvas(500);

}

let square = {
    x: 100,
    y: 100
}
let squareSecond = {
    x: 100,
    y: 300
}

function addTwoNumbers(valA, valB) {
    let valC = valA + valB
    return valC
}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('skyblue');
    drawSquare(100, 100);
    drawSquareTwo(square);
    drawSquareTwo(squareSecond);
    let returnedValue = addTwoNumbers(20, 70);
    let returnedValue2 = addTwoNumbers(400, 70);

}

function drawSquare(x1, y) {
    push();
    fill(255, 0, 255);
    rect(x1, y, 40, 40);
    pop();
}
function drawSquareTwo(tempSquare) {
    push();
    fill(255, 0, 255);
    rect(tempSquare.x, tempSquare.y, tempSquare.w, tempSquare.h);
    pop();
}