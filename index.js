function setCornerShape(shape) {
  const cls = ["round", "scoop", "bevel", "notch", "square", "squircle"];
  const boxElement = document.querySelector(".box");
  boxElement.classList.remove(...cls);
  boxElement.classList.add(shape);
}
