// Crea un array que contenga el nombre de cinco colores escritos como strings
// function ejercicio1(){
//     const colores=["rojo","azul","verde","negro","blanco"]
// }
// ejercicio1()

// Guarda en una variable el tercer elemento del array del ejercicio anterior
// function ejercicio2(){
//     const colores=["rojo","azul","verde","negro","blanco"]
//     let mostrarcolor=colores[2]
//     console.log("el valor del tercer elemento es " + mostrarcolor)
// }
// ejercicio2()

// Accede desde un console.log() a la posición 0 del string de la posición 0 del array del ejercicio 1
// function ejercicio3(){
//     const colores=["rojo","azul","verde","negro","blanco"]
//     console.log("el elemento es " + colores[0])
// }
// ejercicio3()

// Se pide realizar un script que genere un número aleatorio entre 1 y 99.
// function ejercicio4(){
//     let aleatorio=Math.floor(Math.random()*99)+1
//     console.log(aleatorio)
// }
// ejercicio4()

// Rellena un array con los números del 1 al 10. Muéstralo por la consola
// function ejercicio5(){
//     let numeros=[]
//     for(let i=1;i<=10;i++){
//         numeros.push(i )
//     }
//     console.log(numeros)
// }
// ejercicio5()

// Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola
// function ejercicio6(){
//     let numero=[]
//     for(let i=0;i<10;i++){
//         numero.push(Math.floor(Math.random()*100))
//     }
//     console.log(numero)
// }
// ejercicio6()

// Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la consola
// function ejercicio7(){
//     let numero=[]
//     for(let i=0;i<15;i++){
//         numero.push(Math.floor(Math.random()*50))
//     }
//     console.log(numero)
// }
// ejercicio7()

// Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión medio.
// function ejercicio8(){
//     let cadena=""
//     let entrada=""
//     while(entrada!=="cancelar"){
//         entrada=prompt("ingresa una cadena de texto(o ingresa'cancelar' para salir):")
//         if(entrada!=="cancelar"){
//             cadena+=entrada+"-"
//         }
//     }console.log(cadena)
// }
// ejercicio8()

// Realizar la misma actividad, pero ahora almacenando los valores en un array y luego recorriendolo para mostrar el resultado deseado del ejercicio
// function ejercicio9(){
//     let cadena=[]
//     let entrada=""
//     while(entrada!=="cancelar"){
//         entrada=prompt("ingresa una cadena de texto(o'cancelar' para salir):")
//         if(entrada!=="cancelar"){
//             cadena.push(entrada)
//         }
//     }
//     let cadena1=""
//     for(let i=0;i<cadena.length;i++){
//         cadena1+=cadena[1]+"-"
//     }
//     console.log(cadena1)
// }
// ejercicio9()

//formulario de pesos a dolares y viceversa
const botonPesos = document.getElementById("convertir-pesos");
botonPesos.addEventListener("click", function () {
  const dolares = document.getElementById("dolares-pesos").value;
  const pesos = dolares * 380;
  document.getElementById("pesos-pesos").value = pesos;
});

const botonDolares = document.getElementById("convertir-dolares");
botonDolares.addEventListener("click", function () {
  const pesos = document.getElementById("pesos-dolares").value;
  const dolares = pesos / 300;
  document.getElementById("dolares-dolares").value = dolares;
});
