/**
 * As concrete as abstract gets
 * Charles Tremblay-Gobeil
 * 
 * Try to create a piece of art as abstract and random as possible,
 * while using rectangles to create contrast between shape and form.
 */

"use strict";

/**
 *canvas creation and canvas color
 */
function setup() {
    createCanvas(500, 500);
    background(20, 70, 255);
}


/**
 *background circles
*/
function draw() {
    fill(0, 255, 0);
    circle(250, 250, 500)

    fill(0, 0, 255);
    circle(250, 250, 300)

    fill(255, 0, 0);
    circle(250, 250, 200)

    //Main component: rectangles of various colors and sizes

    fill(69, 100, 10);
    rect(50, 200, 100, 200);

    fill(250, 200, 100);
    rect(400, 450, 200, 25);

    fill(133, 0, 250);
    rect(250, 20, 30, 300);

    fill(10, 150, 80);
    rect(40, 40, 400, 80);

    fill(70, 20, 40);
    rect(300, 400, 150, 100);

    fill(180, 160, 10);
    rect(200, 380, 300, 10);



}