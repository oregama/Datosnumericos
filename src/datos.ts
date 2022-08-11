import "./styles.css";

let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let rotulo = document.getElementById("rotulo");
btnEnv.addEventListener("click" , () => {
  let datoNumerico : number = Number(dato.value)
console.log("el dato ingresado es ",datoNumerico);

});