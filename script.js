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
        ctx.fillStyle = dim.getColor(slot[i]);
        ctx.ellipse(x, 70, dim.getSize(slot[i]), 30, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
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

    getSize(s) {
        switch (s) {
            case 1: return this.disk1Size;
            case 2: return this.disk2Size;
            case 3: return this.disk3Size;
            case 4: return this.disk4Size;
            case 5: return this.disk5Size;
            case 6: return this.disk6Size;
            case 7: return this.disk7Size;
            case 8: return this.disk8Size;
        }
    }

    getColor(s) {
        switch (s) {
            case 1: return this.disk1Color;
            case 2: return this.disk2Color;
            case 3: return this.disk3Color;
            case 4: return this.disk4Color;
            case 5: return this.disk5Color;
            case 6: return this.disk6Color;
            case 7: return this.disk7Color;
            case 8: return this.disk8Color;
        }
    }
}

const dim = new Dimension();

update();