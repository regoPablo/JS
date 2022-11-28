'use strict';

//OBJECT AND ARRAY DESTRUCTURING

/*
let eligeFavs = (graficas, fav1, fav2) => {
  return [graficas[fav1 - 1], graficas[fav2 - 1]];
};

let nvidiaGraphics = ['3060', '3070', '3070ti', '3080', '3080ti', '3090'];

let graficasElegidas = eligeFavs(nvidiaGraphics, 4, 6);

console.log(graficasElegidas);
*/

/*
const classes = {
  name: ['paladin', 'bard', 'rogue', 'mage'],
  origin: ['jonia', 'demacia', 'noxus', 'shurima', 'ixtal'],
  eligeClase: function (nameIndex, originIndex) {
    return [this.name[nameIndex], this.origin[originIndex]];
  },
};

//hacemos destructuring pora guardar las clases del array en variables
let [class1, class2, class3, class4] = classes.name;

console.log(class1, class2, class3, class4);

//podemos cambiar los valores de posicion sin tener que crear variables temporales
[class1, class2, class3, class4] = [class4, class3, class2, class1];
console.log(class1, class2, class3, class4);

//usamos destructuring en llamada a metodo que devuelve un array para guardar en variable
let [nombre, origen] = classes.eligeClase(0, 1);
console.log(nombre, origen);

//podemos usar tambien destructuring en nested arrays
let arrNumeros = [1, 2, 3, [4, 5]];

const [var1, var2, var3, [var4, var5]] = arrNumeros;
console.log(var1, var2, var3, var4, var5);

//podemos poner valores por defecto
let critChance = [2.0, 3.0];
let [sword = 2.0, axe = 3.0, spear = 1.0] = critChance;
console.log(sword, axe, spear);

//
const tiempo = {
  dia: ['lunes', 'martes'],
  temperatura: [27, 22],
  velViento: [13, 20],
};

const { temperatura, velViento } = tiempo;
console.log(temperatura);
console.log(velViento);

*/

//SPREAD OPERATOR

const arr = [7, 8, 9];

//Podemos añadir elementos de un array a otro array facilmente

//Tanto al principio
const newArr = [5, 6, ...arr];
console.log(newArr);

//Como al final
const newArr2 = [...arr, 10, 11];
console.log(newArr2);

//Podemos mergear 2 arrays
const arrMerge = [...arr, ...newArr];
console.log(arrMerge);

//Podemos listar por ejemplo los valores individuales de un array
console.log(...arrMerge);

//El spread operator se puede usar en todas las estructuras iterable
//Estructuras iterables: strings, array, maps, sets. NO objetos

//vamos a usar el spread operator para guardas las letras de una palabrea en un array

let firstName = 'Pablo';
let arrName = [...firstName];
console.log(arrName);
