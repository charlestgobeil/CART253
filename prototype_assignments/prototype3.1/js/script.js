/**
 * Perpetual change
 * ACharles Tremblay-Gobeil
 * 
 * A set of three circle perpetually changing colors
 */

"use strict";

//variables
//circle 1 color
let circle1 = {
    fill: {
        r1: 255,
        g1: 0,
        b1: 0
    }
}
//circle 2 color
let circle2 = {
    fill: {
        r2: 0,
        g2: 255,
        b2: 0
    }
}
//circle 3 color
let circle3 = {
    fill: {
        r3: 0,
        g3: 0,
        b3: 255
    }
}
/**
 * create white background
*/
function setup() {
    createCanvas(500, 500);
    background(255, 255, 255);
}


/**
 * create three circle, intially one red, one blue, one green
*/
function draw() {
    fill(circle1.fill.r1, circle1.fill.g1, circle1.fill.b1)
    circle(100, 250, 100)
    fill(circle2.fill.r2, circle2.fill.g2, circle2.fill.b2)
    circle(250, 250, 100)
    fill(circle3.fill.r3, circle3.fill.g3, circle3.fill.b3)
    circle(400, 250, 100)

    //make colours change
    circle1.fill.r1 = circle1.fill.r1 - 1
    circle1.fill.b1 = circle1.fill.b1 + 1

    circle2.fill.g2 = circle2.fill.g2 - 1
    circle2.fill.r2 = circle2.fill.r2 + 1

    circle3.fill.b3 = circle3.fill.b3 - 1
    circle3.fill.g3 = circle3.fill.g3 + 1
    //create color loop for circle 2
    if (circle1.fill.r1 < 1) {
        circle1.fill.b1 = 0
    }

    if (circle1.fill.b1 === 0) {
        circle1.fill.r1 = 255
        circle1.fill.b1 = 255
        circle1.fill.b1 = 255

        circle2.fill.r2 = 0
        //create color loop for circle 3
    }
    if (circle2.fill.r2 === 0) {
        circle3.fill.g3 = 0
    }





}