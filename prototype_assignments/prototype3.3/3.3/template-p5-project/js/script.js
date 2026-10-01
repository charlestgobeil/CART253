/**
 * Rings
 * Charles Tremblay-Gobeil
 * 
 * A green elipse grows into a circle, then a small circle grows inside of it, and finally another green circle grows inside the first.
*/
"use strict";
let c1 = {
    w: 100,
    h: 50
}
let c2 = {
    r: 30

}
let c3 = {
    r: 30
}


/**
 *create canvas, make light background
*/
function setup() {
    createCanvas(500, 500)
    background(30, 0, 0)
}


/**
 * Draw three consecutive circles that grow in a sequence (green-white-green)
*/
function draw() {
    //draw 1st green ellipse

    push()
    fill(0, 180, 0)
    ellipse(250, 250, c1.w, c1.h)
    pop()

    //make 1st ellipse grow into a 300 diameter circle
    if (c1.h < 300 && c1.w === 100) {
        c1.h += 5
    }
    else if (c1.h === 300 && c1.w < 300) {
        c1.w += 5
        // makes the first circle grow 
    }
    else if (c2.r < 250) {
        c2.r += 5
    }
    // makes the second circle grow
    else if (c3.r < 200) {
        c3.r += 5
    }
    // makes the first circle spawn
    if (c1.h === 300 && c1.w === 300) {
        push()
        fill(255, 255, 255)
        circle(250, 250, c2.r)
        pop()
    }
    // makes the second circle spawn
    if (c2.r === 250) {
        push()
        fill(0, 180, 0)
        circle(250, 250, c3.r)
        pop()
    }


}