//Kata Codewars
//Nombew: Land Perimeter
//Kyu: 5

function landPerimeter(arr) {
  let field = arr;
  let outerPerimeter = 'O'.repeat(arr[0].length);
  let landPerimeter = 0;

  field.push(outerPerimeter);
  field.unshift(outerPerimeter);

  for (var i = 0; i < field.length; i++) {
    field[i] = `O${field[i]}O`;
  }

  for (var i = 1; i < field.length - 1; i++) {
    for (var j = 1; j < field[i].length - 1; j++) {
      if (field[i][j] === 'X') {
        if (field[i - 1][j] === 'O') landPerimeter++;
        if (field[i + 1][j] === 'O') landPerimeter++;
        if (field[i][j - 1] === 'O') landPerimeter++;
        if (field[i][j + 1] === 'O') landPerimeter++;
      }
    }
  }

  return `Total land perimeter: ${landPerimeter}`;
}

let test = [
  'OOOOXO',
  'XOXOOX',
  'XXOXOX',
  'XOXOOO',
  'OOOOOO',
  'OOOXOO',
  'OOXXOO',
];

landPerimeter(test);
