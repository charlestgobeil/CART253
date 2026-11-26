/**
 * Title of Project
 * Author Name
 * 
 * I want to create a brush thats activated upon clicking the mouse button. This brush has edges, and I want them to connect with each other when the strokes overlay. ex: one vertical stroke and then a horizontal stroke over. The result is not a stroke over the other, the edges connect into making a + . 

Next, I want the brush to have a x and a y symmetry, so it draws in all four quadrants. 

I also want the user to be able to cycle through multiple brushes when they press a key.

 */

"use strict";

let brush1 = {
    size: 30,
    fillColor: "#fff700"
};
let brush2 = {
    size: 25,
    fillColor: "#ffae00"
};
let brush3 = {
    size: 20,
    fillColor: "#ff7300"
};
let brush4 = {
    size: 15,
    fillColor: "#ff4800"
};
let brush5 = {
    size: 10,
    fillColor: "#ff0000"
};


let brush6 = {
    size: 30,
    fillColor: "#00ff22"
};
let brush7 = {
    size: 25,
    fillColor: "#00ff6e"
};
let brush8 = {
    size: 20,
    fillColor: "#00ffbf"
};
let brush9 = {
    size: 15,
    fillColor: "#00ddff"
};
let brush10 = {
    size: 10,
    fillColor: "#009dff"
};


let brush11 = {
    size: 30,
    fillColor: "#2f00ff"
};
let brush12 = {
    size: 25,
    fillColor: "#4c00ff"
};
let brush13 = {
    size: 20,
    fillColor: "#8800ff"
};
let brush14 = {
    size: 15,
    fillColor: "#c800ff"
};
let brush15 = {
    size: 10,
    fillColor: "#ff00d9"
};
let arrayofbrushsA = [brush1, brush2, brush3, brush4, brush5];
let arrayofbrushsB = [brush6, brush7, brush8, brush9, brush10];
let arrayofbrushsC = [brush11, brush12, brush13, brush14, brush15];

let currentBrushArray = arrayofbrushsA;
let currentBrush = 0;
let outlineLayers = [];
let colorLayers = [];
let currentOutlineLayer;
let currentColorLayer;
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {

    createCanvas(500, 500);
    background(255, 255, 255);
    createOutlineLayer();
}
blendMode(ADD);

function createOutlineLayer() {
    currentOutlineLayer = createGraphics(width, height);
    currentColorLayer = createGraphics(width, height);
    outlineLayers.push(currentOutlineLayer);
    colorLayers.push(currentColorLayer);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("#ffffff");
    for (let i = 0; i < outlineLayers.length; i++) {
        image(outlineLayers[i], 0, 0);
        image(colorLayers[i], 0, 0);
    }
}

function mousePressed() {
    drawBrushSegment(mouseX, mouseY, mouseX, mouseY);
}

function mouseDragged() {
    drawBrushSegment(pmouseX, pmouseY, mouseX, mouseY);
}

function drawBrushSegment(x1, y1, x2, y2) {
    let brush = currentBrushArray[currentBrush];

    currentOutlineLayer.strokeCap(ROUND);
    currentOutlineLayer.strokeJoin(ROUND);
    currentOutlineLayer.stroke("black");
    currentOutlineLayer.strokeWeight(brush.size + 12);
    drawSymmetricLines(currentOutlineLayer, x1, y1, x2, y2);

    currentColorLayer.strokeCap(ROUND);
    currentColorLayer.strokeJoin(ROUND);
    currentColorLayer.stroke(brush.fillColor);
    currentColorLayer.strokeWeight(brush.size);
    drawSymmetricLines(currentColorLayer, x1, y1, x2, y2);
}

function drawSymmetricLines(layer, x1, y1, x2, y2) {
    layer.line(x1, y1, x2, y2);
    layer.line(width - x1, y1, width - x2, y2);
    layer.line(x1, height - y1, x2, height - y2);
    layer.line(width - x1, height - y1, width - x2, height - y2);
}

function keyPressed() {
    if (key === "1") {
        currentBrushArray = arrayofbrushsA;
    } else if (key === "2") {
        currentBrushArray = arrayofbrushsB;
    } else if (key === "3") {
        currentBrushArray = arrayofbrushsC;
    }

    if (keyCode === 32) {
        currentBrush = (currentBrush + 1) % currentBrushArray.length;
        createOutlineLayer();
        return false;
    }

    if (key === "0") {
        outlineLayers = [];
        colorLayers = [];
        createOutlineLayer();
        return false;
    }
}



