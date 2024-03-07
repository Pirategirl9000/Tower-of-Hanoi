const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let pegOne =   [8,7,6,5,4,3,2,1]; // ::Eight is at bottom::
let pegTwo =   [0,0,0,0,0,0,0,0]; // ::Zeros signify empty space::
let pegThree = [0,0,0,0,0,0,0,0]; // ::ALWAYS FILL RIGHTMOST VALUE FIRST::

//Create display
function draw() {
    //Draw peg A
    ctx.beginPath();
    ctx.fillStyle = "black"

    ctx.ellipse(94, 70, 6, 30, 0, 0, 2 * Math.PI);

    //Draw peg B
    ctx.ellipse(154, 70, 6, 30, 0, 0, 2 * Math.PI);

    //Draw peg C
    ctx.ellipse(214, 70, 6, 30, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    drawDiscs(1, pegOne);
    drawDiscs(2, pegTwo);
    drawDiscs(3, pegThree);
}

function drawDiscs(peg, slot) {
    let x;
    let y;

    //determine x of peg in question
    if (peg == 1) {x = 94;}
    else if (peg == 2) {x = 154;} 
    else {x = 214}

    for (let i = 0; i < slot.length; i++) {
        ctx.beginPath();
        ctx.ellipse(x, 70, 6, 30, 0, 0, 2 * Math.PI);
    }
}

function update() {
    draw();
}

class Dimension {
    constructor() {
        disk8Size = 50;
        disk8Color = "red";

        disk7Size = 45;
        disk7Color = "orange";

        disk6Size = 40;
        disk6Color = "yellow";

        disk5Size = 35;
        disk5Color = "greenyellow";

        disk4Size = 30;
        disk4Color = "green";

        disk3Size = 25;
        disk3Color = "blue";

        disk2Size = 20;
        disk2Color = "indigo";

        disk1Size = 15;
        disk1Color = "violet";
    }
}

const dim = new Dimension();

update();