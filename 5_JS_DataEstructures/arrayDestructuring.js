"use stric";

//Usando destructuring podemos asignar valores de un array a variables
const clases = {
  monje: ["Paladin", "Clerigo", "Justiciero"],
  asesino: ["Ninja", "ShadowBlade", "NightBlade"],
  mago: ["Arcano", "Elemental", "Cronomancer", "Hemomancer"],
  eligeFavoritos: function (favMonje, favAsesino, favMago) {
    return [this.monje[favMonje], this.asesino[favAsesino], this.mago[favMago]];
  },
};

//La forma antigua de asignar elementos de un array a variables seria:

let monje1 = clases.monje[0];
let monje2 = clases.monje[1];
let monje3 = clases.monje[2];
// console.log(monje1);
// console.log(monje2);
// console.log(monje3);

//Con destructuring podemos hacerlo mas simple
const [monjeX, monjeY, monjeZ] = clases.monje;
//console.log(monjeX);
//console.log(monjeY);
//console.log(monjeZ);

//Podemos ignorar elementos por posicion al hacer destructuring de esta forma.
//Vamos a ignorar el elemento del medio de un array
let [asesino1, , asesino3] = clases.asesino;
//console.log(asesino1);
//console.log(asesino3);

//Imaginemos que ahora el NightBlade queremos que sea el asesino nº1 y el Ninja el 3
//Con destructuring podemos hacerlo de forma facil

[asesino1, asesino3] = [asesino3, asesino1];
//console.log(asesino1);
//console.log(asesino3);

//Tambien podemos ohacer destructuring de un metodo
let [monjeFav, asesinoFav, magoFav] = clases.eligeFavoritos(1, 2, 2);
//console.log(monjeFav);
//console.log(asesinoFav);
//console.log(magoFav);

//Destructuring en nested arrays
const nested = [2, 4, [5, 6]];

const [primero, segundo, [tercero, cuarto]] = nested;
// console.log(primero);
// console.log(segundo);
// console.log(tercero);
// console.log(cuarto);

//Default values. Podemos hacer destructuring con valores por defecto en caso de no
//saber la longitud de un arry
const arrNumeros = [1, 2];
const [uno = 1, dos = 1, tres = 1] = arrNumeros;
console.log(uno);
console.log(dos);
console.log(tres);

//Como vemos al no existir un tercer elemento, le asigna un 1 de forma predeterminada
//Si los 2 primeros valores tampoco existiesen tambien les asignaria un 1
