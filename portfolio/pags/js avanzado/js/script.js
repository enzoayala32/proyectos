//ejercicio 1 numeros aleatorios
// function ejercicio1() {
//   let numerosAleatorios = [];
// generamos 10 numeros aleatorios entre 1 y 100 y los añadimos al array
//   for (let i = 0; i < 10; i++) {
//     numerosAleatorios.push(Math.floor(Math.random() * 100) + 1);
//   }
// mostrar el Array en consola
//   console.log(numerosAleatorios);
// }
// ejercicio1();

//ejercicio 2-a iterar por todos los elementos dentro de un array utilizando while
// function ejercicio2(){
// let array=[1,2,3,4,5,6]
// let i=0
//recorremos con el while
// while(i<array.length){
//     console.log(array[i])
//     i++
// }
// }
// ejercicio2()

// ejercicio 2 -b iterar por todos los elementos de un array utilizando for 
// function ejercicio3(){
//     let array=[1,2,3,4,5,6]
//     for(let i=0; i< array.length;i++){
//         console.log(array[i])
//     }
// }
// ejercicio3()

// ejercicio 2-c mostrar todos los elementos dentro de un array sumandole uno a cada uno 
// function ejercicio4(){
//     let array=[1,2,3,4,5,6]
//     for(let i=0;i< array.length;i++){
//         array[i] +=1
//     }
//     console.log("array original")
// console.log("1,2,3,4,5,6")
// console.log("array+1")
// console.log(array)
// }
// ejercicio4()

// ejercicio 2-d generar una copia de un array pero con todos los elementos incrementados en 1
// function ejercicio5(){
//     let array=[1,2,3,4,5,6]
//     console.log(array)
//     for(let i=0;i<array.length;i++){
//         array[i]+=1
//     }
//     console.log(array)
// }
// ejercicio5()

// ejercicio 3 dado un array de numeros mostrar como quedaria si cada uno de los numeros es elevado al cuadrado
// function ejercicio6(){
//     let array=[1,2,3,4,5,6]
//     console.log(array)
//     for(let i=0;i<array.length;i++){
//         array[i]*=array[i]
//     }
//     console.log(array)
// }
// ejercicio6()

// ejercicio 4 dado el array [1, -4, 12, 0, -3, 29, -150] hacer la suma solo de sus numeros positivos
// function ejercicio7(){
// let miArray=[1, -4, 12, 0, -3, 29, -150]
// let sumaPositivos=0
// for(let i=0;i < miArray.length; i++){
//     if(miArray[i] > 0){
//         sumaPositivos+=miArray[i]
//     }
// }
// console.log(sumaPositivos)
// }
// ejercicio7()

// ejercicio 5-a obtener aquellos nombres con al menos 6 letras
// function ejercicio8(){
//     let array=["Florencia","Lucas","Matias","Bruno","Gustavo","Martin"]
//     let nombres=[]
//     for(let i=0;i<array.length;i++){
//         if(array[i].length>=6){
//             nombres.push(array[i])
//         }
//     }
//     console.log(nombres)
// }
// ejercicio8()

// ejercicio 5-b obtener los nombes que comienzan con "M"
// function ejercicio9(){
//     let array=["Florencia","Lucas","Matias","Bruno","Gustavo","Martin"]
//     let nombresconM=[]

//     for(let i=0;i< array.length;i++ ){
//         if(array[i][0]==="M"){
//             nombresconM.push(array[i])
//         }
//     }
//     console.log(nombresconM)
// }
// ejercicio9()

// ejercicio 5-c generar un Array que contenga todos los nombres en mayusculas
// function ejercicio10(){
//     let array=["Florencia","Lucas","Matias","Bruno","Gustavo","Martin"]
//     console.log(array)
//     let nombremayus=[]
//     for(let i=0;i< array.length;i++){
//         nombremayus.push(array[i].toUpperCase())
//     }
//     console.log(nombremayus)
// }
// ejercicio10()

// ejercicio 6 Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar si un color introducido se encuentra dentro del array o no.
// function ejercicio11(){
//     let colores=["azul", "amarillo", "rojo", "verde", "café", "rosa"] 
//     console.log(colores)
//     let color=prompt("ingresa un color:azul,amarillo,rojo,verde,cafe o rosa")
//     if(colores.includes(color)){
//         console.log("el color " + color + " se encuentra en el array")
//     }else{
//         console.log("el color " + color+ " no se encuentra en el array")
//     }
// }
// ejercicio11()
