/**
 * Title of Project
 * Author Name
 * 
 * I want to create a brush thats activated upon clicking the mouse button. This brush has edges, and I want them to connect with each other when the strokes overlay. ex: one vertical stroke and then a horizontal stroke over. The result is not a stroke over the other, the edges connect into making a + . 

Next, I want the brush to have a x and a y symmetry, so it draws in all four quadrants. 

I also want the user to be able to cycle through multiple brushes when they press a key.

 */

"use strict";

let brush1 = {
    size:14,
    fillColor: "#f51212"
};
let brush2 = {
    size:14,
    fillColor: "#12f512"
};
let brush3 = {
    size:14,
    fillColor: "#1212f5"
};
let arrayofbrushs = [brush1, brush2, brush3];
let currentBrush = 0;
let outlineLayer;
let colorLayer;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {

    createCanvas(500, 500);
    background(255, 255, 255);
    outlineLayer = createGraphics(width, height);
    colorLayer = createGraphics(width, height);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255);
    image(outlineLayer, 0, 0);
    image(colorLayer, 0, 0);
}

function mousePressed() {
    drawBrushSegment(mouseX, mouseY, mouseX, mouseY);
}

function mouseDragged() {
    drawBrushSegment(pmouseX, pmouseY, mouseX, mouseY);
}

function drawBrushSegment(x1, y1, x2, y2) {
    let brush = arrayofbrushs[currentBrush];

    outlineLayer.strokeCap(ROUND);
    outlineLayer.strokeJoin(ROUND);
    outlineLayer.stroke("black");
    outlineLayer.strokeWeight(brush.size + 12);
    drawSymmetricLines(outlineLayer, x1, y1, x2, y2);

    colorLayer.strokeCap(ROUND);
    colorLayer.strokeJoin(ROUND);
    colorLayer.stroke(brush.fillColor);
    colorLayer.strokeWeight(brush.size);
    drawSymmetricLines(colorLayer, x1, y1, x2, y2);
}

function drawSymmetricLines(layer, x1, y1, x2, y2) {
    layer.line(x1, y1, x2, y2);
    layer.line(width - x1, y1, width - x2, y2);
    layer.line(x1, height - y1, x2, height - y2);
    layer.line(width - x1, height - y1, width - x2, height - y2);
}

function keyPressed() {
    if (keyCode === 32) {
        currentBrush = (currentBrush + 1) % arrayofbrushs.length;
        return false;
    }
}



