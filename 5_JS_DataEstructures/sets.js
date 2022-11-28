//Los sets son colecciones de valores unicos es decir, no pueden tener duplicados
//Admite cualquier iterable por parametros, ej: un array o un string

const ingredientes = new Set([
  'sal',
  'azucar',
  'huevo',
  'harina',
  'azucar',
  'sal',
  'levadura',
]);
console.log(ingredientes); //Solo va a contener los valores unicos

const fullName = new Set('PabloPerezRego');
console.log(fullName);
