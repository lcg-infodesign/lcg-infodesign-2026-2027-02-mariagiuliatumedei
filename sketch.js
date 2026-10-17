function setup() {
  createCanvas(windowWidth, windowHeight); 
  background(random(["pink", "lightblue"]));
  noLoop(); 
  angleMode(DEGREES);

  let numeroGlifi = 16;
  let numeroColonne = ceil(sqrt(numeroGlifi));
  let numeroRighe = ceil(numeroGlifi / numeroColonne); 
  let dimColonna = windowWidth / numeroColonne;
  let dimRiga = windowHeight / numeroRighe;
   
  let xCorrente = 0; 
  let yCorrente = 0; 

  for (let g = 0; g < numeroGlifi; g++) {
      let dimFaccina = random(50, 80);
      
      mioGlifo(xCorrente + dimColonna/2, yCorrente + dimRiga/2, dimFaccina);
      xCorrente = xCorrente + dimColonna; 
      
      if (xCorrente >= windowWidth) {
        xCorrente = 0; 
        yCorrente = yCorrente + dimRiga;
      }
  }
}

function mioGlifo(_x, _y, _size) {
    push();
    translate(_x, _y); 
    
    let palette = [
      color(139, 69, 19),   
      color(160, 82, 45),   
      color(205, 133, 63),  
      color(210, 180, 140), 
      color(184, 134, 11),  
      color(101, 67, 33)    
    ];
    let colorePelo = random(palette);

    fill(colorePelo);
    stroke(1);
    strokeWeight(0.5);
    
    //orecchio sx
    triangle(-_size * 0.4, -_size * 0.2, -_size * 0.1, -_size * 0.35, -_size * 0.25, -_size * 0.6);
    //orecchio dx
    triangle(_size * 0.4, -_size * 0.2, _size * 0.1, -_size * 0.35, _size * 0.25, -_size * 0.6);
    //testa
    circle(0, 0, _size);   
        
    //occhi
    let dimOcchio = random(_size * 0.15, _size * 0.35); 
    let offsetOcchi = _size * 0.22;                     
    
    let offsetX_pupilla = random(-2, 2);
    let offsetY_pupilla = random(-2, 2);
    let dimPupilla = dimOcchio * random(0.4, 0.7);

    //occhio sx
    push();
    translate(-offsetOcchi, -_size * 0.05);
    fill(255);
    stroke(0);
    strokeWeight(1); 
    circle(0, 0, dimOcchio);
    fill(0);
    noStroke();
    circle(offsetX_pupilla, offsetY_pupilla, dimPupilla);
    pop();

    //occhio dx
    push();
    translate(offsetOcchi, -_size * 0.05);
    fill(255);
    stroke(0);
    strokeWeight(1); 
    circle(0, 0, dimOcchio);
    fill(0);
    noStroke();
    circle(offsetX_pupilla, offsetY_pupilla, dimPupilla);
    pop();

    //naso 
    let dimNaso = _size * 0.4;
    fill("black"); 
    noStroke();
    triangle(0, _size * 0.2, -dimNaso/2.5, _size * 0.085, dimNaso/2.5, _size * 0.085);

    //baffi
    stroke(0);
    strokeWeight(1);
    let lunghBaffi = _size * 0.35;
    line(0, _size * 0.12, -lunghBaffi, _size * 0.1); 
    line(0, _size * 0.15, -lunghBaffi, _size * 0.15); 
    line(0, _size * 0.12, lunghBaffi, _size * 0.1);   
    line(0, _size * 0.15, lunghBaffi, _size * 0.15);   

    pop();
}