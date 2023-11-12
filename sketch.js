function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  blendMode(DIFFERENCE); // Establece el modo de mezcla en "DIFFERENCE"
}

function draw() {
  // Dibuja la primera elipse con color rojo
  let x1 = noise(frameCount * 0.01) * width;
  let y1 = noise(frameCount * 0.01 + 100) * height;
  fill(255, 0, 0);
  ellipse(x1, y1, 80, 80);

  // Dibuja la segunda elipse con color rosado
  let x2 = noise(frameCount * 0.02) * width; // Ajusta el valor del ruido para cambiar la posición
  let y2 = noise(frameCount * 0.02 + 100) * height;
  fill(255, 182, 193); // Color rosado en RGB
  ellipse(x2, y2, 80, 80);
}