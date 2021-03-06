const canvas = document.querySelector("canvas");
let mouseDown = false;
let mouseX = 0, mouseY = 0;
let ctx = canvas.getContext("2d");
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 640, 360);
ctx.fill();
addEventListener("mousedown", () => mouseDown = true);
addEventListener("mouseup", () => mouseDown = false);
addEventListener("mousemove", e => {
  mouseX = e.x;
  mouseY = e.y;
})

setInterval(() => {
  if(mouseDown) {
    ctx.beginPath();
    ctx.fillStyle = "whitesmoke";
    ctx.arc(mouseX, mouseY, 10, 0, Math.PI*2, false);
    ctx.fill();
  }
}, 0);

function fetchDrawing() {
  fetch("https://localhost:8000/drawing").then(async responce => {
    const json = await responce.json();
    const pixels = json.pixels;
    
  });
}

function setPixels(p) {
  let id = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  let pixels = id.data;
  pixels = p;
  ctx.putImageData(id, 0, 0);
}

const getPixels = () => ctx.getImageData(0, 0, canvasWidth, canvasHeight).data;