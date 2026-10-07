/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let mouseTriggerball = {
    x: 200,
    y: 200,
    size: 50,
    speed: 0,
    fillColor: {
        r: 100,
        g: 0,
        b: 255
    }
}


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    backgground(0, 0, 0);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    //function mousePressed() {
    //fill(random(255), random(255), random(255));
    //ellipse(mouseTriggerball.x, mouseTriggerball.y, mouseTriggerball.size, mouseTriggerball.size);
    //}


    fill(mouseTriggerball.fillColor.r, mouseTriggerball.fillColor.g, mouseTriggerball.fillColor.b);
    ellipse(mouseTriggerball.x, mouseTriggerball.y, mouseTriggerball.size, mouseTriggerball.size);

    function moveBall() {
        mouseTriggerball.x =
            mouseTriggerBall.x + mouseTriggerBall.speed;
    }

    function mousePressed() {
        mouseTriggerBall.speed = 2;
    }
    function mouseReleased() {
        mouseTriggerBall.speed = 0;
    }

    function mouseWheel() {
        mouseTriggerBall.size = mouseTriggerBall.size + 5;
    }

    function keyPressed(event) {
        if (event.key === "ArrowUp") {
            mouseTriggerBall.y = mouseTriggerBall.y - 5;
        } else if (event.key === "ArrowDown") {
            mouseTriggerBall.y = mouseTriggerBall.y + 5;
        }
    }
    function keyReleased() {
        mouseTriggerBall.speed = 0
    }
}