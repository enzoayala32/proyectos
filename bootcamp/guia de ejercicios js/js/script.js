// // ejercicio 1
// n1=parseInt(prompt("ingrese primer valor"))
// n2=parseInt(prompt("ingrese segundo valor"))
// resultado=n1-n2
// console.log("el resultado de la resta es "+ resultado)

// ejercicio 2
// function calcular_perimetroy_superficie(lado1){
// perimetro=lado1*4
// superficie=lado1*lado1
// console.log("el perimetro del cuadrado es igual a " + perimetro)
// console.log("la superficie del cuadrado es igual a " + superficie)
// }

// calcular_perimetroy_superficie(3)

// ejercicio 3
// n1=parseInt(prompt("ingrese temperatura en grados farenheit"))
// res=parseInt((n1-32) * 5/9)
// console.log("la temperatura ingresada en grados farenheit equivale a " + res + " grados celsius")

// ejercicio 4
// var num=parseInt(prompt("ingrese un numero para saber si es par o impar"))

// var resto
// resto = num % 2

// if (resto===0){
//     alert("su numero es par")
// }else{
//     alert("su numero es impar")
// }

// ejercicio 5
// var string1=prompt("ingresa texto")
// string1=string1.toUpperCase()
// console.log(string1)
// string1=string1.toLowerCase()
// console.log(string1)

//ejercicio 6
// var num1 = parseInt(prompt("ingrese nota"));
// switch (num1) {
//   case 0:
//   case 1:
//   case 2:
//   case 3:
//     console.log("muy deficiente");
//     break;
//   case 4:
//   case 5:
//     console.log("insuficiente");
//     break;
//   case 6:
//     console.log("suficiente");
//     break;
//   case 7:
//   case 8:
//     console.log("notable");
//   case 9:
//   case 10:
//     console.log("sobresaliente")
// }
// ejercicio 7
// let meses = parseInt(prompt("ingresar mes en numeros"));
// switch (meses) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     console.log("el mes tiene 31 dias");
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     console.log("el mes tiene 30 dias");
//     break;
//   case 2:
//     console.log("el mes tiene 28 dias");
//     break
// }
// ejercicio 8
// function calcular_bultos(cant_bultos,cant_por_caja){
// cajas_comp=Math.floor(cant_bultos/cant_por_caja)
// resto=cant_bultos%cant_por_caja
// console.log("el numero de cajas completas es igual a " + cajas_comp)
// console.log("los bultos sobrantes son " +resto)
// }

// calcular_bultos(10,3)