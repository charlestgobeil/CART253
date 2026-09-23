/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500);
    background(0, 0, 0);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(20, 10, 18);

    noStroke();
    let diamondSize = 22;
    for (let x = -diamondSize; x < width + diamondSize; x += diamondSize) {
        for (let y = -diamondSize; y < height + diamondSize; y += diamondSize) {
            let isDarkTile = ((x / diamondSize) + (y / diamondSize)) % 2 === 0;
            fill(isDarkTile ? [115, 0, 35] : [170, 25, 65]);

            beginShape();
            vertex(x, y + diamondSize / 2);
            vertex(x + diamondSize / 2, y);
            vertex(x + diamondSize, y + diamondSize / 2);
            vertex(x + diamondSize / 2, y + diamondSize);
            endShape(CLOSE);
        }
    }

    let cols = 4;
    let rows = 4;
    let cellSize = width / cols;
    let radius = cellSize / 2;
    let startColor = [64, 0, 90];
    let endColor = [0, 170, 170];

    for (let gridX = 0; gridX < cols; gridX++) {
        for (let gridY = 0; gridY < rows; gridY++) {
            let x = cellSize * gridX + radius;
            let y = cellSize * gridY + radius;

            let t = (gridX + gridY) / (cols + rows - 2);
            let r = lerp(startColor[0], endColor[0], t);
            let g = lerp(startColor[1], endColor[1], t);
            let b = lerp(startColor[2], endColor[2], t);

            fill(r, g, b);
            stroke(180, 180, 180);
            strokeWeight(1);
            circle(x, y, radius * 2);

            const shade = drawingContext.createRadialGradient(
                x - radius * 0.55,
                y + radius * 0.35,
                radius * 0.15,
                x,
                y,
                radius
            );
            shade.addColorStop(0, "rgba(0, 0, 0, 0)");
            shade.addColorStop(0.5, "rgba(0, 0, 0, 0.12)");
            shade.addColorStop(1, "rgba(0, 0, 0, 0.45)");

            drawingContext.fillStyle = shade;
            drawingContext.beginPath();
            drawingContext.arc(x, y, radius, 0, TWO_PI);
            drawingContext.fill();

            fill(255, 255, 255);
            circle(x + radius * 0.35, y - radius * 0.35, radius * 0.25);
        }
    }
}