/**
 * Charles Tremblay-Gobeil
 *
 * The angriest of them all
 */

"use strict";

// Variables for Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 200,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    }
}
let eyebrow1 = {
    x1: 130,
    y1: 120,
    x2: 170,
    y2: 120
}
let eyebrow2 = {
    x1: 230,
    y1: 120,
    x2: 270,
    y2: 120
}

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {

    background(60, 80, 200);
    stroke(255, 255, 255);
    line(20, 0, 20, 1000);
    line(40, 0, 40, 1000);
    line(60, 0, 60, 1000);
    line(80, 0, 80, 1000);
    line(100, 0, 100, 1000);
    line(120, 0, 120, 1000);
    line(140, 0, 140, 1000);
    line(160, 0, 160, 1000);
    line(180, 0, 180, 1000);
    line(200, 0, 200, 1000);
    line(220, 0, 220, 1000);
    line(240, 0, 240, 1000);
    line(260, 0, 260, 1000);
    line(280, 0, 280, 1000);
    line(300, 0, 300, 1000);
    line(320, 0, 320, 1000);
    line(340, 0, 340, 1000);
    line(360, 0, 360, 1000);
    line(380, 0, 380, 1000);


    // Draw Mr. Furious as a coloured circle
    push();
    stroke(0, 0, 0);
    strokeWeight(6);
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();

    // Draw eyes
    push();
    stroke(0, 0, 0);
    strokeWeight(2);
    fill(255, 255, 255);
    ellipse(mrFurious.x - 50, mrFurious.y - 50, 30, 30);
    ellipse(mrFurious.x + 50, mrFurious.y - 50, 30, 30);
    pop();


    // Draw pupils
    fill(0, 0, 0);
    ellipse(mrFurious.x - 50, mrFurious.y - 50, 10, 10);
    ellipse(mrFurious.x + 50, mrFurious.y - 50, 10, 10);

    //Draw normal to angry eyebrow
    push();
    stroke(0, 0, 0);
    strokeWeight(5);
    line(eyebrow1.x1, eyebrow1.y1, eyebrow1.x2, eyebrow1.y2);
    line(eyebrow2.x1, eyebrow2.y1, eyebrow2.x2, eyebrow2.y2);
    pop();
    mrFurious.fill.g = mrFurious.fill.g - 0.5;
    mrFurious.fill.b = mrFurious.fill.b - 0.5;

    if (eyebrow1.y1 > 110) {
        eyebrow1.y1 = eyebrow1.y1 - 0.1;
        constrain(eyebrow1.y1, 110, 120);
        eyebrow2.y2 = eyebrow2.y2 - 0.1;
        constrain(eyebrow2.y2, 110, 120);

    }

    if (eyebrow1.y2 < 130) {
        eyebrow1.y2 = eyebrow1.y2 + 0.1;
        constrain(eyebrow1.y2, 120, 130);
        eyebrow2.y1 = eyebrow2.y1 + 0.1;
        constrain(eyebrow2.y1, 120, 130);
    }

    // eyebrow1.y1 = eyebrow1.y1 - 0.5;
    // constrain(eyebrow1.y1, 115, 120);
    // eyebrow1.y2 = eyebrow1.y2 + 0.5;
    // constrain(eyebrow1.y2, 120, 125);
    // eyebrow2.y1 = eyebrow2.y1 + 0.5;
    // constrain(eyebrow2.y1, 120, 125);
    // eyebrow2.y2 = eyebrow2.y2 - 0.5;
    // constrain(eyebrow2.y2, 115, 120);



}