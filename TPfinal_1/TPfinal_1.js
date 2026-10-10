let pantallaActual = 1;
let subestadoPantalla5 = 1; // 1: Muestra texto con flecha, 2: Muestra opciones (botones)

let imagenes = [];
let linterna;
let piernas;

let caracteresVisibles = 0;
let velocidadTexto = 0.5;

// Variables para el mensaje de "Acá no hay nada"
let tiempoMensaje = 0;
let mensajeX = 0;
let mensajeY = 0;

let textoPantalla1 = "Un detective privado venido a menos, consumido por las deudas y el descrédito, recibe una carta anónima a altas horas de la noche.";
let textoPantalla3 = "Luego de una larga busqueda logras encontrar el almacen 10. Te decidis a entrar a ver si lo que decia la carta era cierto. Las luces no funcionan asi que sacas tu linterna y empezas a buscar alguna pista de lo sucedido.";
let textoPantalla5 = "Un cuerpo de un asesinato que pareciera que ocurrio hace poco. Se empiezan a escuchar sirenas de fondo. La policia se acerca y hay que actuar rapido.";
let textoPantalla6 = "Logras dejar todo como estaba y salir corriendo justo a tiempo para volver a tu despacho sin levantar sospechas.";
let textoPantalla7 = "Te quedas a intentar explicarle a la policia como es que llegaste a estar en esa situacion.";
let textoPantalla8 = "Llamas a tu odioso compañero. Juntos despues de un rato logran encontrar el almacen 10 y se deciden a entrar. Todo esta oscuro asi que sacan una linterna para buscar alguna pista.";


function preload() {
  for (let i = 1; i < 12; i++) {
    imagenes[i] = loadImage("assets/pantalla" + i + ".jpg");
  }
  linterna = loadImage("assets/linterna.png");
  piernas = loadImage("assets/piernas.png");
}

function setup() {
  createCanvas(800, 450);
  textFont('Courier New');
}

function draw() {
  background(15);

  if (pantallaActual === 1) {
    if (imagenes[1]) image(imagenes[1], 0, 0, width, height);

    if (caracteresVisibles < textoPantalla1.length) {
      caracteresVisibles += velocidadTexto;
    }
    let textoParcial = textoPantalla1.substring(0, floor(caracteresVisibles));
    stroke(100);
    strokeWeight(1);
    fill(0, 0, 0, 200); 
    rect(50, 310, 700, 110, 8);
    noStroke();
    fill(230);
    textSize(15);
    textAlign(LEFT, TOP);
    text(textoParcial, 70, 325, 660, 80);
    dibujarFlechaSiguiente(715, 395);

  } else if (pantallaActual == 2) {
    if (imagenes[2]) image(imagenes[2], 0, 0, width, height);
    dibujarBoton(150, 350, 230, 50, "Ir solo al almacén");
    dibujarBoton(420, 350, 230, 50, "Llamar a tu compañero");

  } else if (pantallaActual == 3) {
    if (imagenes[3]) image(imagenes[3], 0, 0, width, height);
    if (caracteresVisibles < textoPantalla3.length) {
      caracteresVisibles += velocidadTexto;
    }
    let textoParcial = textoPantalla3.substring(0, floor(caracteresVisibles));
    stroke(100);
    strokeWeight(1);
    fill(0, 0, 0, 200); 
    rect(50, 310, 700, 110, 8);
    noStroke();
    fill(230);
    textSize(15);
    textAlign(LEFT, TOP);
    text(textoParcial, 70, 325, 660, 80);
    dibujarFlechaSiguiente(715, 395);

  } else if (pantallaActual == 4) {
    if (imagenes[4]) image(imagenes[4], 0, 0, width, height);

    if (colisionBoton(180, 300, 75, 50)) {
      image(piernas, 0, 0, 800, 450);
    }

    if (millis() - tiempoMensaje < 2000) {
      push();
      fill(255, 50, 50);
      stroke(0);
      strokeWeight(2);
      textSize(14);
      textAlign(CENTER, CENTER);
      text("Acá no hay nada", mensajeX, mensajeY);
      pop();
    }

    dibujarLinterna();

  } else if (pantallaActual == 5) {
    if (imagenes[5]) image(imagenes[5], 0, 0, width, height);

    if (subestadoPantalla5 === 1) {
      // ESTADO 1: Mostrar recuadro con el texto animado y la flecha de siguiente
      if (caracteresVisibles < textoPantalla5.length) {
        caracteresVisibles += velocidadTexto;
      }
      let textoParcial = textoPantalla5.substring(0, floor(caracteresVisibles));
      stroke(100);
      strokeWeight(1);
      fill(0, 0, 0, 200); 
      rect(50, 310, 700, 110, 8);
      noStroke();
      fill(230);
      textSize(15);
      textAlign(LEFT, TOP);
      text(textoParcial, 70, 325, 660, 80);
      
      dibujarFlechaSiguiente(715, 395);

    } else if (subestadoPantalla5 === 2) {
      // ESTADO 2: Ocultar texto y mostrar los botones de decisión
      dibujarBoton(150, 350, 230, 50, "Salir corriendo");
      dibujarBoton(420, 350, 250, 50, "Quedarse y explicar la situacion");
    }

  } else if (pantallaActual == 6) {
    if (imagenes[6]) image(imagenes[6], 0, 0, width, height);
        if (caracteresVisibles < textoPantalla6.length) {
      caracteresVisibles += velocidadTexto;
    }
    let textoParcial = textoPantalla6.substring(0, floor(caracteresVisibles));
    stroke(100);
    strokeWeight(1);
    fill(0, 0, 0, 200); 
    rect(50, 310, 700, 110, 8);
    noStroke();
    fill(230);
    textSize(15);
    textAlign(LEFT, TOP);
    text(textoParcial, 70, 325, 660, 80);
    dibujarFlechaSiguiente(715, 395);
  } else if (pantallaActual == 7) {
    if (imagenes[7]) image(imagenes[7], 0, 0, width, height);
    if (caracteresVisibles < textoPantalla7.length) {
      caracteresVisibles += velocidadTexto;
    }
    let textoParcial = textoPantalla7.substring(0, floor(caracteresVisibles));
    stroke(100);
    strokeWeight(1);
    fill(0, 0, 0, 200); 
    rect(50, 310, 700, 110, 8);
    noStroke();
    fill(230);
    textSize(15);
    textAlign(LEFT, TOP);
    text(textoParcial, 70, 325, 660, 80);
    dibujarFlechaSiguiente(715, 395);
  } else if (pantallaActual == 8) {
    if (imagenes[8]) image(imagenes[8], 0, 0, width, height);
    if (caracteresVisibles < textoPantalla8.length) {
      caracteresVisibles += velocidadTexto;
    }
    let textoParcial = textoPantalla8.substring(0, floor(caracteresVisibles));
    stroke(100);
    strokeWeight(1);
    fill(0, 0, 0, 200); 
    rect(50, 310, 700, 110, 8);
    noStroke();
    fill(230);
    textSize(15);
    textAlign(LEFT, TOP);
    text(textoParcial, 70, 325, 660, 80);
    dibujarFlechaSiguiente(715, 395);
  } else if (pantallaActual == 9) {
    if (imagenes[9]) image(imagenes[9], 0, 0, width, height);
  } else if (pantallaActual == 10) {
    if (imagenes[10]) image(imagenes[10], 0, 0, width, height);
  } else if (pantallaActual == 11) {
    if (imagenes[11]) image(imagenes[11], 0, 0, width, height);
  }
}

