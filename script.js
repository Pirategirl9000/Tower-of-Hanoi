const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let pegOne =   [8,7,6,5,4,3,2,1]; // ::Eight is at bottom::
let pegTwo =   [0,0,0,0,0,0,0,0]; // ::Zeros signify empty space::
let pegThree = [0,0,0,0,0,0,0,0]; // ::ALWAYS FILL RIGHTMOST VALUE FIRST::

//Gets size and color properties
class Dimension {
    constructor() {
        this.disk8Size = 50;
        this.disk8Color = "red";

        this.disk7Size = 45;
        this.disk7Color = "orange";

        this.disk6Size = 40;
        this.disk6Color = "yellow";

        this.disk5Size = 35;
        this.disk5Color = "greenyellow";

        this.disk4Size = 30;
        this.disk4Color = "green";

        this.disk3Size = 25;
        this.disk3Color = "blue";

        this.disk2Size = 20;
        this.disk2Color = "indigo";

        this.disk1Size = 15;
        this.disk1Color = "violet";
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
} const dim = new Dimension();

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
        if (slot[i] == 0) {continue;}
        ctx.beginPath();
        ctx.fillStyle = dim.getColor(slot[i]);
        ctx.ellipse(x, 70, dim.getSize(slot[i]), 30, 0, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

function update() {draw();}

//Parameters are both arrays of the pegs
function swap(from, to) {
    let value;
    for (let i = 7; i >= 0; i--) {
        if (from[i] == 0) {continue;}
        else {
            value = from[i];
            break;
        }
    }

    for (let i = 7; i >= 0; i--) {
        if (to[i] == 0) {
            if(to[i-1] < value) {
                return -1; //Invalid move
            }
            to[i] = value;
            update();
            return to; //Successful move
        }
    }
}

function remove(from) {
        for (let i = 7; i >= 0; i--) {
        if (from[i] == 0) {continue;}
        else {
            from[i] = 0;
            return from;
        }
    }
}

//Update is called to begin program
update();

function solve(oddMove) {
    //Base case
    if (pegThree == [8,7,6,5,4,3,2,1]) {
        return 1;
    }

    //Recursive Case 1 :: Moves 1 piece
    if (oddMove) {
        if (pegOne.includes(1)) {
            pegTwo = swap(pegOne, pegTwo);
            pegOne = remove(pegOne);
        } else if (pegTwo.includes(1)) {
            pegThree = swap(pegTwo, pegThree);
            pegTwo = remove(pegTwo);
        } else {
            pegOne = swap(pegThree, pegTwo);
            pegThree = remove(pegThree);
        }
        
        return solve(false);
    }

    //Recursive Case 2 :: move highest piece that can move to the right
    
    
}
