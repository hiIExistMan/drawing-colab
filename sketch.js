const canvas = document.querySelector("canvas");
let mouseDown = false;
let {arc, fillRect, fillStyle, strokeStyle} = canvas.getContext("2d");
fillStyle = "black";
fillRect(0, 0, 640, 360);
addEventListener("mousedown", () => mouseDown = true);
addEventListener("mouseup", () => mouseDown = false);

setInterval(() => {
  if(mouseDown) {
    fillStyle = "whitesmoke";
    arc(mouseX, mouseY, 25, 0, Math.PI*2, false);
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