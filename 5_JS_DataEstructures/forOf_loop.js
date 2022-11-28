'use strict';

const initialZones = ['Demacia', 'Shurima', 'Noxus', 'Freijlord', 'Ionia'];
const weapons = ['Axe', 'Gun', 'Sword', 'Spear', 'Magic Wand'];

for (const zone of initialZones) {
  console.log(zone);
}

//CARACTERISTICAS
// - Al igual que el for loop podemos utilizar las sentencias break y continue para controlar el flujo de bucle

// - Al igual que el for loop podemos utilizar indices con el metodo array.entries(), veamos un ejemplo

for (const weapon of weapons.entries()) {
  console.log(weapon);
  console.log(weapon[0] + ': ' + weapon[1]);
  //Como vemos ahora en weapon tenemos un array con el indice y el valor por cada entrada
}

//Podemos usar destructuring para acceder de manera mas facil al indice y al valor

for (const [indice, elemento] of weapons.entries()) {
  console.log(indice);
  console.log(elemento);
}
