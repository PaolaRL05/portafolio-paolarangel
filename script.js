// CRUD ->Create Read Actualizar Delete
let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

//Usar el punto es para llamar a una propiedad o a una acción del objeto
//Acciones se distinguen por los paréntesis

typewriter
  .pauseFor(2500)
  .typeString('Paola Rangel')
  .pauseFor(300)
  .deleteAll()
  .typeString('Estudiante de Ing. Biomédica')
  .pauseFor(1000)
  .start();

  let frase = document.getElementById('frase');

  let writer = new Typewriter(frase, {
    loop: true,
    delay: 75,
  });
  
  //Usar el punto es para llamar a una propiedad o a una acción del objeto
  //Acciones se distinguen por los paréntesis
  
  writer
    .pauseFor(2500)
    .typeString('"Cada nuevo comienzo viene del final de algún otro comienzo"')
    .pauseFor(300)
    .deleteAll()
    .typeString('-Séneca')
    .pauseFor(1000)
    .start();
  