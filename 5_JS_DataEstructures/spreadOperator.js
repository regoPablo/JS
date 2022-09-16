'use strict';

const ranger = {
  classes: ['archer', 'gunslinguer', 'sniper', 'gunner'],
  baseHealth: 1500,
  baseEnergy: 2000,
  weapons: {
    crossbow: {
      name: 'crossbow',
      damage: 1500,
      range: 500,
      aiming: false,
    },
    gun: {
      name: 'gun',
      damage: 1200,
      range: 600,
      aiming: true,
    },
    rifle: {
      name: 'rifle',
      damage: 1500,
      range: 1000,
      aiming: true,
    },
    canyon: {
      name: 'canyon',
      damage: 1500,
      range: 800,
      aiming: false,
    },
  },
  //Podemos hacer destructuring en un metodo con un objeto como parametro de forma que al llamarlo el orden de los parametros sea irrelevante
  chooseRanger: function ({ rangerIndex, weaponName, hairColor }) {
    console.log(
      `Has escogido la clase ${this.clases[rangerIndex]}, el arma ${this.weapons[weaponName].name}. El pelo es ${hairColor} `
    );
  },
};

//Usos del spread operator

//1- Podemos ampliar de forma sencilla un array con nuevos elementos
const arr = [1, 2, 3];
const newArr = [-2, -1, 0, ...arr];

console.log(newArr);

//Vamos a crear un array donde incluyamos una clase nueva usando el objeto ranger
const classExpansion = [...ranger.classes, 'rusher'];
console.log(classExpansion);

//2- Sirve para shallow copy de otros arrays
const newClases = [...classExpansion];
console.log(newClases);

//3- Sirve para unir 2 o mas arrays en uno solo
const tvEspaña = ['antena3', 'tve', 'telecinco', 'laSexta'];
const tvUSA = ['fox', 'bbc', 'washington news', 'discovery'];
const tvMundial = [...tvEspaña, ...tvUSA];

console.log(tvMundial);

//4- Podemos pasar parametros en forma de arrays con el spread operator para simular elementos individuales. Ejemplo:
const arrCantidades = [30, 40, 30, 100];

function sumaCantiadades(c1, c2, c3, c4) {
  return c1 + c2 + c3 + c4;
}

console.log(sumaCantiadades(...arrCantidades));

/*El spread operator ademas de funcionar con los arrays, tambien los hace con el resto de estructuras iterables:
arrays, strings, maps, sets. 
*/

//Ejemplo con strings. A partir de un string nombre, creamos un array que contenga todas las letras de ese nombre
const nombre = 'Pablo';
const letrasNombre = [...nombre];
console.log(letrasNombre);

//5-Podemos hacer shallow copy de un objeto.
//Ej: vamos a copiar nuestro objeto rango y le vamos a añadir otra propiedad
const newRanger = { ...ranger, movementSpeed: 400 };
console.log(newRanger);
