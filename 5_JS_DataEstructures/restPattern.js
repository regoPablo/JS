'use strict';
const ranger = {
  clases: ['archer', 'gunslinguer', 'sniper', 'gunner'],
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
//EL OPERADOR REST HACE LO OPUESTO AL OPERADOR SPREAD
//EN ARRAYS
//Esto es SPREAD ya que se utiliza en la parte derecha de la asignacion
const arr = [1, 2, ...[3, 4]];
//console.log(arr);

//REST se usa en la parte izquierda de la asignacion y muchas veces para hacer destructuring
const [a, b, ...otros] = [1, 2, 3, 4, 5];
//console.log(a);
// console.log(b);
// console.log(otros);

//Ejemplo con DESTRUCTURING, SPREAD Y REST
const magos = ['arcano', 'necromancer', 'hemomancer', 'chronomancer'];
const guerreros = ['warrior', 'tank', 'bladeMaster', 'espadachin'];

const [arcano, necromancer, hemomancer, chronomancer, ...resto] = [
  ...magos,
  ...guerreros,
];

// console.log(arcano);
// console.log(necromancer);
// console.log(hemomancer);
// console.log(chronomancer);
// console.log(resto);

//EN OBJETOS

const { crossbow, ...demasArmas } = ranger.weapons;
console.log(demasArmas);

//EN FUNCIONES, empaqueta los valores que pasamos por parametros en arrays
const showInArray = function (...numbers) {
  console.log(numbers);
};

add(1, 3, 6, 7, 9);
