const block = document.createElement("div");
block.style.width = "50px";
block.style.height = "50px";
block.style.backgroundColor = "red";
block.style.position = "absolute";
document.body.appendChild(block);

let x = 0;
let y = 0;
let dx = 5;
let dy = 5;

function animate() {
    x += dx;
    y += dy;
    
    if (x + 50 > window.innerWidth || x < 0) {
        dx = -dx;
    }
    if (y + 50 > window.innerHeight || y < 0) {
        dy = -dy;
    }
    
    block.style.left = x + "px";
    block.style.top = y + "px";
    
    requestAnimationFrame(animate);
}

animate();
