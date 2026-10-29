/**The circle, the rectangle and the triangle
 * 
 * Charles Tremblay-Gobeil
 * 
 * Generate a circle, a rectangle and a triangle. All have random size, position, color,
 *  outline thickness and outline color. When space is pressed, a new set of shapes appear.
 */

"use strict";

//Call functions
let fillcolor;
let strokethickness;
let strokecolor;
let circlevariables;
let rectanglevariables;
let trianglevariables;

// Setup, white canvas
function setup() {

    //White canvas
    createCanvas(500, 500);
    background(255);

    generateShapeProperties();
    noLoop();
}

// Name the variables for the circle, rectangle and triangle drawing functions.
// Their color, thickness, outline color and positions variables are random.
function generateShapeProperties() {

    fillcolor = color(random(255), random(255), random(255));
    strokethickness = random(1, 10);
    strokecolor = color(random(255), random(255), random(255));

    circlevariables = {
        x: random(0, 500),
        y: random(0, 500),
        r: random(5, 80)
    };

    rectanglevariables = {
        x: random(0, 400),
        y: random(0, 400),
        w: random(10, 250),
        h: random(10, 250)
    };

    trianglevariables = {
        x1: random(0, 500),
        y1: random(0, 500),
        x2: random(0, 500),
        y2: random(0, 500),
        x3: random(0, 500),
        y3: random(0, 500)
    };
}
//Draw the shapes according to the variables above and add instructions
function draw() {
    drawShapes();
    drawInstructions();
}

function drawInstructions() {
    fill("#070707");
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(28);
    text("Press space to see the magic", width / 2, height / 3 - 40);
}

function drawShapes() {
    drawCircle(
        circlevariables.x,
        circlevariables.y,
        circlevariables.r,
        fillcolor,
        strokecolor,
        strokethickness
    );

    drawRectangle(
        rectanglevariables.x,
        rectanglevariables.y,
        rectanglevariables.w,
        rectanglevariables.h,
        fillcolor,
        strokecolor,
        strokethickness
    );

    drawTriangle(
        trianglevariables.x1,
        trianglevariables.y1,
        trianglevariables.x2,
        trianglevariables.y2,
        trianglevariables.x3,
        trianglevariables.y3,
        fillcolor,
        strokecolor,
        strokethickness
    );
}
//Make it so background is reset and shapepropreties are reset when space is pressed
function keyPressed() {
    if (keyCode === 32) {
        generateShapeProperties();
        background(255);
        redraw();
        return false;
    }
}

// Draw a circle
function drawCircle(x, y, r, fillcolor, strokecolor, strokethickness) {
    stroke(strokecolor);
    strokeWeight(strokethickness);
    fill(fillcolor);
    circle(x, y, r);
}

// Draw a rectangle
function drawRectangle(x, y, w, h, fillcolor, strokecolor, strokethickness) {
    stroke(strokecolor);
    strokeWeight(strokethickness);
    fill(fillcolor);
    rect(x, y, w, h);
}

// Draw a triangle
function drawTriangle(x1, y1, x2, y2, x3, y3, fillcolor, strokecolor, strokethickness) {
    stroke(strokecolor);
    strokeWeight(strokethickness);
    fill(fillcolor);
    triangle(x1, y1, x2, y2, x3, y3);
}