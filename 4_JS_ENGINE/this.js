"use strict";
//1-Utilizada en el contexto de ejecucion global, this apunta al objeto global window
console.log(this);

//2-En un metodo dentro de un objeto this apunta al propio objeto que lo llama
let persona = {
  nombre: "Pablo",
  edad: 31,
  residencia: "Compostela",
  devuelveInfo: function () {
    console.log(this);
  },
};

persona.devuelveInfo();

//2-Aun y haciendo method borrowing, this apunta al objeto que lo llama. Es decir, persona 2
let persona2 = {
  nombre: "Carlos",
  edad: 21,
  residencia: "Coruña",
};

persona2.devuelveInfo = persona.devuelveInfo;
persona2.devuelveInfo();

//3-Si utilizamos arrow functions como metodo, this NO apunta al propio objeto que lo llama sino al objeto padre
let persona3 = {
  nombre: "Isabel",
  edad: 87,
  residencia: "Xuño",
  devuelveInfo: () => {
    console.log(this);
  },
};

persona3.devuelveInfo();

//4-En una funcion normal(que no sea arrow) this adquiere el valor de undefined
function valorThis() {
  console.log(this);
}

valorThis();

//5-En un evento, this apunta al propio elemento del DOM.
document.querySelector(".evento").addEventListener("click", function () {
  console.log(this);
});
