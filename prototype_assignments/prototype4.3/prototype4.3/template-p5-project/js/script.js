/**
 * RUN
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
//identify variables for enemmy, runner, and finish line
let enemy = {
    x: 20,
    y: 250,
    w: 25,
    h: 70,
    speed: 0.8,
    color: "#f11010",
}


let runner = {
    x: 120,
    y: 250,
    w: 25,
    h: 70,
    speed: 0,
    color: {
        fill1: "#4d91f6",
        fill2: "#86ed83",

    }
};

let line = {
    x: 425,
    y: 0,
    w: 40,
    h: 10,
    fill: "#000000"
};

/**
 * make white canvas
*/
function setup() {
    createCanvas(500, 500);

}


/**
 * draw finish line. describe how to make the runner move and change color when it reaches the finish line
*/
function draw() {

    background(255, 255, 255);

    //draw finish line
    fill(line.fill);
    rect(line.x, line.y, line.w, line.h);
    rect(line.x, line.y + 20, line.w, line.h);
    rect(line.x, line.y + 40, line.w, line.h);
    rect(line.x, line.y + 60, line.w, line.h);
    rect(line.x, line.y + 80, line.w, line.h);
    rect(line.x, line.y + 100, line.w, line.h);
    rect(line.x, line.y + 120, line.w, line.h);
    rect(line.x, line.y + 140, line.w, line.h);
    rect(line.x, line.y + 160, line.w, line.h);
    rect(line.x, line.y + 180, line.w, line.h);
    rect(line.x, line.y + 200, line.w, line.h);
    rect(line.x, line.y + 220, line.w, line.h);
    rect(line.x, line.y + 240, line.w, line.h);
    rect(line.x, line.y + 260, line.w, line.h);
    rect(line.x, line.y + 280, line.w, line.h);
    rect(line.x, line.y + 300, line.w, line.h);
    rect(line.x, line.y + 320, line.w, line.h);
    rect(line.x, line.y + 340, line.w, line.h);
    rect(line.x, line.y + 360, line.w, line.h);
    rect(line.x, line.y + 380, line.w, line.h);
    rect(line.x, line.y + 400, line.w, line.h);
    rect(line.x, line.y + 420, line.w, line.h);
    rect(line.x, line.y + 440, line.w, line.h);
    rect(line.x, line.y + 460, line.w, line.h);
    rect(line.x, line.y + 480, line.w, line.h);

    //draw enemy
    fill(enemy.color);
    rect(enemy.x, enemy.y, enemy.w, enemy.h);

    //make enemy move
    enemy.x = enemy.x + enemy.speed;

    //draw runner
    fill(runner.color.fill1);
    rect(runner.x, runner.y, runner.w, runner.h);

    //make runner move when mouse is pressed
    if (mouseIsPressed === true) {
        runner.x = runner.x + runner.speed;
        runner.speed = 2;
    } else {
        runner.speed = 0;
    }

    //make runner change color when it reaches the finish line
    if (runner.x > line.x) {
        runner.color.fill1 = runner.color.fill2;
    }
    else {
        runner.color.fill1 = "#4d91f6";
    }

    //make enemy stop once finish line is crossed
    if (runner.x > line.x) {
        enemy.speed = 0;
    }

}