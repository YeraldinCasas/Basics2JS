
console.log("Inicio")

setTimeout (() => {
    console.log("Ejecutando un setTiemOut,esto se ejecuta una sola vez");
}, 5000)


/* setInterval(() => {
    console.log("Ejecutando un setInterval, esto se ejecuta indefinidamente")
}, 1000); */

/* setInterval(() => {
  console.log(new Date().toTimeString())  
}, 2000); */

 let temporizador = setTimeout(() => {
    console.log(new Date().toTimeString())  
  }, 4000);

  clearTimeout(temporizador); //Cancela el setTimeOut, pero para que funcione hay que guardarlo en un variable
   console.log("Después del clear");

   
   //ClearInterval detiene el setInterval, previamente guardado en una variable
   let temporizador2 = setInterval(() => {
       console.log(new Date().toTimeString())
   }, 4000);

   clearInterval(temporizador2);
   console.log("Después del clearInterval")