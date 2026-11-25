/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */
//making a flower

"use strict";

//set of variables: flowerOne, flowerTwo, flowerThree
let heightF1 = 200;
let widthF1 = 20;
let widthPetalF1 = 100;
let heightPetalF1 = 100;
let yF1 = 500 - heightF1;



//make array for variables to simplify
let flowers = [flowerOne, flowerTwo, flowerThree]

let fourthFlower = createFlower


function createFlower(stemX, stemY, stemW, stemH, petalW) {
    let tempFlower = {
        x: stemX,
        y: stemY,
        width: stemW,
        height: stemH,
        petalWidth: petalW,
        stemFill: 'green',
        strokePetal: 'black',
        fillPetal: 'pink'
    }
}

function setup() {
    createCanvas(500, 500);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background('dodgerblue');


    for (let i = 0; i < 3, i++) {
        drawFlower(flowers[i]);
    }
}

function drawFlower(flower) {
    push();
    fill(flower.fillStem);
    rect(flower.x, flower.y, flower.width, flower.height);
    pop();

    push();
    strokeWeight(5);
    stroke(flower.strokePetal);
    fill(flower.fillPetal);
    ellipse(flower.x + flower.width / 2, flower.y, flower.widthPetal, flower.heightPetal);
    pop();

}

