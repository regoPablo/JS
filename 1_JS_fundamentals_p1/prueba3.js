let bill = 275;
let tip;

bill > 50 && bill < 300 ? (tip = bill * 0.15) : (tip = bill * 0.2);

console.log(
  `El precio de la comida fue ${bill}, la propina ${tip}. Total: ${bill + tip}`
);
