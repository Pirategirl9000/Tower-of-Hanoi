const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//Create display
function drawPeg(x, y) {
    ctx.beginPath();
    ctx.fillStyle = "brown"
    ctx.ellipse(x + 4, y + 20, 6, 30, 0, 0, 2 * Math.PI);
    ctx.fill();
}

function update() {
    drawPeg(90, 50);
    drawPeg(150, 50);
    drawPeg(210, 50);
}

update();