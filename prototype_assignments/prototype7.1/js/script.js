/**
 * Run horsy run
 * Charles Tremblay-Gobeil
 * 
 * Animation of a horse running
 */

"use strict";
//name array for images
let images = [];

//set first image
let currentImageIndex = 0;

//create separate array for images
function preload() {
    images = [
        loadImage("./images/C1.jpg"),
        loadImage("./images/C2.jpg"),
        loadImage("./images/C3.jpg"),
        loadImage("./images/C4.jpg"),
        loadImage("./images/C5.jpg"),
        loadImage("./images/C6.jpg")
    ];
}
/**
 * Create canvas
*/
function setup() {
    createCanvas(500, 500);

}


//draw necessary elements
function draw() {
    //background color
    background('skyblue');

    //display images, starting with the first image in the array
    image(images[currentImageIndex], 0, 0, width, height);

    //instructions
    fill("#070707");
    noStroke();
    textAlign(CENTER, CENTER);
    textSize(28);
    text("Press space to make the horse run", width / 2, height / 3 - 40);

}


//make it so when spacebar is pressed, the image changes to the next.
//This makes the horse run. Make sure the images loop
function keyPressed() {
    if (keyCode === 32) {
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }
    //Loop
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }
}
