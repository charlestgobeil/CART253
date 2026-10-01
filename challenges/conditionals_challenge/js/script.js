/**
 * Go Habs Go
 * Charles Tremblay-Gobeil
 *
 * This will be a program in which the user can push a puck
 * on the canvas using their mouse. When the puck is in the goal, it turns pink.
 */

const puck = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#ff0000"
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};
const Target = {
    x: 100,
    y: 100,
    size: 100,
    fill1: "#345bdc",
    fill2: "#ff23fb"

}


/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");

    // Move user circle
    moveUser();

    // Draw the user, puck and target. Move puck and check target also here
    drawUser();
    drawPuck();
    movePuck();
    checkTarget();
    drawTarget();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}
// Draws the target in its initial color
function drawTarget() {
    push();
    noStroke();
    fill(Target.fill1)
    circle(Target.x, Target.y, Target.size)
    pop()

}
// Makes the target change colors when the puck reaches it
function checkTarget() {
    const T = dist(puck.x, puck.y, Target.x, Target.y)
    const goal = (T < puck.size / 2 + Target.size / 2)

    if (goal) {
        Target.fill1 = Target.fill2
    }
    else {
        Target.fill1 = "#345bdc"
    }
}
// makes the puck move when it interacts with the users mouse
function movePuck() {
    const d = dist(user.x, user.y, puck.x, puck.y);
    const touch = (d < puck.size / 2 + user.size / 2)

    if (touch) {
        if (user.x < puck.x) {
            puck.x += 1
        }
        else if (user.x > puck.x) {
            puck.x -= 1
        }
    }
    if (touch) {
        if (user.y < puck.y) {
            puck.y += 1
        }
        else if (user.y > puck.y) {
            puck.y -= 1
        }
    }


}