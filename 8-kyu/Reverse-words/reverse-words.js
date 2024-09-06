function textoArray(texto) {
    return texto.split(' ');
}
const texto = "Hola mundo este es un ejemplo";
const array = textoArray(texto);


for (let i = (array.length-1); i > 0; i-- ){
    console.log(array[i]);
}
  

  

