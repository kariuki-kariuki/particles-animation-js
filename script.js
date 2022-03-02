const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];


// mouse event handler

const mouse = {
    x: null,
    y: null,
    radius: 160
}

window.addEventListener("mousemove", function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    console.log(mouse.x, mouse.y);
}); 

ctx.fillStyle = "white";
ctx.font = "30px Verdana";
ctx.fillText('A', 0, 30);