function dibujarFlechaSiguiente(x, y) {
  let hovering = colisionBoton(x - 15, y - 15, 30, 30);

  push();
  stroke(hovering ? 255 : 180);
  strokeWeight(3);
  fill(hovering ? 255 : 180);

  triangle(
    x - 10, y - 10, 
    x - 10, y + 10, 
    x + 10, y       
  );
  pop();
}

function colisionBoton(x, y, w, h) {
  return (
    mouseX > x &&
    mouseX < x + w &&
    mouseY > y &&
    mouseY < y + h
  );
}

function mousePressed() {
  if (pantallaActual == 1) {
    if (colisionBoton(700, 380, 30, 30)) {
      pantallaActual = 2;
      caracteresVisibles = 0;
    }
  } else if (pantallaActual == 2) {
    if (colisionBoton(150, 350, 230, 50)) {
      pantallaActual = 3;
      caracteresVisibles = 0;
    } else if (colisionBoton(420, 350, 230, 50)) {
      pantallaActual = 8;
      caracteresVisibles = 0;
    }
  } else if (pantallaActual == 3) {
    if (colisionBoton(700, 380, 30, 30)) {
      pantallaActual = 4;
    }
  } else if (pantallaActual == 4) {
    if (colisionBoton(180, 300, 75, 50)) {
      pantallaActual = 5;
      subestadoPantalla5 = 1; // Inicia en el texto de la Pantalla 5
      caracteresVisibles = 0; // Reinicia la animación del texto
    } else {
      mensajeX = mouseX;
      mensajeY = mouseY;
      tiempoMensaje = millis();
    }
  } else if (pantallaActual == 5) {
    if (subestadoPantalla5 === 1) {
      // Al presionar la flecha de la Pantalla 5, pasa al Estado 2 (Botones)
      if (colisionBoton(700, 380, 30, 30)) {
        subestadoPantalla5 = 2;
      }
    } else if (subestadoPantalla5 === 2) {
      // Clics en los botones alineados a Y = 350
      if (colisionBoton(150, 350, 230, 50)) {
        pantallaActual = 6;
        caracteresVisibles = 0;
      } else if (colisionBoton(420, 350, 250, 50)) {
        pantallaActual = 7;
        caracteresVisibles = 0;
      }
    }
  }else if (pantallaActual == 6){
  if (colisionBoton(700, 380, 30, 30)) {
      pantallaActual = 1;
      caracteresVisibles = 0;
    }
  }else if(pantallaActual == 7){
  if (colisionBoton(700, 380, 30, 30)) {
      pantallaActual = 1;
      caracteresVisibles = 0;
    }
  }else if(pantallaActual == 8){
  if (colisionBoton(700, 380, 30, 30)) {
      pantallaActual = 5;
      caracteresVisibles = 0;
    }
  } 
}

function dibujarBoton(x, y, w, h, texto) {
  let hovering = colisionBoton(x, y, w, h);

  push();
  stroke(hovering ? 255 : 120);
  strokeWeight(2);
  fill(hovering ? 60 : 20, 220);
  rect(x, y, w, h, 6);

  noStroke();
  fill(hovering ? 255 : 200);
  textSize(13);
  textAlign(CENTER, CENTER);
  text(texto, x + w / 2, y + h / 2);
  pop();
}

function dibujarLinterna() {
  let x = constrain(mouseX, 0, width);
  let y = constrain(mouseY, 0, height);

  push();
  imageMode(CENTER);
  image(linterna, x, y);
  pop();
}