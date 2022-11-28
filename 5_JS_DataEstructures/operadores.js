'use strict';

//Atajos OR
console.log('Pablo' || 'Sara'); //Pablo
console.log('' || 'Sara'); //Sara
console.log('' || null); //Null

//a-Devuelve Pablo ya que en un OR si la primer elemento evaluado es verdadero entonces la sentencia es verdadera
//b-Devuelve Sara ya que el primer valor es falso y el segundo no
//c-En caso de que los dos valores sean falsos devuelve el último

//Atajos AND
console.log('Pablo' && 'Sara'); //Sara
console.log(null && 'Pablo'); //Pablo
console.log(0 && ''); //0
//a- Devuelve el ultimo elemento ya que un and necesitas verificar todos los elementos para ser verdadero

//NULISH COALESCING ??
//Se utiliza para verificar si un elemento es NULISH ( UNICAMENTE null o undefined)
const tiempoActual = null;
const tiempo = tiempoActual ?? 20;
console.log(tiempo); //Devuelve 20 ya que tiempoActual es un elemento null
