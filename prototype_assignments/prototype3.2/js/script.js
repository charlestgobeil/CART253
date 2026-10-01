/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
//variables for inital position of circle
let circle1 = {
    x: 100,
    y: 100
};

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    background(255, 255, 255);
}


function draw() {

    //create circle, basically a brush
    fill(0, 0, 0);
    circle(circle1.x, circle1.y, 50);

    //create movement sequences
    //first: x goes up, y stays
    if (circle1.x < 400 && circle1.y === 100) {
        circle1.x += 10
    }
    //second: x stays, y goes up
    else if (circle1.y < 400 && circle1.x === 400) {
        circle1.y += 10
    }
    //third: y stays, x goes down
    else if (circle1.x > 100 && circle1.y === 400) {
        circle1.x -= 10
        //fourth: x stays, y goes down
    }
    else if (circle1.x === 100 && circle1.y > 100)
        circle1.y -= 10

}