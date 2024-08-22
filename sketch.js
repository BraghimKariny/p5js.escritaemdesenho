function setup() {
    createCanvas(600, 600);  
    background("blue");
  
  }
  
  function draw() {
  
    stroke("yellow");
    fill("pink");
  
    // console.log(mouseIsPressed):
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 20);
    }
  }
  