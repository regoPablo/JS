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

ranger.chooseRanger({
  hairColor: 'Red',
  rangerIndex: 1,
  weaponName: 'rifle',
});

//Usamos destructuring por ejemplo para guardar clases, baseEnergy y el objeto weapons
const { clases, baseEnergy, weapons } = ranger;
// console.log(clases);
// console.log(baseEnergy);
// console.log(weapons);

//Podemos cambiar el nombre de las variable usando propiedad: nuevoNombre
const { clases: playableClases, baseEnergy: energy } = ranger;
//console.log(playableClases);
//console.log(energy);

//Valores por defecto
const { maxLevel = 1000, baseHealth = 1 } = ranger;
//console.log(maxLevel); //Nos aparece 1000 como valor por defecto ya que no tenemos esa propiedad
//console.log(baseHealth); //Aparece el valor correcto en vez de 1

//Destructuring nested objects
//Vamos a hacer destructurin a las propiedades del rifle
const {
  rifle: { damage, range, aiming },
} = weapons;
//console.log(damage);
//console.log(range);
//console.log(aiming);
