/**
 * 
 * Author Name
 * 
 * Generate 
 */

"use strict";
let fillcolor;
let strokethickness;
let strokecolor;
let circlevariables;
let rectanglevariables;
let trianglevariables;

// White canvas
function setup() {
    createCanvas(500, 500);
    background(255);

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

// Define functions for circles, rectangles, and triangles
function draw() {
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

    noLoop();
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