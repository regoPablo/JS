//Kata Codewars
//Nombew: Help the bookseller !
//Kyu: 6

function stockList(listOfArt, listOfCat) {
  let output = '';
  const stock = {};
  console.log(listOfArt);

  if (listOfArt.length === 0 || listOfCat.length === 0) return '';

  listOfCat.forEach(element => {
    stock[element] = 0;
  });

  for (let i = 0; i < listOfArt.length; i++) {
    if (stock[listOfArt[i].charAt(0)] != undefined) {
      stock[listOfArt[i].charAt(0)] += Number(listOfArt[i].split(' ')[1]);
    }
  }
  //console.log(stock);

  for (const prop in stock) {
    output += ` - (${prop} : ${stock[prop]})`;
  }
  console.log(output.slice(3, output.length));
}

b = [];
c = ['A', 'B'];

stockList(b, c);

let prueba = 'BBAR 150';
//console.log(prueba.split(' ')[0]);
